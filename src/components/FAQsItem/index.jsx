import Accordion from 'react-bootstrap/Accordion';

import './styles.scss'

const FAQsItem = ({ id, header, text }) => {
  return (
    <Accordion.Item eventKey={id} className="panambi-faqs-item">
      <Accordion.Header as="div">
        <h3>{header}</h3>
      </Accordion.Header>
      <Accordion.Body>
        {text.map((item, index) => (
          <p key={`faq-${id}-p${index}`}>{item}</p>
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default FAQsItem;