import React from "react";
import {
  Container,
  Table,
  Popover,
  PopoverBody,
  Button,
  InputGroup,
  InputGroupGroup,
  ListGroup,
  ListGroupItem,
  PopoverHeader,
} from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const WebinarClasses = () => {
  return (
    <>
      <Container>
        <Navigation></Navigation>
        <div className="h-100 p-5 bg-light border rounded-3">
          {/* <div className="container-fluid bg-light text-dark p-5"> */}
          {/* <div className="container bg-light p-5"> */}
          <h1 className="display-4 fw-bold">List of webinars </h1>
          {/* implement filtering based on description search  */}
          <InputGroup
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
                  <InputGroup
                    addon
                    aria-label="Checkbox for following text InputGroup"
                    type="checkbox"
                  />
                </th>
                <td>PPE Basics</td>
                <td>1.2</td>
                <td>Webinar</td>
                <td>$65.00</td>
                <td>Donning and Doffing PPE safely </td>
                <td>
                  <Button id="PopoverFocus" type="button">
                    Click for more info
                  </Button>{" "}
                  <Popover
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
                  </Popover>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <InputGroup
                    addon
                    aria-label="Checkbox for following text InputGroup"
                    type="checkbox"
                  />
                </th>
                <td>PPE Basics</td>
                <td>1.2</td>
                <td>Webinar</td>
                <td>$65.00</td>
                <td>Donning and Doffing PPE safely </td>
                <td>
                  <Button id="PopoverFocus" type="button">
                    Click for more info
                  </Button>{" "}
                  <Popover
                    placement="bottom"
                    target="PopoverFocus"
                    // trigger="focus"
                    trigger="click"
                  ></Popover>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <InputGroup
                    addon
                    aria-label="Checkbox for following text InputGroup"
                    type="checkbox"
                  />
                </th>
                <td>PPE Basics</td>
                <td>1.2</td>
                <td>Webinar</td>
                <td>$65.00</td>
                <td>Donning and Doffing PPE safely </td>
                <td>
                  <Button id="PopoverFocus" type="button">
                    Click for more info
                  </Button>{" "}
                  <Popover
                    placement="bottom"
                    target="PopoverFocus"
                    // trigger="focus"
                    trigger="click"
                  ></Popover>
                </td>
              </tr>
            </tbody>
          </Table>
          <InputGroup>
            <Button>Add selected to cart</Button>
          </InputGroup>
        </div>
        <br />
        <div></div>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default WebinarClasses;
