import "./styles.scss";
import {Row, Col } from "react-bootstrap";
import AppButton from "../AppButton";
import CarlaConferencesSm from "../../assets/img/conferences/carla-conferences-small.webp";
import CarlaConferencesMd from "../../assets/img/conferences/carla-conferences-medium.webp";
import CarlaConferencesLg from "../../assets/img/conferences/carla-conferences-large.webp";

const ConferencesCover = () => {
    return (
        <section className="conferences-cover container-fluid">
            <div className="container-lg">
                <Row>
                    <Col className="col-12 col-sm-6">
                        <div className="d-flex flex-column text-container">
                            <div className="headline-container">
                                <p className="text-label">Carla Paola González Lillo</p>
                                <h1 className="text-display">{`Conferencias ${new Date().getFullYear()}`}</h1>
                            </div>
                            <p className="text-body">
                                Mis conferencias son presentaciones interactivas de 1 hora, divididas en 45 minutos de exposición y 15 minutos para evacuar
                                dudas y resolver inquietudes que puedan surgir en el público.
                            </p>
                        </div>
                        <AppButton variant={"regular"} as={"link"} design={"primary"} to={"/contact/#"} text={"Contactame"} />
                    </Col>
                    <Col className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center">
                        <picture>
                            <source media="(min-width: 576px) and (max-width: 991.98px)" srcSet={CarlaConferencesMd} />
                            <source media="(max-width: 575.98px)" srcSet={CarlaConferencesSm} />
                            <img
                                src={CarlaConferencesLg}
                                alt="Imagen de Carla dnado una conferencia."
                                loading="lazy"
                            />
                        </picture>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default ConferencesCover;
