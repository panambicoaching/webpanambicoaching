import CheckboxContactForm from "../CheckboxContactForm";
import {Row, Col} from "react-bootstrap";
import "./styles.scss"

// variant prop available values => "workshops" | "courses"

const ServicesContact = ({variant}) => {
    const title = {
        workshops: "Talleres 100% personalizables",
        courses: "Seleccioná tu curso",
    };

    const textBody = {
        workshops: "Elegí los temas que te gustaría que abordemos juntos y me pongo en contacto con vos para ayudarte a potenciar tu futuro y el de tu organización.",
        courses: "Seleccioná el curso que te interesa y estaré encantada de contactarme con vos para enviarte más información. También podés dejarme un comentario con cualquier duda que tengas.",
    }

    return (
        <section className="container-fluid services-contact">
            <div className="container-md">
                <Row>
                    <Col className="col-12 d-flex flex-column">
                        <h2 className="text-headline">{title[variant]}</h2>
                        <p className="text-body">{textBody[variant]}</p>
                    </Col>
                    <Col className="col-12 d-flex flex-column">
                        <CheckboxContactForm variant={variant} />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default ServicesContact;
