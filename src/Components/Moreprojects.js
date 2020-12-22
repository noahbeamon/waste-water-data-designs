import React, { useState } from 'react';
//import TableauReport from 'tableau-react';
import "./Moreprojects.css"; 
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiOrcid } from "react-icons/si";

const Moreprojects = () => {
    const[button1Color, setButton1Color] = useState("rgba(0, 0, 0, 1)");
    const[button2Color, setButton2Color] = useState("rgba(0, 0, 0, 1)");
    const[button3Color, setButton3Color] = useState("rgba(0, 0, 0, 1)");

    return(
        <div className="App">
            {/* <h1 style={{padding: 20}}><strong>More Projects</strong></h1>
            <p>Project data is provided in the Tableau project below.</p>
            <body style={{padding: 20}}>
                <TableauReport url="https://public.tableau.com/shared/WG32P77P8?:display_count=y&:origin=viz_share_link" />
            </body> */}

            <div className="button-container">
                <div className="project-button" style={{ border: "1px solid " + button1Color, button1Color, cursor: "pointer", boxShadow: '10px 20px 30px #2e3d82' }}
                onMouseOver={() =>{
                    setButton1Color("rgba(0, 0, 0, 0.2)");
                }}
                onMouseLeave={() =>{
                    setButton1Color("rgba(0, 0, 0, 1)");
                }}
                onClick={() =>{
                    // window.location.href = "http://www.w3schools.com";
                    window.open(
                        'https://github.com/hshakeri', 
                        '_blank'
                    )
                    setTimeout(() => {
                        setButton1Color("rgba(0, 0, 0, 1)");
                    }, 20);
                }}
                >
                    <div className="inner-button-container">
                        <AiFillGithub  size={50} color="rgba(85, 85, 85, 1)" style={{margin: 10}}/>
                        <strong style={{color: "rgba(85, 85, 85, 1)", marginTop: 20, marginRight: 20, fontSize: 20}}>Github</strong>
                    </div>
                </div>
                <div className="project-button" style={{ border: "1px solid " + button2Color, button1Color, cursor: "pointer", boxShadow: '10px 20px 30px #2e3d82' }}
                onMouseOver={() =>{
                    setButton2Color("rgba(0, 0, 0, 0.2)");
                }}
                onMouseLeave={() =>{
                    setButton2Color("rgba(0, 0, 0, 1)");
                }}
                onClick={() =>{
                    // window.location.href = "http://www.w3schools.com";
                    window.open(
                        'https://scholar.google.com/citations?user=zFIIhGMAAAAJ&hl=en', 
                        '_blank'
                    )
                    setTimeout(() => {
                        setButton2Color("rgba(0, 0, 0, 1)");
                    }, 20);
                }}
                >
                    <div className="inner-button-container">
                        <SiGooglescholar size={50} color="rgba(85, 85, 85, 1)" style={{margin: 10}}/>
                        <strong style={{color: "rgba(85, 85, 85, 1)", marginTop: 20, marginRight: 20, fontSize: 20}}>Google Scholar</strong>
                    </div>
                </div>
                <div className="project-button" style={{ border: "1px solid " + button3Color, button1Color, cursor: "pointer", boxShadow: '10px 20px 30px #2e3d82' }}
                onMouseOver={() =>{
                    setButton3Color("rgba(0, 0, 0, 0.2)");
                }}
                onMouseLeave={() =>{
                    setButton3Color("rgba(0, 0, 0, 1)");
                }}
                onClick={() =>{
                    // window.location.href = "http://www.w3schools.com";
                    window.open(
                        'https://orcid.org/0000-0002-9891-5748', 
                        '_blank'
                    )
                    setTimeout(() => {
                        setButton3Color("rgba(0, 0, 0, 1)");
                    }, 20);
                }}
                >
                    <div className="inner-button-container">
                        <SiOrcid size={50} color="rgba(85, 85, 85, 1)" style={{margin: 10}}/>
                        <strong style={{color: "rgba(85, 85, 85, 1)", marginTop: 20, marginRight: 20, fontSize: 20}}>ORCID</strong>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Moreprojects; 