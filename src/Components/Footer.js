import React from 'react';
import "./Footer.css"; 

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>consectetur adipiscing elit</li>
                            <li>sed do eiusmod tempor incididunt ut labore et dolore </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy; {new Date().getFullYear()} University of Virginia Wastewater Tracker
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer; 