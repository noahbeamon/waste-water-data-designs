import React, { useState } from 'react';
import "./Home.css"; 

const Home = () => {
    const[button1Color, setButton1Color] = useState("rgba(46, 61, 130, 1)");
    const[button2Color, setButton2Color] = useState("rgba(85, 85, 85, 1)");
    const[button3Color, setButton3Color] = useState("rgba(85, 85, 85, 1)");
    const[button4Color, setButton4Color] = useState("rgba(85, 85, 85, 1)");

    return(
        <div className="App">
            <h1 style={{padding: 20}}><strong>University of Virginia COVID-19 Wastewater Tracker</strong></h1>
            <div className="paragraphs">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet augue suscipit interdum aliquet. Sed ultricies bibendum mattis. Duis velit mauris, aliquam ac elementum sit amet, cursus nec tortor. Suspendisse in elementum est. In interdum ac dolor vel elementum. Mauris rutrum tortor quis bibendum finibus. Pellentesque laoreet erat vitae finibus commodo. Praesent eget cursus massa. Aliquam erat volutpat. Nulla facilisi. Donec porta leo nisi, eget porta nibh sodales id. Mauris id dolor nec purus interdum tempus. Proin lacinia semper elit, ac egestas turpis ultricies eget. Nam imperdiet tellus in velit ornare laoreet.</p>
            </div>
            <div className="button-container">
                <div className="button" style={{backgroundColor: button1Color, cursor: "pointer"}}
                onMouseOver={() =>{
                    setButton1Color("rgba(46, 61, 130, 0.8)");
                }}
                onMouseLeave={() =>{
                    setButton1Color("rgba(46, 61, 130, 1)");
                }}
                onClick={() =>{
                    window.location.href="Reports";
                    setTimeout(() => {
                        setButton1Color("rgba(46, 61, 130, 1)");
                    }, 20);
                }}
                >
                    <strong style={{color: "white"}}>See Data Reports</strong>
                </div>
                <div className="button" style={{backgroundColor: button2Color, cursor: "pointer"}}
                onMouseOver={() =>{
                    setButton2Color("rgba(85, 85, 85, 0.8)");
                }}
                onMouseLeave={() =>{
                    setButton2Color("rgba(85, 85, 85, 1)");
                }}
                onClick={() =>{
                    window.location.href="Faqs";
                    setTimeout(() => {
                        setButton2Color("rgba(85, 85, 85, 1)");
                    }, 20);
                }}
                >
                    <strong style={{color: "white"}}>FAQs</strong>
                </div>
            </div>
            <div className="paragraphs">
                <strong style={{fontSize: 25}}>Why Wastewater?</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet augue suscipit interdum aliquet. Sed ultricies bibendum mattis. Duis velit mauris, aliquam ac elementum sit amet, cursus nec tortor. Suspendisse in elementum est. In interdum ac dolor vel elementum. Mauris rutrum tortor quis bibendum finibus. Pellentesque laoreet erat vitae finibus commodo. Praesent eget cursus massa. Aliquam erat volutpat. Nulla facilisi. Donec porta leo nisi, eget porta nibh sodales id. Mauris id dolor nec purus interdum tempus. Proin lacinia semper elit, ac egestas turpis ultricies eget. Nam imperdiet tellus in velit ornare laoreet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet augue suscipit interdum aliquet. Sed ultricies bibendum mattis. Duis velit mauris, aliquam ac elementum sit amet, cursus nec tortor. Suspendisse in elementum est. In interdum ac dolor vel elementum. Mauris rutrum tortor quis bibendum finibus. Pellentesque laoreet erat vitae finibus commodo. Praesent eget cursus massa. Aliquam erat volutpat. Nulla facilisi. Donec porta leo nisi, eget porta nibh sodales id. Mauris id dolor nec purus interdum tempus. Proin lacinia semper elit, ac egestas turpis ultricies eget. Nam imperdiet tellus in velit ornare laoreet.</p>
            </div>
            <div className="button-container">
                <div className="button" style={{backgroundColor: button3Color, cursor: "pointer"}}
                onMouseOver={() =>{
                    setButton3Color("rgba(85, 85, 85, 0.8)");
                }}
                onMouseLeave={() =>{
                    setButton3Color("rgba(85, 85, 85, 1)");
                }}
                onClick={() =>{
                    window.location.href="Studiesandprocedures";
                    setTimeout(() => {
                        setButton3Color("rgba(85, 85, 85, 1)");
                    }, 20);
                }}
                >
                    <strong style={{color: "white"}}>See Studies and Procedures</strong>
                </div>
                <div className="button" style={{backgroundColor: button4Color, cursor: "pointer"}}
                onMouseOver={() =>{
                    setButton4Color("rgba(85, 85, 85, 0.8)");
                }}
                onMouseLeave={() =>{
                    setButton4Color("rgba(85, 85, 85, 1)");
                }}
                onClick={() =>{
                    window.location.href="Moreprojects";
                    setTimeout(() => {
                        setButton4Color("rgba(85, 85, 85, 1)");
                    }, 20);
                }}
                >
                    <strong style={{color: "white"}}>Additional Projects and Publications</strong>
                </div>
            </div>
        </div>
    )
}

export default Home; 