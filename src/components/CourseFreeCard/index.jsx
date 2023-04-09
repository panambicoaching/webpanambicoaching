import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Flag from '../Flag';
import Row from 'react-bootstrap/Row';

import './styles.scss'

const CourseFreeCard = ({ item }) => {
  return (
    <Col className="col-12">
      <div className="panambi-free-card">
        <Row>
          <Col className="offset-1 col-10 col-sm-9 offset-lg-2 col-lg-8 d-flex order-2 order-sm-1">
            <Card.Body>
              <h4 className="card-name text-title">{item.name}</h4>
              <p>{item.description}</p>

              <iframe
                src={item.link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Card.Body>
          </Col>
          <Col className="col-12 col-sm-2 d-flex order-1 order-sm-2 justify-content-end"><Flag /></Col>
        </Row>
      </div>
    </Col>
  );
}

export default CourseFreeCard;