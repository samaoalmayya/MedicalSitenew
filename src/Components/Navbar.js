import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPhone,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo.png";
import "../Components/Nav.css";
import "../index.css";

function Navbars() {
  return (
    <div className="container">
      {" "}
      <Navbar expand="lg" className="bg-body-tertiary" bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img className="logoImage" src={logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navMain">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className="links">
                Home
              </Nav.Link>

              <NavDropdown
                title="Pages"
                id="pages-nav-dropdown"
                className="links"
              >
                <NavDropdown.Item as={Link} to="/aboutus">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login">
                  Login / Register
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Services"
                id="services-nav-dropdown"
                className="links"
              >
                <NavDropdown.Item as={Link} to="/services">
                  Service
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/ServiceDetails"
                  className="linksInside"
                >
                  Service Details
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact" className="links">
                Contact Us
              </Nav.Link>

              <Nav.Link>
                <FontAwesomeIcon icon={faSearch} className="search" />
              </Nav.Link>

              <Nav.Link className="links">
                <FontAwesomeIcon icon={faPhone} /> (963)(994090576)
              </Nav.Link>

              <button
                as={Link}
                to="/Contactus"
                className=" d-flex align-items-center button_links "
              >
                <Link to="/Contactus">Contact Us</Link>
                <FontAwesomeIcon icon={faArrowLeft} className="ms-2" />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
