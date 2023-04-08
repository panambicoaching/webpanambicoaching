import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../Icon";
import AppButton from "../AppButton";
import CarlaQuienSoyLg from "../../assets/img/home/carla-quien-soy-large.webp";
import CarlaQuienSoyMd from "../../assets/img/home/carla-quien-soy-medium.webp";
import CarlaQuienSoySm from "../../assets/img/home/carla-quien-soy-small.webp";


const Hello = () => {
    return (
        <section className="hello-cover container-fluid">
            <Container>
                <Row>
                    <Col className="col-12 col-sm-5 col-lg-6 d-flex align-items-center justify-content-center justify-content-sm-start order-2 order-sm-1">
                        <picture>
                            <img
                                src={CarlaQuienSoySm}
                                srcSet={`${CarlaQuienSoySm} 304w, ${CarlaQuienSoyMd} 273w, ${CarlaQuienSoyLg} 448w`}
                                sizes="(max-width: 576px) 304px, (max-width: 1200px) 273px, 448px"
                                alt=""
                            />{" "}
                        </picture>
                    </Col>
                    <Col className="col-12 col-sm-7 col-lg-6 order-1 order-sm-2 text-col">
                        <div className="d-flex flex-column text-container">
                            <div>
                                <p>¿Quién soy?</p>
                                <h1 className="text-headline">Hola, soy Carla</h1>
                            </div>
                            <div className="body-container">
                                <article>
                                    <p className=".text-body">
                                        Soy controladora de Tránsito Aéreo, Coach Ontológico Profesional Internacional y estudiante de la Licenciatura en
                                        Recursos Humanos en el Instituto Universitario Aeronáútico.
                                    </p>
                                    <p className=".text-body">
                                        Como vos y muchas personas más, tuve que traspasar mis propias barreras para poder desarrollarme en lo que me gustaba, e
                                        ir tras mis sueños.
                                    </p>
                                    <p className=".text-body">
                                        Actualmente trabajo en unificar mis conocimientos para la creación de una nueva rama dentro del Coaching, especializado
                                        en el apasionante mundo de la Aviación.
                                    </p>
                                </article>
                            </div>
                            <div className="d-flex icon-container">
                                <Icon name="international_coaching"></Icon>
                                <Icon name="acta_cba_noa"></Icon>
                                <Icon name="access_consciousness"></Icon>
                            </div>
                        </div>
                        <AppButton variant={"regular"} as={"link"} design={"secondary"} to={"/about"} text={"Más sobre mí"} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hello;
