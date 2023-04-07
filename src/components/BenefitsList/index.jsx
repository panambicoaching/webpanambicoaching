import Icon from "../Icon";

import './styles.scss'

// variant prop available values -> "courses" ; "workshops"
const benefitsListType = {
	courses: [
    <div className="benefit-item" key={"courses-online"}><Icon design={"benefit"} name={"online"} /><span className="text-label">100% Online</span></div>,
    <div className="benefit-item" key={"courses-access"}><Icon design={"benefit"} name={"access"} /><span className="text-label">Acceso 24/7</span></div>,
    <div className="benefit-item" key={"courses-update"}><Icon design={"benefit"} name={"update"} /><span className="text-label">Actualizaciones permanentes</span></div>,
    <div className="benefit-item" key={"courses-certificate"}><Icon design={"benefit"} name={"certificate"} /> <span className="text-label">Certificado de participación</span></div>
  ],
	workshops: [
    <div className="benefit-item" key={"workshops-online"}><Icon design={"benefit"} name={"online"} /><span className="text-label">Presenciales y online</span></div>,
    <div className="benefit-item" key={"workshops-personalized"}><Icon design={"benefit"} name={"personalized"} /><span className="text-label">Totalmente personalizados</span></div>,
    <div className="benefit-item" key={"workshops-material"}><Icon design={"benefit"} name={"material"} /><span className="text-label">Material teórico y práctico</span></div>,
    <div className="benefit-item" key={"workshops-certificate"}><Icon design={"benefit"} name={"certificate"}/> <span className="text-label">Certificado de participación</span></div>
  ]
}

const BenefitsList = ({ variant }) => {
  return (
    <div className={`panambi-benefits-list`}>
      {benefitsListType[variant]}
    </div>
  );
};

export default BenefitsList;