import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import navBarLogoSm from "../../assets/img/navbar/navbar-logo-small.svg";
import navBarLogoL from "../../assets/img/navbar/navbar-logo-large.svg";
import "./styles.scss";

const NavBar = () => {
    return (
        <Navbar expand="sm" className="sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <picture>
                        <source media="(min-width: 576px)" srcSet={navBarLogoL} />
                        <img srcSet={navBarLogoSm} alt="" />
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="text-button" as={Link} to="/about">
                            Acerca de
                        </Nav.Link>
                        <NavDropdown className="text-button" title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item className="text-button" as={Link} to="/courses">
                                Cursos
                            </NavDropdown.Item>
                            <NavDropdown.Item className="text-button" as={Link} to="/workshops">
                                Talleres
                            </NavDropdown.Item>
                            <NavDropdown.Item className="text-button" as={Link} to="/conferences">
                                Conferencias
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-button" as={Link} to="/contact">
                            Contactame
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
