import { React } from "react";
import { Link } from "react-router-dom";
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
                            <Link className="text-body2" to="#">
                                Panambí
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Mis servicios
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Quién soy
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-sm-3">
                    <h4 className="text-label">Acerca de</h4>
                    <ul className="list-unstyled text-body2">
                        <li>
                            <Link className="text-body2" to="#">
                                Mi historia
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Mis valores
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Quién soy
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Preguntas frecuentes
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-sm-3">
                    <h4 className="text-label">Servicios</h4>
                    <ul className="list-unstyled text-body2">
                        <li>
                            <Link className="text-body2" to="#">
                                Cursos
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Talleres
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Conferencias
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col className="col-12 col-sm-3">
                    <h4 className="text-label">Contacto</h4>
                    <ul className="list-unstyled text-body2">
                        <li>
                            <Link className="text-body2" to="#">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link className="text-body2" to="#">
                                Spotify
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="logo-copy-row">
                <picture>
                    <img src={footerLogo} alt="" />
                </picture>
                <small className="text-body2" >© Copyright 2023 - Panambi Coaching</small>
            </Row>
        </footer>
    );
};

export default Footer;
