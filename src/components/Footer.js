import React from "react";
import { Container, Col, Row, Card, Navbar } from "reactstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="bg-light border">Copyright 2022</Col>
        </Row>
        <Row>
          {/* <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col> */}
        </Row>

        <Row>
          <Col className="bg-light border" xs="6">
            Privacy Policy
          </Col>
          <Col className="bg-light border" xs="6">
            Social
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
