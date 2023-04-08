import "./styles.scss";
import { Row, Col } from "react-bootstrap";
import waves from "../../assets/img/home/waves.svg";
import AppButton from "../AppButton";
import CarlaHeroSm from "../../assets/img/home/carla-hero-small.webp";
import CarlaHeroMd from "../../assets/img/home/carla-hero-medium.webp";
import CarlaHeroLg from "../../assets/img/home/carla-hero-large.webp";

const HomeCover = () => {
   
    return (
        <section className="home-cover container-fluid" id="home-cover">
            <div className="container-md">
                <Row>
                    <Col className="col-12 col-sm-6">
                        <div className="d-flex flex-column text-container">
                            <picture>
                                <img src={waves} alt="Imagen decorativas, ondas horizontales en rojo y verde" loading="lazy"/>
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
                        <AppButton variant={"regular"} as={"link"} design={"primary"} to={"/contact/#"} text={"Comencemos"} />
                    </Col>
                    <Col className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
                        <picture className="align-self-center">
                            <img
                                src={CarlaHeroSm}
                                srcSet={`${CarlaHeroSm} 304w, ${CarlaHeroMd} 337w, ${CarlaHeroLg} 550w`}
                                sizes="(max-width: 670px) 304px, (max-width: 1200px) 337px, 550px"
                                alt="Imagen de Carla en sección 'Home'"
                                loading="lazy"
                            />
                        </picture>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default HomeCover;
