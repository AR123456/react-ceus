import React from "react";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiChinaeasternairlines } from "react-icons/si";
import { BsCart, BsCartCheck } from "react-icons/bs";

import LogInForm from "./LogInForm";
const Navigation = () => {
  return (
    <>
      <div>
        <Navbar color="light" expand="md" light>
          <Navbar.Brand href="/">
            <SiChinaeasternairlines size={70} /> CEUs for All{" "}
          </Navbar.Brand>
          <Navbar.Toggle onClick={function noRefCheck() {}} />
          <Navbar.Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/inperson">
                    <Button variant="secondary">In Person</Button>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/webinar">
                    <Button variant="secondary"> Webinar</Button>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/ondemand">
                    <Button variant="secondary">Articles</Button>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <LogInForm inline></LogInForm>
          </Navbar.Collapse>
          <BsCart size={40}></BsCart>
          {/* if stuff in chart <BsCartCheck size={40} /> */}
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
