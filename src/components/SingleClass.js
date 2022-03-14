import React from "react";
// import PopOver from "./PopOver";

import {
  Container,
  Button,
  Table,
  InputGroup,
  FormControl,
  FormCheck,
  Form,
} from "react-bootstrap";

const SingleClass = () => {
  return (
    <div>
      {" "}
      <Container>
        <div className="h-100 p-5 bg-light border rounded-3">
          {/* <div className="container-fluid bg-light text-dark p-5"> */}
          {/* <div className="container bg-light p-5"> */}
          <h1 className="display-4 fw-bold">
            Here show list of just web, on demand or in person based on page
          </h1>
          {/* implement filtering based on description search  */}

          <Form center>
            <FormControl
              type="text"
              placeholder="Search for Webinars"
              className="mr-sm-2"
            />
            <Button variant="secondary">Search</Button>
          </Form>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Select</th>
                <th>Title</th>
                <th>CEUs</th>
                <th>Type</th>
                <th>Cost</th>
                <th>Description</th>
                <th>More Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {" "}
                  <FormCheck aria-label="Checkbox for following text input" />
                </th>
                <td>PPE Basics</td>
                <td>1.2</td>
                <td>Webinar</td>
                <td>$65.00</td>
                <td>Donning and Doffing PPE safely </td>
                <td>
                  <Button variant="secondary" id="PopoverFocus" type="button">
                    Click for more info Implement Pop over here
                  </Button>{" "}
                  {/* <PopOver></PopOver> */}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <FormCheck aria-label="Checkbox for following text input" />
                </th>
                <td>PPE Basics</td>
                <td>1.2</td>
                <td>On Demand Learning</td>
                <td>$65.00</td>
                <td>Donning and Doffing PPE safely </td>
                <td>
                  <Button variant="secondary" id="PopoverFocus" type="button">
                    Click for more info
                  </Button>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <FormCheck aria-label="Checkbox for following text input" />
                </th>
                <td>PPE Basics</td>
                <td>1.2</td>
                <td>In Person class</td>
                <td>$65.00</td>
                <td>Donning and Doffing PPE safely </td>
                <td>
                  <Button variant="secondary" id="PopoverFocus" type="button">
                    Click for more info
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
          <InputGroup>
            <Button variant="secondary">Add selected to cart</Button>
          </InputGroup>
        </div>
        <br />
        <div></div>
      </Container>{" "}
    </div>
  );
};

export default SingleClass;
