import React from "react";
import {
  Container,
  Form,
  Col,
  InputGroup,
  Label,
  FormText,
  Button,
} from "react-bootstrap";
const LogInForm = () => {
  return (
    <>
      <Form>
        <Form.Group row>
          {/* <Label for="exampleEmail" sm={2}>
            Email
          </Label> */}
          <Col sm={10}>
            <InputGroup
              id="exampleEmail"
              name="email"
              placeholder="Email Address"
              type="email"
            />
          </Col>
        </Form.Group>
        <Form.Group row>
          {/* <Label for="examplePassword" sm={2}>
            Password
          </Label> */}
          <Col sm={10}>
            <InputGroup
              id="examplePassword"
              name="password"
              placeholder="*******"
              type="password"
            />
          </Col>
        </Form.Group>

        <Form.Group row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button>Log In </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default LogInForm;
