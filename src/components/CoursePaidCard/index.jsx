import { HashLink } from "react-router-hash-link";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Icon from "../Icon";

import './styles.scss'

const CoursePaidCard = ({ item, status }) => {
  const courseType = {
    done: {
      link: "/contact/courses/#",
      target: "_self"
    },
    next: {
      link: item.link,
      target: "_blank"
    }
  }

  return (
    <Col className="col-6 col-sm-4">
      <div className="panambi-paid-card">
        <HashLink to={courseType[status].link} target={courseType[status].target}>
          <figure>
            <picture>
              <source media="(min-width: 576px) and (max-width: 991.98px)"
                      srcSet={item.img_medium} />
              <source media="(max-width: 575.98px)"
                      srcSet={item.img_small} />

              <img 
                srcSet={item.img_large}
                className="card-img"
                alt={`Foto del curso ${item.name}`} loading="lazy"
              />
            </picture>
          </figure>

          <Card.Body>
            <h4 className="card-name">{item.name}</h4>
            <div className="card-details">
              <div>{item.modules} clases</div>
              <Icon name={"duration"} />
              <div>{item.duration} hs</div>
            </div> 
          </Card.Body>
        </HashLink>
      </div>
    </Col>
  );
}

export default CoursePaidCard;