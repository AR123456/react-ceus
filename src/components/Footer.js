import React from "react";
import { Container, Col, Row, Card, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Card body>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Copyright 2020</Navbar.Brand>
            <Navbar.Brand href="#privacy">Privacy Policy</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Social Icon links <a href="#twitter">Twitter </a>
              </Navbar.Text>
              <Navbar.Text>
                Social Icon links <a href="#Facebook">Facebook </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Card>
    </>
  );
};

export default Footer;
