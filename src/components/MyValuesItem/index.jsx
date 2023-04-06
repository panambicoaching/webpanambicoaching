import Col from 'react-bootstrap/Col'
import Icon from "../Icon";

import './styles.scss'

const MyValuesItem = ({ icon, header, text }) => {
  return (
    <Col className="col-12 col-sm-6">
      <div className="panambi-value-item">
        <Icon className="value-icon" design={"blue-rounded"} name={icon} />
        <h3 className="value-header"><span>{header}</span></h3>
        <p className="value-text">{text}</p>
      </div>
    </Col>
  );
};

export default MyValuesItem;