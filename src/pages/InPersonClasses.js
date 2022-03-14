import React from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const InPersonClasses = () => {
  return (
    <>
      <Container>
        <Navigation></Navigation>

        <Form center>
          <FormControl
            type="text"
            placeholder="Search for In person classes"
            className="mr-sm-2"
          />
          <Button variant="secondary">Search</Button>
        </Form>
        <div className="h-100 p-5 bg-light border rounded-3">
          <div className="container-fluid bg-light text-dark p-5">
            <div className="container bg-light p-5">
              <h1 className="display-4 fw-bold">No Inperson at this time</h1>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default InPersonClasses;
