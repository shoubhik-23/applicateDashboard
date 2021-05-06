import React from "react";
import { Box, FormControl } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Modal from "./modal";

import { Form, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

function NavbarComponent() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ marginBottom: 40 }}>
        <Navbar.Brand>
          <Box
            onClick={() => history.push("/")}
            style={{ width: 50, height: 40, cursor: "pointer" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={Logo}
              alt=""
            ></img>
          </Box>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>

            <NavDropdown title="Navigate" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => history.push("/order")}>
                Order Table
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push("/user")}>
                User Table
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button onClick={() => setOpen(true)}>
              <HelpOutlineIcon></HelpOutlineIcon>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Modal open={open} handleClose={handleClose}></Modal>
    </>
  );
}

export default NavbarComponent;
