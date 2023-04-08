import Card from 'react-bootstrap/Card'
import Icon from "../Icon";

import './styles.scss'

const createStars = (item) => {
  const stars = [];
  for (let index = 1; index <= item.stars; index++) {
    stars.push(<Icon key={`star-${index}-of-opinion-${item.id}`} name={"star"} />);
  }
  
  return stars;
}

const createUserAvatar = (item) => {
  let userAvatarContent = item.author_first_name[0].toUpperCase();
  userAvatarContent += item.author_last_name[0].toUpperCase();

  return userAvatarContent;
}

const OpinionCard = ({ item }) => {
  return (
    <div className="panambi-opinion-card">
      <div className="card-header">
        <div className="card-user-avatar text-label" title={`${item.author_first_name} ${item.author_last_name}`}>
          {createUserAvatar(item)}
        </div>
        <div className="card-user-detail">
          <h4>{item.job}</h4>
          <div className="card-stars">{createStars(item)}
          </div>
        </div>
      </div>
      <Card.Body>
        <p className="card-opinion text-body2">{item.opinion}</p>
      </Card.Body>
    </div>
  );
}

export default OpinionCard;