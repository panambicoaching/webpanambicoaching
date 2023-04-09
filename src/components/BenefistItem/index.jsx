import Icon from "../Icon";

import './styles.scss'

const BenefitsItem = ({ name, text }) => {
  return (
    <div className="panambi-benefits-item">
      <Icon design={"benefit"} name={name} />
      <div className="text-label">{text}</div>
    </div>
  );
};

export default BenefitsItem;