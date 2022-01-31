import React from "react";
import {
  Container,
  Table,
  UncontrolledPopover,
  PopoverBody,
  Button,
  Input,
  InputGroup,
} from "reactstrap";
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
          <Input
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
                  <Input
                    addon
                    aria-label="Checkbox for following text input"
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
                  <UncontrolledPopover
                    placement="bottom"
                    target="PopoverFocus"
                    // trigger="focus"
                    trigger="click"
                  >
                    <PopoverBody>
                      Sequence for donning and doffing personal protective
                      equipment (PPE) Donning and doffing is the practice of
                      employees putting on and removing work-related protective
                      gear, clothing, and uniforms. Donning refers to putting on
                      work clothes, gear, and equipment, while doffing means
                      removing them.
                    </PopoverBody>
                  </UncontrolledPopover>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <Input
                    addon
                    aria-label="Checkbox for following text input"
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
                  <UncontrolledPopover
                    placement="bottom"
                    target="PopoverFocus"
                    // trigger="focus"
                    trigger="click"
                  >
                    <PopoverBody>
                      Sequence for donning and doffing personal protective
                      equipment (PPE) Donning and doffing is the practice of
                      employees putting on and removing work-related protective
                      gear, clothing, and uniforms. Donning refers to putting on
                      work clothes, gear, and equipment, while doffing means
                      removing them.
                    </PopoverBody>
                  </UncontrolledPopover>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <Input
                    addon
                    aria-label="Checkbox for following text input"
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
                  <UncontrolledPopover
                    placement="bottom"
                    target="PopoverFocus"
                    // trigger="focus"
                    trigger="click"
                  >
                    <PopoverBody>
                      Sequence for donning and doffing personal protective
                      equipment (PPE) Donning and doffing is the practice of
                      employees putting on and removing work-related protective
                      gear, clothing, and uniforms. Donning refers to putting on
                      work clothes, gear, and equipment, while doffing means
                      removing them.
                    </PopoverBody>
                  </UncontrolledPopover>
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
