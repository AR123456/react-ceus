import React from "react";

import { Container, Button, Col } from "react-bootstrap";
import { Form, FormGroup, Input, Label, FormText } from "reactstrap";
const LogInForm = () => {
  return (
    <>
      <Form>
        <FormGroup row>
          {/* <Label for="exampleEmail" sm={2}>
            Email
          </Label> */}
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email Address"
              type="email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label for="examplePassword" sm={2}>
            Password
          </Label> */}
          <Col sm={10}>
            <Input
              id="examplePassword"
              name="password"
              placeholder="*******"
              type="password"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button variant="secondary">Log In </Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default LogInForm;
