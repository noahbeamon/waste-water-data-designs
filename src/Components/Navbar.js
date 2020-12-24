import React from 'react'
import '../App.css';
import * as ReactBootstrap from "react-bootstrap"; 
import {
    //BrowserRouter as Router,
    Link,
} from 'react-router-dom'; 

function Navbar() {
  return (
    <div className="App">
          <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <ReactBootstrap.Navbar.Brand href="#home"><strong style={{ color: '#2e3d82' }}>University of Virginia COVID-19 Wastewater Tracker</strong></ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <Link to="/">
            <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Reports">
            <ReactBootstrap.Nav.Link href="#reports">Reports</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Studiesandprocedures">
            <ReactBootstrap.Nav.Link eventKey={2} href="#studiesandprocedures">Studies and Procedures</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Moreprojects">
            <ReactBootstrap.Nav.Link eventKey={3} href="#moreprojects">More Projects</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Faqs">
            <ReactBootstrap.Nav.Link eventKey={4} href="#faqs">FAQs</ReactBootstrap.Nav.Link>
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default Navbar;