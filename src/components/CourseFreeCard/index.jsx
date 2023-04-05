import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import './styles.scss'

const CourseFreeCard = ({ item }) => {
  return (
    <Col className="col-12">
      <div className='panambi-free-card'>
        <Col className="offset-1 col-10 offset-lg-2 col-lg-8">
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
        <Col className="col-2">FC</Col>
      </div>
    </Col>
  );
}

export default CourseFreeCard;