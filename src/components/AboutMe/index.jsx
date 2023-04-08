import AppButton from "../AppButton";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import img_large from "../../assets/img/about/about-me-large.webp";
import img_medium from "../../assets/img/about/about-me-medium.webp";
import img_small from "../../assets/img/about/about-me-small.webp";

import "./styles.scss";

const AboutMe = () => {
  return (
    <section className={`container-fluid panambi-about-me`}>
      <div className="container-md">
        <Row>
          <Col className="col-12 col-sm-5 col-lg-6 order-2 order-sm-1 d-flex justify-content-center justify-sm-content-start align-items-center">
            <figure>
              <picture>
                <source media="(min-width: 576px) and (max-width: 991.98px)"
                        srcSet={img_medium} />
                <source media="(max-width: 575.98px)"
                        srcSet={img_small} />

                <img 
                  srcSet={img_large}
                  alt={`Imagen de Carla, de la sección quien soy`} loading="lazy"
                />
              </picture>
            </figure>
          </Col>
          <Col className="col-12 col-sm-7 col-lg-6 order-1 order-sm-2">
            <div className="about-me-msj text-label">Evolucionemos juntos</div>
            <h2>¿Quién soy?</h2>
            <article>
              <p>Soy Carla Paola González Lillo, Controladora de tránsito aéreo desde el año 2008, y cuento con la certificación de Coach profesional desde el año 2018. Soy amante de la naturaleza, la aeronáutica y la espiritualidad.</p>
              <p>Actualmente trabajo en la creación del Coaching en Aviación o Coaching Aeronáutico. Soy mamá, esposa, tía, hija, sobrina, amiga, en fin, una mujer como todas las demás, con sueños, desafíos y metas.</p>
              <p>La esencia de mi trabajo es facilitar el crecimiento personal y profesional, ayudándote a poder con todo: tu trabajo, familia y estudios, aportándote seguridad y determinación, brindándote herramientas necesarias para acompañarte en tu camino y que puedas lograr tus metas, con objetivos a corto, mediano y largo plazo.</p>
              <p>Juntos, armaremos un plan especializado, acorde a tu vida y reavivando la llama de fuego que vive en ti.</p>
              <p>Si eres del mundo aeronáutico ¡mejor aún!</p>
            </article>
            <AppButton variant={"regular"} as={"link"} design={"primary"} to={"/contact"} text={"Volemos juntos"} />
          </Col>
        </Row>
      </div> 
    </section>
  );
}

export default AboutMe;