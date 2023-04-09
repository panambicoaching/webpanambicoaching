import Icon from "../Icon";
import AppButton from "../AppButton";
import ContactUsForm from "../ContactUsForm";
import { Row, Col } from "react-bootstrap";
import "./styles.scss"

const ContactUs = () => {
    return (
        <section className="container-fluid contact-us">
            <div className="container-lg">
                <Row>
                    <Col className="col-12 col-sm-6 d-flex flex-column">
                        <div className="text-container d-flex flex-column">
                            <h1 className="text-display">
                                Contactate
                                <br />
                                conmigo
                            </h1>
                            <p className="text-body">Si querés saber más sobre alguno de mis servicios, dejame un mensaje, estaré encantada de contactarme con vos.</p>
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="text-label">Seguime en</h3>
                            <div className="icon-container d-flex">
                                <AppButton
                                    as={"link"}
                                    design={"social"}
                                    to={"https://www.instagram.com/panambicoaching/"}
                                    target="_blank"
                                    variant={"icon"}
                                    StartIcon={<Icon name={"instagram"} />}
                                />
                                <AppButton
                                    as={"link"}
                                    design={"social"}
                                    to={"https://open.spotify.com/show/1dTEILdq7RUYMYeBoP8ek9"}
                                    target="_blank"
                                    variant={"icon"}
                                    StartIcon={<Icon name={"spotify"} />}
                                />
                                <AppButton
                                    as={"link"}
                                    design={"social"}
                                    to={"https://www.youtube.com/@panambicoaching8999"}
                                    target="_blank"
                                    variant={"icon"}
                                    StartIcon={<Icon name={"youtube"} />}
                                />
                                <AppButton
                                    as={"link"}
                                    design={"social"}
                                    to={"https://www.tiktok.com/@panambicoaching"}
                                    target="_blank"
                                    variant={"icon"}
                                    StartIcon={<Icon name={"tiktok"} />}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-6 d-flex flex-column align-items-center">
                        <ContactUsForm />
                    </Col>
                </Row>
            </div>
        </section>
    );
}
export default ContactUs;   