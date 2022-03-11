import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiChinaeasternairlines } from "react-icons/si";
import { BsCart, BsCartCheck } from "react-icons/bs";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarText,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";
import LogInForm from "./LogInForm";
const Navigation = () => {
  return (
    <>
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">
            <SiChinaeasternairlines size={70} /> CEUs for All{" "}
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink> */}
              {/* </NavItem> */}
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {" "}
                    <Link to="/inperson">
                      <Button variant="secondary">In Person</Button>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/webinar">
                      <Button variant="secondary"> Webinar</Button>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <Link to="/ondemand">
                      <Button variant="secondary">Articles</Button>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    {" "}
                    <Link to="/">
                      <Button variant="secondary">Home</Button>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <LogInForm></LogInForm>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
          <BsCart size={40}></BsCart>
          {/* if stuff in chart <BsCartCheck size={40} /> */}
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
