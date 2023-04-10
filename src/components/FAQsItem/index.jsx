import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import FAQsItemCustomBtn from "../FAQsItemCustomBtn";

import './styles.scss'

const FAQsItem = ({ id, header, text }) => {
  let [isOpen, setIsOpen] = useState(false);

  const expandFAQsItem = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion-item panambi-faqs-item">
      <div className="accordion-header">
        <FAQsItemCustomBtn eventKey={id} isOpen={isOpen} callback={expandFAQsItem}><h3>{header}</h3></FAQsItemCustomBtn>
      </div>
      <Accordion.Collapse eventKey={id}>
        <div className="accordion-body">
          {text.map((item, index) => (
            <p key={`faq-${id}-p${index}`}>{item}</p>
          ))}
        </div>
      </Accordion.Collapse>
    </div>
  );
}

export default FAQsItem;