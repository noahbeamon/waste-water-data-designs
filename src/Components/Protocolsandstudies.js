import React, { useState } from 'react';
//import TableauReport from 'tableau-react';
import "./Protocolsandstudies.css"; 
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import Faq from "react-faq-component";

const Protocolsandstudies = () => {
    return(
        <div className="App">
            {/* <h1 style={{padding: 20}}><strong>More Projects</strong></h1>
            <p>Project data is provided in the Tableau project below.</p>
            <body style={{padding: 20}}>
                <TableauReport url="https://public.tableau.com/shared/WG32P77P8?:display_count=y&:origin=viz_share_link" />
            </body> */}
             <h1 style={{padding: 20}}><strong>Protocols and Studies</strong></h1>
            <strong>development note: Protocols and Studies go here</strong>
            <p>links for each item requiring individual js files displaying each md file</p>
        </div>
    )
}

export default Protocolsandstudies; 