import "./styles.scss";
import { Container } from "react-bootstrap";
import AppButton from "../AppButton";
import CarlaConferencesSm from "../../assets/img/conferences/carla-conferences-small.webp";
import CarlaConferencesMd from "../../assets/img/conferences/carla-conferences-medium.webp";
import CarlaConferencesLg from "../../assets/img/conferences/carla-conferences-large.webp";

const ConferencesCover = () => {
    return (
        <section>
            <Container fluid className="d-flex flex-column flex-sm-row justify-content-sm-between">
                <div className="d-flex flex-column">
                    <p className="text-label">Carla Paola González Lillo</p>
                    <h1 className="text-display">{`Conferencias ${new Date().getFullYear()}`}</h1>
                    <p className="text-body">
                        Mis conferencias son presentaciones interactivas de 1 hora, divididas en 45 minutos de exposición y 15 minutos para evacuar dudas y
                        resolver inquietudes que puedan surgir en el público.
                    </p>
                    <AppButton variant={"regular"} as={"link"} design={"primary"} to={"https://google.com.ar"} text={"Comencemos"} />
                </div>
                <div className="d-flex">
                    <picture className="align-self-center align-self-sm-end">
                        <img
                            src={CarlaConferencesSm}
                            srcSet={`${CarlaConferencesSm} 328w, ${CarlaConferencesMd} 273w, ${CarlaConferencesLg} 475w`}
                            sizes="(max-width: 576px) 328px, (max-width: 1200px) 273px, 475px"
                            alt=""
                        />{" "}
                        {/* Modificar imagen de acuerdo al display */}
                    </picture>
                </div>
            </Container>
        </section>
    );
};

export default ConferencesCover;
