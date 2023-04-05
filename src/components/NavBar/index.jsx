import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import navBarLogoSm from "../../assets/img/navbar/navbar-logo-small.svg";
import navBarLogoL from "../../assets/img/navbar/navbar-logo-large.svg";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <picture>
                        <img src={navBarLogoL} alt="" />
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/about">
                            Acerca de
                        </Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/courses">
                                Cursos
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/workshops">
                                Talleres
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/conferences">
                                Conferencias
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contact">
                            Contactame
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
