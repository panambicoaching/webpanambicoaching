import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import navBarLogoSm from "../../assets/img/navbar/navbar-logo-small.svg";
import navBarLogoL from "../../assets/img/navbar/navbar-logo-large.svg";
import "./styles.scss";
import { useState } from "react";

const NavBar = () => {

    const [expanded, setExpanded] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false);
    };

      const handleDropdownClick = (e) => {
          e.stopPropagation();
      };
    return (
        <Navbar expanded={expanded} expand="sm" className="sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <picture>
                        <source media="(min-width: 576px)" srcSet={navBarLogoL} />
                        <img srcSet={navBarLogoSm} alt="" />
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="text-button" as={Link} to="/about" onClick={handleLinkClick}>
                            Acerca de
                        </Nav.Link>
                        <NavDropdown className="text-button" title="Servicios" id="basic-nav-dropdown" onClick={handleDropdownClick}>
                            <NavDropdown.Item className="text-button" as={Link} to="/courses" onClick={handleLinkClick}>
                                Cursos
                            </NavDropdown.Item>
                            <NavDropdown.Item className="text-button" as={Link} to="/workshops" onClick={handleLinkClick}>
                                Talleres
                            </NavDropdown.Item>
                            <NavDropdown.Item className="text-button" as={Link} to="/conferences" onClick={handleLinkClick}>
                                Conferencias
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-button" as={Link} to="/contact" onClick={handleLinkClick}>
                            Contactame
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
