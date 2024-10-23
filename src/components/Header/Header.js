import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';  // Importing custom CSS

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        {/* Hotel Logo */}
        <Navbar.Brand href="/">
          {/* <img
            src="path-to-your-logo.png"
            alt="Hotel Logo"
            width="150"
            height="50"
          /> */}
          {<h3 className='king'>Kingsukh Guest House</h3>}
        </Navbar.Brand>
        
        {/* Toggler for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="vbasic-navbar-na">
          <Nav className="custom-nav">
            {/* Navigation Links */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#rooms">Rooms</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>

          {/* Booking Button */}
          <Button href="#booking" variant="primary" className="ml-3">
            Book Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
