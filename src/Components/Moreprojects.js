import React, { useState } from 'react';
//import TableauReport from 'tableau-react';
import "./Moreprojects.css"; 
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import Faq from "react-faq-component";



const Moreprojects = () => {
    const[button1Color, setButton1Color] = useState("rgba(0, 0, 0, 1)");
    const[button2Color, setButton2Color] = useState("rgba(0, 0, 0, 1)");
    const[button3Color, setButton3Color] = useState("rgba(0, 0, 0, 1)");

    const[projectButton1Color, setProjectButton1Color] = useState("rgba(46, 61, 130, 1)");
    const[projectButton2Color, setProjectButton2Color] = useState("rgba(46, 61, 130, 1)");
    const[projectButton3Color, setProjectButton3Color] = useState("rgba(46, 61, 130, 1)");
    const[projectButton4Color, setProjectButton4Color] = useState("rgba(46, 61, 130, 1)");
    const[projectButton5Color, setProjectButton5Color] = useState("rgba(46, 61, 130, 1)");
    const[projectButton6Color, setProjectButton6Color] = useState("rgba(46, 61, 130, 1)");

    const data = {
        rows: [
            {
                title: <strong>Inference of low-dimensional structures in data</strong>,
                content: 
                <div><p>Our observations of real-world problems often involve measuring co-dependent variables. Reconstructing the underlying relationships between these variables requires analyzing static and temporal joint distributions of high-dimensional data.</p><div className="project-buttons" style={{backgroundColor: projectButton1Color, cursor: "pointer"}} onMouseOver={() =>{
                    setProjectButton1Color("rgba(46, 61, 130, 0.8)");
                }}
                onMouseLeave={() =>{
                    setProjectButton1Color("rgba(46, 61, 130, 1)");
                }}
                onClick={() =>{
                    window.location.href="/Moreprojects/Ldstructures";
                    setTimeout(() => {
                        setProjectButton1Color("rgba(46, 61, 130, 1)");
                    }, 20);
                }}><strong style={{color: "white"}}>Open</strong></div></div>,
            },
            {
                title: <strong>Data-driven Identification and Control of complex interconnected systems</strong>,
                content: <div><p>In this project, we identify stochastic processes with their underlying pathways by learning the lower dimension manifolds and finally optimizing our interception policies.</p><div className="project-buttons" style={{backgroundColor: projectButton2Color, cursor: "pointer"}} onMouseOver={() =>{
                    setProjectButton2Color("rgba(46, 61, 130, 0.8)");
                }}
                onMouseLeave={() =>{
                    setProjectButton2Color("rgba(46, 61, 130, 1)");
                }}
                onClick={() =>{
                    window.location.href="/Moreprojects/Complexsystems";
                    setTimeout(() => {
                        setProjectButton2Color("rgba(46, 61, 130, 1)");
                    }, 20);
                }}><strong style={{color: "white"}}>Open</strong></div></div>,
            },
            {
                title: <strong>Prescriptive analytics</strong>,
                content: <div><p>We develop new solutions to various operations research problems.</p><div className="project-buttons" style={{backgroundColor: projectButton3Color, cursor: "pointer"}} onMouseOver={() =>{
                    setProjectButton3Color("rgba(46, 61, 130, 0.8)");
                }}
                onMouseLeave={() =>{
                    setProjectButton3Color("rgba(46, 61, 130, 1)");
                }}
                onClick={() =>{
                    window.location.href="/Moreprojects/Prescriptiveanalysis";
                    setTimeout(() => {
                        setProjectButton3Color("rgba(46, 61, 130, 1)");
                    }, 20);
                }}><strong style={{color: "white"}}>Open</strong></div></div>,
            },
            {
                title: <strong>Scalable methods for machine learning and graph algorithms</strong>,
                content: <div><p>Big data pushes the limit of the existing algorithms into asymptotic realms. We develop algorithms to keep up with the size of data!</p><div className="project-buttons" style={{backgroundColor: projectButton4Color, cursor: "pointer"}} onMouseOver={() =>{
                    setProjectButton4Color("rgba(46, 61, 130, 0.8)");
                }}
                onMouseLeave={() =>{
                    setProjectButton4Color("rgba(46, 61, 130, 1)");
                }}
                onClick={() =>{
                    window.location.href="/Moreprojects/Scalablemethods";
                    setTimeout(() => {
                        setProjectButton4Color("rgba(46, 61, 130, 1)");
                    }, 20);
                }}><strong style={{color: "white"}}>Open</strong></div></div>,
            },
            {
                title: <strong>Structure and Functions of Complex Networks</strong>,
                content: <div><p>We study different structural proporties in networks, such as cyclic topologies, flows, matchings, clustering, etc.</p><div className="project-buttons" style={{backgroundColor: projectButton5Color, cursor: "pointer"}} onMouseOver={() =>{
                    setProjectButton5Color("rgba(46, 61, 130, 0.8)");
                }}
                onMouseLeave={() =>{
                    setProjectButton5Color("rgba(46, 61, 130, 1)");
                }}
                onClick={() =>{
                    window.location.href="/Moreprojects/Complexnetworks";
                    setTimeout(() => {
                        setProjectButton5Color("rgba(46, 61, 130, 1)");
                    }, 20);
                }}><strong style={{color: "white"}}>Open</strong></div></div>,
            },
            {
                title: <strong>Spectral Design of Multiplex Networks</strong>,
                content: <div><p>We study the problem of finding an optimal weight distribution for interlayer links in multiplex networks under budget constraint.</p><div className="project-buttons" style={{backgroundColor: projectButton6Color, cursor: "pointer"}} onMouseOver={() =>{
                    setProjectButton6Color("rgba(46, 61, 130, 0.8)");
                }}
                onMouseLeave={() =>{
                    setProjectButton6Color("rgba(46, 61, 130, 1)");
                }}
                onClick={() =>{
                    window.location.href="/Moreprojects/Multiplexnetworks";
                    setTimeout(() => {
                        setProjectButton6Color("rgba(46, 61, 130, 1)");
                    }, 20);
                }}><strong style={{color: "white"}}>Open</strong></div></div>,
            },
            
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return(
        <div className="App">
            {/* <h1 style={{padding: 20}}><strong>More Projects</strong></h1>
            <p>Project data is provided in the Tableau project below.</p>
            <body style={{padding: 20}}>
                <TableauReport url="https://public.tableau.com/shared/WG32P77P8?:display_count=y&:origin=viz_share_link" />
            </body> */}

            <div className="outer-project-container">
                <div className="">
                    <strong style={{fontSize: 20}}>Projects</strong> 
                </div>
            </div> 

            <div className="faq-project-list">
                <Faq data={data} styles={styles} config={config} />
            </div>

            <div className="outer-project-container">
                <div className="">
                    <strong style={{fontSize: 20}}>Repositories and Databases</strong> 
                </div>
                <div className="project-button-container">
                    <div className="project-button" style={{ border: "1px solid " + button1Color, cursor: "pointer", boxShadow: '10px 20px 30px #2e3d82' }}
                    onMouseOver={() =>{
                        setButton1Color("rgba(0, 0, 0, 0.2)");
                    }}
                    onMouseLeave={() =>{
                        setButton1Color("rgba(0, 0, 0, 1)");
                    }}
                    onClick={() =>{
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
                    <div className="project-button" style={{ border: "1px solid " + button2Color, cursor: "pointer", boxShadow: '10px 20px 30px #2e3d82' }}
                    onMouseOver={() =>{
                        setButton2Color("rgba(0, 0, 0, 0.2)");
                    }}
                    onMouseLeave={() =>{
                        setButton2Color("rgba(0, 0, 0, 1)");
                    }}
                    onClick={() =>{
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
                    <div className="project-button" style={{ border: "1px solid " + button3Color, cursor: "pointer", boxShadow: '10px 20px 30px #2e3d82' }}
                    onMouseOver={() =>{
                        setButton3Color("rgba(0, 0, 0, 0.2)");
                    }}
                    onMouseLeave={() =>{
                        setButton3Color("rgba(0, 0, 0, 1)");
                    }}
                    onClick={() =>{
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
        </div>
    )
}

export default Moreprojects; 