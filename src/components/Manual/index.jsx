import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import img_large from "../../assets/img/about/manual-large.webp";
import img_medium from "../../assets/img/about/manual-medium.webp";
import img_small from "../../assets/img/about/manual-small.webp";

import "./styles.scss";

const Manual = () => {
  return (
    <section className={`container-fluid panambi-manual`}>
      <div className="container-lg">
        <Row>
          <Col className="col-12 col-sm-5 col-lg-6 order-2 order-sm-1 d-flex justify-content-center justify-sm-content-start">
            <picture>
              <source media="(min-width: 576px) and (max-width: 991.98px)"
                      srcSet={img_medium} />
              <source media="(max-width: 575.98px)"
                      srcSet={img_small} />

              <img 
                srcSet={img_large}
                alt={`Imagen de la portada del manual de Panambí coaching`} loading="lazy"
              />
            </picture>
          </Col>
          <Col className="col-12 col-sm-7 col-lg-6 order-1 order-sm-2 d-flex justify-content-center flex-column">
            <div className="manual-msj text-label">Próximamente</div>
            <h2>Mi manual</h2>
            <article>
              <p>Las vivencias adquiridas a lo largo de 10 años de desempeñarme como controladora de tránsito aéreo, me llevaron a escribir un manual que publicaré en breve, detallando este nuevo aspecto de coaching en aviación, donde remarco todas aquellas técnicas que se pueden aplicar al capital humano de todas las organizaciones de la aviación y del ambiente en general.</p>
            </article>
          </Col>
        </Row>
      </div> 
    </section>
  );
}

export default Manual;