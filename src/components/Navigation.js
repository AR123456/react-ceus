import React from "react";
import { Link } from "react-router-dom";
import { SiChinaeasternairlines } from "react-icons/si";
import { BsCart, BsCartCheck } from "react-icons/bs";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Dropdown,
  NavbarText,
  Collapse,
  NavItem,
  NavLink,
  Button,
} from "react-bootstrap";
import LogInForm from "./LogInForm";
const Navigation = () => {
  return (
    <>
      <div>
        <Navbar color="light" expand="md" light>
          <Navbar.Brand href="/">
            <SiChinaeasternairlines size={70} /> CEUs for All{" "}
          </Navbar.Brand>
          <Navbar.Toggler onClick={function noRefCheck() {}} />
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
              <Dropdown inNavbar nav>
                <Dropdown caret nav>
                  Menu
                </Dropdown>
                <Dropdown.Menu right>
                  <Dropdown.Item>
                    {" "}
                    <Link to="/inperson">
                      <Button>In Person</Button>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/webinar">
                      <Button>Webinar</Button>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    {" "}
                    <Link to="/ondemand">
                      <Button>Articles</Button>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item divider />
                  <Dropdown.Item>
                    {" "}
                    <Link to="/">
                      <Button>Home</Button>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
