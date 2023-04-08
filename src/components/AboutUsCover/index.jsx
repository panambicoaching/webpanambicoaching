import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import img_large from "../../assets/img/about/about-us-large.webp";
import img_medium from "../../assets/img/about/about-us-medium.webp";
import img_small from "../../assets/img/about/about-us-small.webp";

import "./styles.scss";

const AboutUsCover = () => {
  return (
    <section className={`container-fluid panambi-about-us`} id="about-cover">
      <div className="container-lg">
        <Row>
          <Col className="col-12">
            <div className="about-us-msj text-label">Mi historia</div>
            <h1>Panambí coaching</h1>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-sm-6 col-lg-6">
            <article>
              <p>El coaching en aviación busca priorizar al capital humano en un entorno automatizado. La diferencia entre el coaching profesional y un coaching especializado es el manejo del vocabulario, ya que el coach sabe del trabajo del coachee, tiene su mismo vocabulario, es experto en las temáticas abordadas y lo puede acompañar de una manera más rápida, con objetivos claros en su área profesional.</p>
              <p>Mi visión es ofrecer el acompañamiento necesario para superar obstáculos  y potenciar el crecimiento a través del desarrollo de soft skills o habilidades blandas.</p>
              <p>Mi metodología se basa en afrontar cada habilidad blanda desde los cuatro cuerpos: el mental, físico, emocional y espiritual, para englobar al ser humano de forma completa.</p>
            </article>
          </Col>
          <Col className="col-12 col-sm-6 offset-lg-1 col-lg-5 d-flex justify-content-center justify-sm-content-end align-items-end">
            <figure>
              <picture>
                <source media="(min-width: 576px) and (max-width: 991.98px)"
                        srcSet={img_medium} />
                <source media="(max-width: 575.98px)"
                        srcSet={img_small} />

                <img 
                  srcSet={img_large}
                  alt={`Imagen de Carla, de la sección historia de Panambí coaching`} loading="lazy"
                />
              </picture>
            </figure>
          </Col>
        </Row>
      </div> 
    </section>
  );
}

export default AboutUsCover;