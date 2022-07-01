import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';
import { Trans } from '@lingui/macro';

const Documentation = () => {
  const nounsLink = (
    <Link
      text={<Trans>NounsDAO</Trans>}
      url="https://www.nouns.wtf"
      leavesPage={true}
    />
  );
  const foodLink = (
    <Link
      text={<Trans>Food Production</Trans>}
      url="https://www.notion.so/Food-Production-5b226cd3e26e4d49821886877ff3f21d"
      leavesPage={true}
    />
  );
  const educationLink = (
    <Link
      text={<Trans>Education & Entertainment</Trans>}
      url="https://www.notion.so/Education-Entertainment-edc1b47424f44434840e6b35bdfe182b"
      leavesPage={true}
    />
  );
  const wellnessLink = (
    <Link
      text={<Trans>Food & Beverage Industry Wellness</Trans>}
      url="https://www.notion.so/Food-Beverage-Industry-Wellness-a93e354112ea4a4e93e7f5395f354d3e"
      leavesPage={true}
    />
  );
  const funLink = (
    <Link
      text={<Trans>FUN!</Trans>}
      url="https://www.notion.so/FUN-eeb648bdcbb74ad4afc405b6d6019b45"
      leavesPage={true}
    />
  );
  const daoLink = (
    <Link
      text={<Trans>FOODNOUNS DAO</Trans>}
      url="https://www.foodnouns.wtf/vote"
      leavesPage={true}
    />
  );
  const notebookLink = (
    <Link
      text={<Trans>Chef Notebook</Trans>}
      url="https://discourse.foodnouns.wtf/"
      leavesPage={true}
    />
  );
  const playgroundLink = (
    <Link text={<Trans>Test Kitchen</Trans>} url="/playground" leavesPage={false} />
  );
  const publicDomainLink = (
    <Link
      text={<Trans>public domain</Trans>}
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link
      text={<Trans>Compound Governance</Trans>}
      url="https://compound.finance/governance"
      leavesPage={true}
    />
  );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>
            <Trans>A Tasty Fork!</Trans>
          </h1>
          <p className={classes.aboutText}>
            <Trans>
              FOODNOUNS is a tasty fork of the {nounsLink}, an experimental on-chain avatar community 
              bootstrapping digital community and identity. Proceeds from 3 FOODNOUNS auctions per day
              builds the Treasury that will fund on-chain Proposals with a focus on these four main areas:
              </Trans>
              </p>
              <p className={classes.aboutText} style={{ paddingBottom: '.5rem' }}>
            <Trans>
              1. {foodLink}
            </Trans>
          </p>          
          <p className={classes.aboutText} style={{ paddingBottom: '.5rem' }}>
            <Trans>
              2. {educationLink}
            </Trans>
          </p>          
          <p className={classes.aboutText} style={{ paddingBottom: '.5rem' }}>
            <Trans>
              3. {wellnessLink}
            </Trans>
          </p>          
          <p className={classes.aboutText} style={{ paddingBottom: '.5rem' }}>
            <Trans>
              4. {funLink}
            </Trans>
          </p>
          <p className={classes.aboutText} style={{ paddingBottom: '4rem' }}>
            <Trans>
              Learn more about proposals and the {daoLink}, take part in longer form discussions in {notebookLink} or start creating FOODNOUNS off-chain using the {playgroundLink}.
            </Trans>
          </p>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Summary</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <Trans>FOODNOUNS artwork is in the {publicDomainLink}.</Trans>
                </li>
                <li>
                  <Trans>One FOODNOUN is trustlessly auctioned every 8 hours, forever.</Trans>
                </li>
                <li>
                  <Trans>50% of FOODNOUNS auction proceeds are trustlessly sent to the treasury.</Trans>
                </li>
                <li>
                  <Trans>25% of FOODNOUNS auction proceeds are trustlessly sent to the {nounsLink}.</Trans>
                </li>
                <li>
                  <Trans>13% of FOODNOUNS auction proceeds are trustlessly sent to the Kithen Nouncil.</Trans>
                </li>
                <li>
                  <Trans>12% of FOODNOUNS auction proceeds are trustlessly sent to the FOODNOUNDERS.</Trans>
                </li>
                <li>
                  <Trans>Settlement of one auction kicks off the next.</Trans>
                </li>
                <li>
                  <Trans>All FOODNOUNS are members of {daoLink}.</Trans>
                </li>
                <li>
                  <Trans>FOODNOUNS DAO uses a fork of {compoundGovLink}.</Trans>
                </li>
                <li>
                  <Trans>One FOODNOUN is equal to one vote.</Trans>
                </li>
                <li>
                  <Trans>The treasury is controlled exclusively by FOODNOUNS via governance.</Trans>
                </li>
                <li>
                  <Trans>Artwork is generative and stored directly on-chain (not IPFS).</Trans>
                </li>
                <li>
                  <Trans>
                    No explicit rules exist for attribute scarcity; all FOODNOUNS are equally rare.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    FOODNOUNDERS receive rewards in the form of FOODNOUNS (10% of supply for first 5 years).
                  </Trans>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Daily Auctions</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <Trans>
                  The FOODNOUNS Auction Contract will act as a self-sufficient FOODNOUN generation and
                  distribution mechanism, auctioning one FOODNOUNS every 8 hours, forever. Auction proceeds
                  (ETH) are automatically deposited in the following ways: 50% to FOODNOUNS DAO Treasury 
                  which is governed by FOODNOUN owners, 25% to the NounsDAO Treasury, 13% to the
                  Kitchen Nouncil and the final 12% to the FOODNOUNDERS.
                </Trans>
              </p>

              <p className={classes.aboutText}>
                <Trans>
                  Each time an auction is settled, the settlement transaction will also cause a new
                  FOODNOUN to be minted and a new 8 hour auction to begin.{' '}
                </Trans>
              </p>
              <p>
                <Trans>
                  While settlement is most heavily incentivized for the winning bidder, it can be
                  triggered by anyone, allowing the system to trustlessly auction FOODNOUNS as long as
                  Ethereum is operational and there are interested bidders.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>FOODNOUNS DAO</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <Trans>
                The main governing body of the FOODNOUNS DAO ecosystem is a fork of {compoundGovLink}.
                Each FOODNOUN is an irrevocable member of FOODNOUNS DAO and entitled to one
                vote in all governance matters. FOODNOUN votes are non-transferable (if you sell your
                FOODNOUN the vote goes with it) but delegatable, which means you can assign your vote to
                someone else as long as you own your FOODNOUN.
              </Trans>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Governance ‘Slow Start’</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  In addition to the precautions taken by Compound Governance, FOODNOUNDERS have given
                  themselves a special veto right to ensure that no malicious proposals can be
                  passed while the FOODNOUN supply is low. This veto right will only be used if an
                  obviously harmful governance proposal has been passed, and is intended as a last
                  resort.
                </Trans>
              </p>
              <p>
                <Trans>
                  FOODNOUNDERS will proveably revoke this veto right when they deem it safe to do so.
                  This decision will be based on a healthy FOODNOUN distribution and a community that is
                  engaged in the governance process.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>FOODNOUN Traits</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  FOODNOUNS are generated randomly based Ethereum block hashes. There are no 'if'
                  statements or other rules governing Noun trait scarcity, which makes all FOODNOUNS
                  equally rare. As of this writing, FOODNOUNS are made up of:
                </Trans>
              </p>
              <ul>
                <li>
                  <Trans>backgrounds (2) </Trans>
                </li>
                <li>
                  <Trans>bodies (1)</Trans>
                </li>
                <li>
                  <Trans>accessories (17) </Trans>
                </li>
                <li>
                  <Trans>heads (65) </Trans>
                </li>
                <li>
                  <Trans>glasses (21)</Trans>
                </li>
              </ul>
              <Trans>
                You can experiment with off-chain FOODNOUN generation at the {playgroundLink}.
              </Trans>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>On-Chain Artwork</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  FOODNOUNS are stored directly on Ethereum and do not utilize pointers to other
                  networks such as IPFS. This is possible because FOODNOUNS parts are compressed and
                  stored on-chain using a custom run-length encoding (RLE), which is a form of
                  lossless compression.
                </Trans>
              </p>

              <p>
                <Trans>
                  The compressed parts are efficiently converted into a single base64 encoded SVG
                  image on-chain. To accomplish this, each part is decoded into an intermediate
                  format before being converted into a series of SVG rects using batched, on-chain
                  string concatenation. Once the entire SVG has been generated, it is base64
                  encoded.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>FOODNOUN Seeder Contract</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  The FOODNOUN Seeder contract is used to determine FOODNOUN traits during the minting
                  process. The seeder contract can be replaced to allow for future trait generation
                  algorithm upgrades. Additionally, it can be locked by the FOODNOUNS DAO to prevent any
                  future updates. Currently, FOODNOUN traits are determined using pseudo-random number
                  generation:
                </Trans>
              </p>
              <code>keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))</code>
              <br />
              <p>
                <Trans>
                  Trait generation is not truly random. Traits can be predicted when minting a FOODNOUN
                  on the pending block.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>FOODNOUNDERS & Kitchen Nouncil</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  'FOODNOUNDERS' are 'professional chefs turned degens' who initiated FOODNOUNS. Here are the
                  FOODNOUNDERS:
                </Trans>
              </p>
              <ul>
                <li>
                  <Link text="@cheffo_nft" url="https://twitter.com/cheffo_nft" leavesPage={true} />
                </li>
                <li>
                  <Link text="@artismyweapon" url="https://twitter.com/artismyweapon_" leavesPage={true} />
                </li>
              </ul>
              <p>
                <Trans>
                  Every 10th FOODNOUN for the first 5 years of the project (Noun ids #0, #10, #20, #30 and so on)
                  will be automatically sent to the FOODNOUNDER's wallet to be vested and shared among the founding
                  members of the project.
                </Trans>
              </p>
              <p>
                <Trans>
                  'The Kitchen Nouncil' are food, technology and human enthusiasts that advice and assist FOODNOUNS. Here are the
                  Kitchen Nouncil Members:
                </Trans>
              </p>
              <ul>
                <li>
                  <Link text="@aubtoshi_nft" url="https://twitter.com/aubtoshi_nft" leavesPage={true} />
                </li>
                <li>
                  <Link text="@nonodynamo" url="https://twitter.com/nonodynamo" leavesPage={true} />
                </li>
                <li>
                  <Link text="Kevin" url="https://twitter.com/foodnouns" leavesPage={true} />
                </li>
                <li>
                  <Link text="Michael" url="https://twitter.com/foodnouns" leavesPage={true} />
                </li>
              </ul>
              <p>
                <Trans>
                  FOODNOUNDER and Kitchen Nouncil distributions don't interfere with the cadence of 8 hour auctions. FOODNOUNS
                  are sent directly to the FOODNOUDER's Multisig, and auctions continue on schedule
                  with the next available FOODNOUN ID.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
