import React from "react";
import { ListGroup } from "react-bootstrap";
import { UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";

const oldPopOver = () => {
  return (
    <div>
      oldPopOver
      <UncontrolledPopover
        placement="bottom"
        target="PopoverFocus"
        // trigger="focus"
        trigger="click"
      >
        <PopoverBody>
          <PopoverHeader>
            <h4>Description</h4>
            Sequence for donning and doffing personal protective equipment (PPE)
            Donning and doffing is the practice of employees putting on and
            removing work-related protective gear, clothing, and uniforms.
            Donning refers to putting on work clothes, gear, and equipment,
            while doffing means removing them.
          </PopoverHeader>

          <ListGroup numbered>
            <h4>Includes</h4>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </PopoverBody>
      </UncontrolledPopover>
      ;
    </div>
  );
};

export default oldPopOver;
