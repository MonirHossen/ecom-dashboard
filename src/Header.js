import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wraper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
