import Alert from 'react-bootstrap/Alert'

import './styles.scss'
import BenefitsItem from '../BenefistItem';

// variant prop available values -> "courses" ; "workshops"
const items = [
	{variant: "courses", name: "online", text: "100% Online"},
  {variant: "courses", name: "access", text: "Acceso 24/7"},
  {variant: "courses", name: "update", text: "Actualizaciones permanentes"},
  {variant: "courses", name: "certificate", text: "Certificado de participación"},
  {variant: "workshops", name: "online", text: "Presenciales y online"},
  {variant: "workshops", name: "personalized", text: "Totalmente personalizados"},
  {variant: "workshops", name: "material", text: "Material teórico y práctico"},
  {variant: "workshops", name: "certificate", text: "Certificado de participación"}
]

const BenefitsList = ({ variant }) => {
  return (
    <div className={`panambi-benefits-list`}>
      {
				items.length > 0
					? (<>
							{
								items.filter((item) => item.variant === variant)
                .map((item) => <BenefitsItem key={`benefit-${item.name}`} {...item} />)
							}
						</>)
					: <div className="col-12">
							<Alert variant="secondary" className="text-center fw-bold">{`No hay valores de la variante ${variant} disponibles en la API`}</Alert>
						</div>
			}
    </div>
  );
};

export default BenefitsList;