import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";

function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory()
  function logout(){
      localStorage.clear();
      history.push('./login');
  }
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
          {localStorage.getItem("user-info") ? (
            <>
              <Nav>
                <NavDropdown title={user && user.name}>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
          ) : null}
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
