import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
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
                <Form className="d-flex">
                  <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                      <FormControl
                        type="email"
                        placeholder="Enter email"
                        className="me-2"
                        aria-label="Search"
                      />
                    </Col>
                    <Col sm={3} className="my-1">
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                    <Col xs="auto" className="my-1">
                      <Form.Check
                        type="checkbox"
                        id="autoSizingCheck2"
                        label="Remember me"
                      />
                    </Col>
                    <Col xs="auto" className="my-1">
                      <Button type="submit">Submit</Button>
                    </Col>
                    <Col xs="auto" className="my-1">
                      <Nav.Link href="#home">Forgot Password</Nav.Link>
                    </Col>
                  </Row>
                </Form>

                <NavDropdown title="More" id="basic-nav-dropdown">
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

                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
