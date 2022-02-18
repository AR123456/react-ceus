import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const OnDemandClasses = () => {
  return (
    <>
      <Container>
        <Navigation></Navigation>
        <div className="h-100 p-5 bg-light border rounded-3">
          <div className="container-fluid bg-light text-dark p-5">
            <div className="container bg-light p-5">
              <h1 className="display-4 fw-bold">Pubmed articles for CEU </h1>
              {/* https://pubmed.ncbi.nlm.nih.gov/16885402/ */}

              <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default OnDemandClasses;
