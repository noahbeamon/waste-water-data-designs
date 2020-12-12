import React from 'react'
import './App.css';
import * as ReactBootstrap from "react-bootstrap"; 
import Home from "./Components/Home"
import Reports from "./Components/Reports";
import Morevisualizations from "./Components/Morevisualizations";
import Studiesprocedures from "./Components/Studiesandprocedures";
import Faqs from "./Components/Faqs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavBar() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/Studiesandprocedures" component={Studiesprocedures}>
            <Studiesprocedures />
          </Route>
          <Route path="/Morevisualizations" component={Morevisualizations}>
            <Morevisualizations />
          </Route>
          <Route path="/Faqs" component={Faqs}>
            <Faqs />
          </Route>
          <Route path="/Reports" component={Reports}>
            <Reports />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
    <Footer />
     </div>
  );
}

export default NavBar;
