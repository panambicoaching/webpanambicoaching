import { React } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./styles.scss";
import footerLogo from "../../assets/img/footer/footer-logo.webp";

const Footer = () => {
    return (
        <footer className="container-fluid">
            <Row>
                <Col xs={12} md={3}>
                    <h5>Inicio</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <Link className="" to="#">
                                Panambí
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Mis servicios
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Quién soy
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={3}>
                    <h5>Acerca de</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <Link className="" to="#">
                                Mi historia
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Mis valores
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Quién soy
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Preguntas frecuentes
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={3}>
                    <h5>Servicios</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <Link className="" to="#">
                                Cursos
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Talleres
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Conferencias
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={3}>
                    <h5>Contacto</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <Link className="" to="#">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="#">
                                Spotify
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <picture>
                    <img src={footerLogo} alt="" />
                </picture>
                <small>© Copyright 2023 - Panambi Coaching</small>
            </Row>
        </footer>
    );
};

export default Footer;
