import "./styles.scss";
import { Container } from "react-bootstrap";
import waves from "../../assets/img/home/waves.svg";
import AppButton from "../AppButton";
import CarlaHeroSm from "../../assets/img/home/carla-hero-small.webp";
import CarlaHeroMd from "../../assets/img/home/carla-hero-medium.webp";
import CarlaHeroLg from "../../assets/img/home/carla-hero-large.webp";

const HomeCover = () => {
   
    return (
        <section>
            <Container fluid className="d-flex flex-column flex-sm-row justify-content-sm-between">
                <div className="d-flex flex-column">
                    <picture>
                        <img src={waves} alt="" />
                    </picture>
                    <h1 className="text-display">
                        El arte
                        <br />
                        de volar juntos
                    </h1>
                    <p className=".text-body">
                        Animate a superar tus propias barreras,
                        <br />
                        desarrollarte en lo que te gusta e ir tras tus sueños.
                    </p>
                    <AppButton variant={"regular"} as={"link"} design={"primary"} to={"https://google.com.ar"} text={"Comencemos"} />
                </div>
                <div className="d-flex">
                    <picture className="align-self-center align-self-sm-end">
                        <img
                            src={CarlaHeroSm}
                            srcSet={`${CarlaHeroSm} 304w, ${CarlaHeroMd} 337w, ${CarlaHeroLg} 550w`}
                            sizes="(max-width: 576px) 304px, (max-width: 1200px) 337px, 550px"
                            alt=""
                        />{" "}
                        {/* Modificar imagen de acuerdo al display */}
                    </picture>
                </div>
            </Container>
        </section>
    );
};

export default HomeCover;
