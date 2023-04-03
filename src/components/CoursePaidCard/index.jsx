import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Icon from "../Icon";

import './styles.scss'

const CoursePaidCard = ({ item, status }) => {
  let link = null;
  if(status === "done") link = "/course_contact";
  if(status === "next") link = item.link;

  return (
    <Col className="col-6 col-sm-4">
      <div className="panambi-paid-card">
        <Link to={link}>
          <Card.Img
            className="card-img"
            variant="top"
            src={item.img_large}
            alt={`Foto del curso ${item.name}}`}
          />

          <Card.Body>
            <h4 className="card-name">{item.name}</h4>
            <div className="card-details">
              <div>{item.modules} clases online</div>
              <Icon name={"duration"} />
              <div>{item.duration} hs</div>
            </div> 
          </Card.Body>
        </Link>
      </div>
    </Col>
  );
}

export default CoursePaidCard;