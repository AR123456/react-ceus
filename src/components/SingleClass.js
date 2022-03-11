import React from "react";
import {
  Container,
  Button,
  Table,
  InputGroup,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import {
  UncontrolledPopover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  PopoverHeader,
} from "reactstrap";
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

          <FormControl
            id="exampleSearch"
            name="search"
            placeholder="Search all webinars"
            type="search"
          />
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
                    Click for more info
                  </Button>{" "}
                  <UncontrolledPopover
                    placement="bottom"
                    target="PopoverFocus"
                    // trigger="focus"
                    trigger="click"
                  >
                    <PopoverBody>
                      <PopoverHeader>
                        <h4>Description</h4>
                        Sequence for donning and doffing personal protective
                        equipment (PPE) Donning and doffing is the practice of
                        employees putting on and removing work-related
                        protective gear, clothing, and uniforms. Donning refers
                        to putting on work clothes, gear, and equipment, while
                        doffing means removing them.
                      </PopoverHeader>

                      <ListGroup numbered>
                        <h4>Includes</h4>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                      </ListGroup>
                    </PopoverBody>
                  </UncontrolledPopover>
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
                  <UncontrolledPopover
                    placement="bottom"
                    target="PopoverFocus"
                    // trigger="focus"
                    trigger="click"
                  ></UncontrolledPopover>
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
                  <UncontrolledPopover
                    placement="bottom"
                    target="PopoverFocus"
                    // trigger="focus"
                    trigger="click"
                  ></UncontrolledPopover>
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
