import React from "react";
import { Link } from "react-router-dom";
import { SiChinaeasternairlines } from "react-icons/si";
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
  Button,
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
                      <Button>In Person</Button>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/webinar">
                      <Button>Webinar</Button>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <Link to="/ondemand">
                      <Button>Articles</Button>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    {" "}
                    <Link to="/">
                      <Button>Home</Button>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <LogInForm></LogInForm>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
