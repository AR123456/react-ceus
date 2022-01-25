import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CEU's For You Inc </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Text>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link>Catalog</Nav.Link>

                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#catalog">Catalog</NavDropdown.Item>
                  <NavDropdown.Item href="#inperson">
                    In Person Learning
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#web-based">
                    Live Web based
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#web-based">
                    Self Serve On Demand
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#mystuf">My Courses</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#contact">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Log In</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
