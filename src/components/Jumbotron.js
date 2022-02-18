import React from "react";
import { Container } from "reactstrap";

const Jumbotron = () => {
  return (
    <div>
      <h1>A reusable home made Jumbotron </h1>
      <>
        <Container>
          <div className="h-100 p-5 bg-light border rounded-3">
            <div className="container-fluid bg-light text-dark p-5">
              <div className="container bg-light p-5">
                <h1 className="display-4 fw-bold"></h1>
              </div>
            </div>
          </div>
        </Container>
      </>
    </div>
  );
};

export default Jumbotron;
