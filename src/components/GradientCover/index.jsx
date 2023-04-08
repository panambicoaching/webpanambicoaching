import BenefitsList from '../BenefitsList';

import './styles.scss'

const gradientCoverType = {
	courses: {
		header: "Desarrollá tus soft skills",
		text_p1: "Mis cursos están dedicados a aquellas personas que quieran desarrollar estas capacidades de manera personal o en forma grupal dentro de sus entornos laborales o familiares.",
        text_p2: "El desarrollo de estas herramientas sirven para cualquier ser humano que quiere mejorar su interacción social en su entorno y comprenderse a sí mismo y su propio comportamiento."
	},
	workshops: {
		header: "Potenciá tu futuro y el de tu empresa",
		text_p1: "Los talleres están orientados a crear metodologías de trabajo donde se busca priorizar al trabajador y brindarle herramientas de desarrollo para mejorar sus relaciones laborales, incentivando una competencia sana dentro de la organización, cambiando su interacción con el medio y generando un clima organizacional más ameno y fluido para mejorar así su servicio y transmitir estos conocimientos a su entorno.",
        text_p2: "El objetivo principal es generar no sólo un cambio organizacional, sino además social, del círculo inmediato y externo de las personas."
	}
}

// variant prop available values -> "courses" ; "workshops"
const GradientCover = ({ variant }) => {
  return (
    <section className={`container-fluid panambi-gradient-cover`}>
      <div className="container-lg">
        <div className="gradient-cover-details">
          <h1>{gradientCoverType[variant].header}</h1>
          <p>{gradientCoverType[variant].text_p1}</p>
          <p>{gradientCoverType[variant].text_p2}</p>
        </div>
        <div className="gradient-cover-benefits-list">
          <BenefitsList variant={variant} />
        </div>
      </div>
    </section>
  );
};

export default GradientCover;