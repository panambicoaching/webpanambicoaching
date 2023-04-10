import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Icon from "../Icon";

import './styles.scss'

function FAQsItemCustomBtn({ children, eventKey, callback, isOpen }) {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(),
  );

  return (
    <button
      type="button"
      className={`accordion-button${isOpen ? "" : " collapsed"} panambi-faqs-custom-btn`}
      onClick={decoratedOnClick}
    >
      {children}
      
      {isOpen ? <Icon name={"close"} /> : <Icon name={"open"} />}
    </button>
  );
}

export default FAQsItemCustomBtn;