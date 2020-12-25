import React from 'react'
import './App.css';
//import * as ReactBootstrap from "react-bootstrap"; 
import Home from "./Components/Home"
import Reports from "./Components/Reports";
import Moreprojects from "./Components/Moreprojects";
import Studiesprocedures from "./Components/Studiesandprocedures";
import Faqs from "./Components/Faqs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; 

//projects
import Ldstructures from "./Components/Projects/Ldstructures"; 
import Complexsystems from "./Components/Projects/Complexsystems"; 
import Prescriptiveanalysis from "./Components/Projects/Prescriptiveanalysis";
import Epidemicnetworks from "./Components/Projects/Papers/Epidemicnetworks";
import Opticalnetworks from "./Components/Projects/Papers/Opticalnetworks";
import Cyclicstructure from "./Components/Projects/Papers/Cyclicstructure"; 
import Modelingframework from "./Components/Projects/Papers/Modelingframework"; 
import Makespan from "./Components/Projects/Papers/Makespan";
import Scalablemethods from "./Components/Projects/Scalablemethods";
import Complexnetworks from "./Components/Projects/Complexnetworks"; 
import Multiplexnetworks from "./Components/Projects/Multiplexnetworks"; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/Moreprojects/Ldstructures" components={Ldstructures}>
            <Ldstructures />
          </Route>
          <Route path="/Moreprojects/Complexsystems" components={Complexsystems}>
            <Complexsystems />
          </Route>
          <Route path="/Moreprojects/Prescriptiveanalysis" components={Prescriptiveanalysis}>
            <Prescriptiveanalysis />
          </Route>
          <Route path="/Moreprojects/Epidemicnetworks" components={Epidemicnetworks}>
            <Epidemicnetworks />
          </Route>
          <Route path="/Moreprojects/Opticalnetworks" components={Opticalnetworks}>
            <Opticalnetworks />
          </Route>
          <Route path="/Moreprojects/Makespan" components={Makespan}>
            <Makespan />
          </Route>
          <Route path="/Moreprojects/Cyclicstructure" components={Cyclicstructure}>
            <Makespan />
          </Route>
          <Route path="/Moreprojects/Modelingframework" components={Modelingframework }>
            <Modelingframework />
          </Route>
          <Route path="/Moreprojects/Scalablemethods" components={Scalablemethods}>
            <Scalablemethods />
          </Route>
          <Route path="/Moreprojects/Complexnetworks" components={Complexnetworks}>
            <Complexnetworks />
          </Route>
          <Route path="/Moreprojects/Multiplexnetworks" component={Multiplexnetworks}>
            <Multiplexnetworks />
          </Route>
          
          <Route path="/Faqs" component={Faqs}>
            <Faqs />
          </Route>
          <Route path="/Moreprojects" component={Moreprojects}>
            <Moreprojects />
          </Route>
          <Route path="/Studiesandprocedures" component={Studiesprocedures}>
            <Studiesprocedures />
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

export default App;