import { React } from "react";
import { HashLink } from "react-router-hash-link";
import { Row, Col } from "react-bootstrap";
import "./styles.scss";
import footerLogo from "../../assets/img/footer/footer-logo.webp";

const Footer = () => {

    return (
        <footer className="container-fluid">
            <Row>
                <Col className="col-12 col-sm-3">
                    <h4 className="text-label">Inicio</h4>
                    <ul className="list-unstyled text-body2">
                        <li>
                            <HashLink to="/#home-cover">
                                Panambí
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/#features-home">
                                Mis servicios
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/#hello">
                                Quién soy
                            </HashLink>
                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-sm-3">
                    <h4 className="text-label">Acerca de</h4>
                    <ul className="list-unstyled text-body2">
                        <li>
                            <HashLink to="/about/#about-cover">
                                Mi historia
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/about/#values">
                                Mis valores
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/about/#about-me">
                                Quién soy
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/about/#faq">
                                Preguntas frecuentes
                            </HashLink>
                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-sm-3">
                    <h4 className="text-label">Servicios</h4>
                    <ul className="list-unstyled text-body2">
                        <li>
                            <HashLink to="/courses/#">
                                Cursos
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/workshops/#">
                                Talleres
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to="/conferences/#">
                                Conferencias
                            </HashLink>
                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-sm-3">
                    <h4 className="text-label">Contacto</h4>
                    <ul className="list-unstyled text-body2">
                        <li>
                            <HashLink target="_blank" to="https://www.instagram.com/panambicoaching/">
                                Instagram
                            </HashLink>
                        </li>
                        <li>
                            <HashLink target="_blank" to="https://www.facebook.com/panambicoaching">
                                Facebook
                            </HashLink>
                        </li>
                        <li>
                            <HashLink target="_blank" to="https://open.spotify.com/show/1dTEILdq7RUYMYeBoP8ek9">
                                Spotify
                            </HashLink>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="logo-copy-row">
                <picture>
                    <img src={footerLogo} alt="Isotipo de Panambí Coaching, en footer" loading="lazy" />
                </picture>
                <small className="text-body2">© Copyright 2023 - Panambi Coaching</small>
            </Row>
        </footer>
    );
};

export default Footer;
