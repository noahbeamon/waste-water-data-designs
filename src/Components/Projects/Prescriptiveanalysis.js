import React from 'react';
import "./Prescriptiveanalysis.css"; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Prescriptiveanalysis = () => {
    return(
        <div className="App">
            <div className="content-container">
                <strong style={{fontSize: 20}}>Prescriptive analytics</strong>
                <p>See <a href="/Moreprojects/Makespan">1</a>, <a href="/Moreprojects/Opticalnetworks">2</a>, and <a href="/Moreprojects/Epidemicnetworks">3</a>.</p>
                <p>In another work, we are investigating the problem of incentive rate determination over a network of consumers to maximize the sales of a single club good by a monopolist (preprint will be available soon).</p>
            </div>
        </div>
    )
}

export default Prescriptiveanalysis ; 