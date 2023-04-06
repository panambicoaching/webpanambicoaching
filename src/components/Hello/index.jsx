import "./styles.scss";
import { Container } from "react-bootstrap";
import Icon from "../Icon";
import AppButton from "../AppButton";
import CarlaQuienSoyLg from "../../assets/img/home/carla-quien-soy-large.webp";
import CarlaQuienSoyMd from "../../assets/img/home/carla-quien-soy-medium.webp";
import CarlaQuienSoySm from "../../assets/img/home/carla-quien-soy-small.webp";


const HomeCover = () => {
    return (
        <section>
            <Container fluid className="d-flex flex-column flex-sm-row-reverse justify-content-sm-between">
                <div className="d-flex flex-column">
                    <p>¿Quién soy?</p>
                    <h1 className="text-headline">Hola, soy Carla</h1>
                    <p className=".text-body">
                        Soy controladora de Tránsito Aéreo, Coach Ontológico Profesional Internacional y estudiante de la Licenciatura en Recursos Humanos en el
                        Instituto Universitario Aeronáútico.
                        <br />
                        Como vos y muchas personas más, tuve que traspasar mis propias barreras para poder desarrollarme en lo que me gustaba, e ir tras mis
                        sueños.
                        <br />
                        Actualmente trabajo en unificar mis conocimientos para la creación de una nueva rama dentro del Coaching, especializado en el
                        apasionante mundo de la Aviación.
                    </p>
                    <div className="d-flex icon-container">
                        <Icon name="international_coaching"></Icon>
                        <Icon name="acta_cba_noa"></Icon>
                        <Icon name="access_consciousness"></Icon>
                    </div>
                    <AppButton variant={"regular"} as={"link"} design={"secondary"} to={"https://google.com.ar"} text={"Más sobre mí"} />
                </div>
                <div className="d-flex">
                    <picture className="align-self-center align-self-sm-end">
                        <img
                            src={CarlaQuienSoySm}
                            srcSet={`${CarlaQuienSoySm} 304w, ${CarlaQuienSoyMd} 273w, ${CarlaQuienSoyLg} 448w`}
                            sizes="(max-width: 576px) 304px, (max-width: 1200px) 273px, 448px"
                            alt=""
                        />{" "}
                    </picture>
                </div>
            </Container>
        </section>
    );
};

export default HomeCover;
