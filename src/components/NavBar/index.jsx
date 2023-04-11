import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import navBarLogoSm from "../../assets/img/navbar/navbar-logo-small.svg";
import navBarLogoL from "../../assets/img/navbar/navbar-logo-large.svg";
import "./styles.scss";

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false);
    };

    const handleDropdownClick = (e) => {
        e.stopPropagation();
    };
    return (
        <Navbar expanded={expanded} expand="md" className="sticky-top">
            <div className="container-lg">
                <Navbar.Brand as={HashLink} to="/#" onClick={handleLinkClick}>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={navBarLogoL} />
                        <img srcSet={navBarLogoSm} alt="Logo de Panambí Coaching"/>
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="text-button" as={HashLink} to="/about/#" onClick={handleLinkClick}>
                            Acerca de
                        </Nav.Link>
                        <NavDropdown className="text-button" title="Servicios" id="basic-nav-dropdown" onClick={handleDropdownClick}>
                            <NavDropdown.Item className="text-button" as={HashLink} to="/courses/#" onClick={handleLinkClick}>
                                Cursos
                            </NavDropdown.Item>
                            <NavDropdown.Item className="text-button" as={HashLink} to="/workshops/#" onClick={handleLinkClick}>
                                Talleres
                            </NavDropdown.Item>
                            <NavDropdown.Item className="text-button" as={HashLink} to="/conferences/#" onClick={handleLinkClick}>
                                Conferencias
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-button" as={HashLink} to="/contact/#" onClick={handleLinkClick}>
                            Contactame
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;
