import "./styles.scss";
import { Container } from "react-bootstrap";
import CarlaConferencesMeSm from "../../assets/img/conferences/carla-conferences-me-small.webp";
import CarlaConferencesMeMd from "../../assets/img/conferences/carla-conferences-me-medium.webp";
import CarlaConferencesMeLg from "../../assets/img/conferences/carla-conferences-me-large.webp";

const ConferencesAboutMe = () => {
    return (
        <section>
            <Container fluid className="d-flex flex-column flex-sm-row justify-content-sm-between">
                <div className="d-flex flex-column">
                    <h1 className="text-display">Un poco sobre mí</h1>
                    <p className="text-body">
                        Mi principal objetivo es ayudar a las personas a entender y gestionar sus emociones para aceptarse y aceptar su entorno, trabajando
                        desde el enfoque de los 4 cuerpos para descubrir su lado espiritual.
                        <br />
                        Estoy convencida de que la vida es para disfrutarla, crecer y ser feliz. Por eso quiero acompañar a las personas a abrirse a la
                        oportunidad de desarrollar técnicas de auto-control emocional y de manejo de estrés en situaciones críticas, a lograr objetivos
                        realistas y alcanzables, a escuchar su voz interna y ver cuál es el mensaje que tiene para ellas.
                        <br />
                        Todos tenemos esa chispa en nuestro interior, y mi misión es acompañar a las personas a descubrirla para que puedan ver que alcanzar sus
                        objetivos y lograr sus sueños es posible.
                    </p>
                </div>
                <div className="d-flex">
                    <picture className="align-self-center align-self-sm-end">
                        <img
                            src={CarlaConferencesMeSm}
                            srcSet={`${CarlaConferencesMeSm} 328w, ${CarlaConferencesMeMd} 347w, ${CarlaConferencesMeLg} 448w`}
                            sizes="(max-width: 576px) 328px, (max-width: 1200px) 347px, 448px"
                            alt=""
                        />{" "}
                        {/* Modificar imagen de acuerdo al display */}
                    </picture>
                </div>
            </Container>
        </section>
    );
};

export default ConferencesAboutMe;
