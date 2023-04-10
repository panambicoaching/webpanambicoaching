import "./styles.scss";
import { Row, Col } from "react-bootstrap";
import AppButton from "../AppButton";
import CarlaQuienSoyLg from "../../assets/img/home/carla-quien-soy-large.webp";
import CarlaQuienSoyMd from "../../assets/img/home/carla-quien-soy-medium.webp";
import CarlaQuienSoySm from "../../assets/img/home/carla-quien-soy-small.webp";
import InternationalCoachingSm from "../../assets/img/home/international-coaching-small.webp";
import InternationalCoachingMd from "../../assets/img/home/international-coaching-medium.webp";
import InternationalCoachingLg from "../../assets/img/home/international-coaching-large.webp";
import ActaCbaNoaSm from "../../assets/img/home/acta-cba-noa-small.webp";
import ActaCbaNoaMd from "../../assets/img/home/acta-cba-noa-medium.webp";
import ActaCbaNoaLg from "../../assets/img/home/acta-cba-noa-large.webp";
import AccessConsciousnessSm from "../../assets/img/home/access-consciousness-small.webp";
import AccessConsciousnessMd from "../../assets/img/home/access-consciousness-medium.webp";
import AccessConsciousnessLg from "../../assets/img/home/access-consciousness-large.webp";


const Hello = () => {
    return (
        <section className="hello container-fluid" id="hello">
            <div className="container-lg">
                <Row>
                    <Col className="col-12 col-sm-5 col-lg-6 d-flex align-items-center justify-content-center justify-content-sm-start order-2 order-sm-1">
                        <picture>
                            <img
                                src={CarlaQuienSoySm}
                                srcSet={`${CarlaQuienSoySm} 304w, ${CarlaQuienSoyMd} 273w, ${CarlaQuienSoyLg} 448w`}
                                sizes="(max-width: 576px) 304px, (max-width: 1200px) 273px, 448px"
                                alt="Imagen de carla en sección 'Quién soy'."
                                loading="lazy"
                            />
                        </picture>
                    </Col>
                    <Col className="col-12 col-sm-7 col-lg-6 order-1 order-sm-2 text-col">
                        <div className="d-flex flex-column text-container">
                            <div>
                                <p className="text-label">¿Quién soy?</p>
                                <h1 className="text-headline">Hola, soy Carla</h1>
                            </div>
                            <div className="body-container">
                                <article>
                                    <p className="text-body">
                                        Soy controladora de Tránsito Aéreo, Coach Ontológico Profesional Internacional y estudiante de la Licenciatura en
                                        Recursos Humanos en el Instituto Universitario Aeronáútico.
                                    </p>
                                    <p className="text-body">
                                        Como vos y muchas personas más, tuve que traspasar mis propias barreras para poder desarrollarme en lo que me gustaba, e
                                        ir tras mis sueños.
                                    </p>
                                    <p className="text-body">
                                        Actualmente trabajo en unificar mis conocimientos para la creación de una nueva rama dentro del Coaching, especializado
                                        en el apasionante mundo de la Aviación.
                                    </p>
                                </article>
                            </div>
                            <div className="d-flex stamp-container">
                                <picture>
                                    <source media="(min-width: 576px) and (max-width: 991.98px)" srcSet={`${InternationalCoachingMd}`} />
                                    <source media="(max-width: 575.98px)" srcSet={`${InternationalCoachingSm}`} />
                                    <img
                                        src={InternationalCoachingLg}
                                        alt="Logo de International Association of NLP and Coaching"
                                        loading="lazy"
                                    />
                                </picture>
                                <picture>
                                    <source media="(min-width: 576px) and (max-width: 991.98px)" srcSet={`${ActaCbaNoaMd}`} />
                                    <source media="(max-width: 575.98px)" srcSet={`${ActaCbaNoaSm}`} />
                                    <img
                                        src={ActaCbaNoaLg}
                                        alt="Logo de la Asociación de Controladores y Controladoras de Tránsito Aéreo de Córdoba y Noroeste de la República Argentina"
                                        loading="lazy"
                                    />
                                </picture>
                                <picture>
                                    <source media="(min-width: 576px) and (max-width: 991.98px)" srcSet={`${AccessConsciousnessMd}`} />
                                    <source media="(max-width: 575.98px)" srcSet={`${AccessConsciousnessSm}`} />
                                    <img src={AccessConsciousnessLg} alt="Logo de Access Consciousness" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                        <AppButton variant={"regular"} as={"link"} design={"secondary"} to={"/about/#"} text={"Más sobre mí"} />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Hello;
