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
        <ReactBootstrap.Navbar.Brand href="/">
          <img style={{width: 30, height: 30, marginRight: 10}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/University_of_Virginia_Rotunda_logo.svg/1200px-University_of_Virginia_Rotunda_logo.svg.png"/> 
          <strong style={{ color: '#2e3d82' }}>University of Virginia COVID-19 Wastewater Tracker</strong>
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <Link to="/" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={1} href="#home">Home</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Reports" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={2} href="#reports">Reports</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Protocolsandstudies" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={3} href="#protocolsandstudies">Protocols and Studies</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Team" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={4} href="#team">Team</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Faq" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={5} href="#faq">FAQ</ReactBootstrap.Nav.Link>
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default Navbar;