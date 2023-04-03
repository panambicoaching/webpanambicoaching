import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import './styles.scss'

const CourseFreeCard = ({ item }) => {
  return (
    <Col className="col-12">
      <div className='panambi-free-card'>
        <Col className="offset-2 col-8">
          <Card.Body>
            <h4 className="card-name text-title">{item.name}</h4>
            <p>{item.description}</p>

            <iframe
              width="708"
              height="405"
              src={item.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Card.Body>
        </Col>
        <Col className="col-2">Flag Component</Col>
      </div>
    </Col>
  );
}

export default CourseFreeCard;