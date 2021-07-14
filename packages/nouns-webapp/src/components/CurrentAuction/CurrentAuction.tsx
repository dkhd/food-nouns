import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useAuction } from '../../wrappers/nounsAuction';
import config from '../../config';
import StandaloneNoun from '../StandaloneNoun';
import AuctionActivity from './AuctionActivity';
import Section from '../Section';

const CurrentAuction = () => {
  const auction = useAuction(config.auctionProxyAddress);

  return (
    <Section bgColor="#c5ecf8">
      <Container fluid="lg">
        <Row noGutters={true}>
          <Col lg={{ span: 4, offset: 2 }}>
            {auction && <StandaloneNoun nounId={auction && auction.nounId} />}
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <AuctionActivity auction={auction && auction} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default CurrentAuction;
