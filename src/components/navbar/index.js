import React from "react";
import { Form, Nav, Navbar, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router";

function NavbarComponent() {
  const history = useHistory();
  return (
    <nav>
      {/* <div>
        <h6 onClick={() => history.push("/")}>Home</h6>
        <h6 onClick={() => history.push("/users")}>Users</h6>
        <Link to="/route/here"
      </div> */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sign App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <button
              onClick={() => history.push("/")}
              className="btn btn-primary m-1"
            >
              Home
            </button>
            <button
              onClick={() => history.push("/users")}
              className="btn btn-primary m-1"
            >
              users
            </button>
            <button
              onClick={() => history.push("/image")}
              className="btn btn-primary m-1"
            >
              images
            </button>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default NavbarComponent;
