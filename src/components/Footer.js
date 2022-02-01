import React from "react";
import { Container, Col, Row, Card, Navbar } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="bg-light border">
            <AiFillCopyrightCircle></AiFillCopyrightCircle> 2022
          </Col>
        </Row>
        <Row>
          {/* <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col>
          <Col className="bg-light border">.col</Col> */}
        </Row>

        <Row className="bg-light border">
          <Col xs="6">
            <SiGnuprivacyguard></SiGnuprivacyguard>
            Privacy Policy
          </Col>
          <Col className="text-end" xs="6">
            <FaFacebookF></FaFacebookF>
            <CgTwitter></CgTwitter>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
