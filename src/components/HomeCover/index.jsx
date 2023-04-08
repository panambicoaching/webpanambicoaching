import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import waves from "../../assets/img/home/waves.svg";
import AppButton from "../AppButton";
import CarlaHeroSm from "../../assets/img/home/carla-hero-small.webp";
import CarlaHeroMd from "../../assets/img/home/carla-hero-medium.webp";
import CarlaHeroLg from "../../assets/img/home/carla-hero-large.webp";

const HomeCover = () => {
   
    return (
        <section className="home-cover container-fluid">
            <Container>
                <Row>
                    <Col className="col-12 col-sm-6">
                        <div className="d-flex flex-column text-container">
                            <picture>
                                <img src={waves} alt="" />
                            </picture>
                            <h1 className="text-display">
                                El arte
                                <br />
                                de volar juntos
                            </h1>
                            <p className="text-body">
                                Animate a superar tus propias barreras,
                                <br />
                                desarrollarte en lo que te gusta e ir tras tus sueños.
                            </p>
                        </div>
                        <AppButton variant={"regular"} as={"link"} design={"primary"} to={"/contact"} text={"Comencemos"} />
                    </Col>
                    <Col className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
                        <picture className="align-self-center">
                            <img
                                src={CarlaHeroSm}
                                srcSet={`${CarlaHeroSm} 304w, ${CarlaHeroMd} 337w, ${CarlaHeroLg} 550w`}
                                sizes="(max-width: 670px) 304px, (max-width: 1200px) 337px, 550px"
                                alt=""
                            />{" "}
                            {/* Modificar imagen de acuerdo al display */}
                        </picture>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeCover;
