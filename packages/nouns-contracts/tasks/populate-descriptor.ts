import { task, types } from 'hardhat/config';
import ImageData from '../files/image-data.json';
import { chunkArray } from '../utils';

task('populate-descriptor', 'Populates the descriptor with color palettes and Noun parts')
  .addOptionalParam(
    'nftDescriptor',
    'The `NFTDescriptor` contract address',
    '0x8D656ce1Cd9325587B50D5c07dB1Bac27B4247F1',
    types.string,
  )
  .addOptionalParam(
    'nounsDescriptor',
    'The `NounsDescriptor` contract address',
    '0x94D5555d37d79c2EAd5Bdb19E6041C0a04c2F23d',
    types.string,
  )
  .setAction(async ({ nftDescriptor, nounsDescriptor }, { ethers }) => {
    const descriptorFactory = await ethers.getContractFactory('NounsDescriptor', {
      libraries: {
        NFTDescriptor: nftDescriptor,
      },
    });
    const descriptorContract = descriptorFactory.attach(nounsDescriptor);

    const { bgcolors, palette, images } = ImageData;
    const { bodies, accessories, heads, glasses } = images;

    // Chunk head and accessory population due to high gas usage
    // await descriptorContract.addManyBackgrounds(bgcolors);
    // await descriptorContract.addManyColorsToPalette(0, palette);
    // await descriptorContract.addManyBodies(bodies.map(({ data }) => data));

    // const accessoryChunk = chunkArray(accessories, 10);
    // for (const chunk of accessoryChunk) {
    //   await descriptorContract.addManyAccessories(chunk.map(({ data }) => data));
    // }

    // const headChunk = chunkArray(heads, 10);
    // for (const chunk of headChunk) {
    //   await descriptorContract.addManyHeads(chunk.map(({ data }) => data));
    // }

    // await descriptorContract.addManyGlasses(glasses.map(({ data }) => data));

    console.log('Descriptor populated with palettes and parts.');
  });
