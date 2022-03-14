import React from "react";
import {
  Container,
  ListGroup,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

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
              <Form center>
                <FormControl
                  type="text"
                  placeholder="Search for pubmed articles"
                  className="mr-sm-2"
                />
                <Button variant="secondary">Search</Button>
              </Form>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
