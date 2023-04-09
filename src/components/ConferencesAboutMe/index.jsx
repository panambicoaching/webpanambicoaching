import "./styles.scss";
import {Row, Col } from "react-bootstrap";
import CarlaConferencesMeSm from "../../assets/img/conferences/carla-conferences-me-small.webp";
import CarlaConferencesMeLg from "../../assets/img/conferences/carla-conferences-me-large.webp";

const ConferencesAboutMe = () => {
    return (
        <section className="conferences-me container-fluid">
            <div className="container-md">
                <Row>
                    <Col className="col-12">
                        <h2 className="text-headline text-start">Un poco sobre mí</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-sm-6">
                        <p className="text-body">
                            Mi principal objetivo es ayudar a las personas a entender y gestionar sus emociones para aceptarse y aceptar su entorno, trabajando
                            desde el enfoque de los 4 cuerpos para descubrir su lado espiritual.
                        </p>
                        <p className="text-body">
                            Estoy convencida de que la vida es para disfrutarla, crecer y ser feliz. Por eso quiero acompañar a las personas a abrirse a la
                            oportunidad de desarrollar técnicas de auto-control emocional y de manejo de estrés en situaciones críticas, a lograr objetivos
                            realistas y alcanzables, a escuchar su voz interna y ver cuál es el mensaje que tiene para ellas.
                        </p>
                        <p className="text-body">
                            Todos tenemos esa chispa en nuestro interior, y mi misión es acompañar a las personas a descubrirla para que puedan ver que alcanzar
                            sus objetivos y lograr sus sueños es posible.
                        </p>
                    </Col>
                    <Col className="col-12 col-sm-6">
                        <picture>
                            <img
                                src={CarlaConferencesMeSm}
                                srcSet={`${CarlaConferencesMeSm} 304w, ${CarlaConferencesMeLg} 448w`}
                                sizes="(max-width: 1200px) 304px, 448px"
                                alt="Imagen de Carla, de la sección sobre mí en la página de conferencias."
                                loading="lazy"
                            />
                        </picture>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default ConferencesAboutMe;
