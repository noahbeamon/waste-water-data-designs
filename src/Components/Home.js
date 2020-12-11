import React, { useState } from 'react';
import ReactMapGL, {NavigationControl, Marker, Popup} from "react-map-gl"; 
import { IoMdLocate } from 'react-icons/io';

const Reports = () => {
    const [viewport, setViewport] = useState({
        latitude: 38.0316,
        longitude: -78.5050,
        width: '60vw',
        height: "100vh", 
        zoom: 12,
    });

    const [showPopup, setShowPopup] = useState(null);
    
    let activeColor = 'rgba(0, 251, 0, 0.5)'; 
    let inactiveColor = 'rgba(255, 0, 0, 0.5)'; 
    const [iconColor, setIconColor] = useState(inactiveColor);
    const [iconColor1, setIconColor1] = useState(inactiveColor);

    return(
        <div className="App">
            <h1 style={{padding: 20}}><strong>Data Reports</strong></h1>
            <p style={{padding: 0}}>Click a location on the map below to view its data report, or scroll down to see all the charts.</p>
            <div style={{padding: 20}}>
            <ReactMapGL
            {...viewport}
            mapStyle = "mapbox://styles/noahb20/ckigtszgw173519qy1c0t05va"
            mapboxApiAccessToken="pk.eyJ1Ijoibm9haGIyMCIsImEiOiJja2lkb2RlaGMwNGR4Mnhxd21sbWxyeWVnIn0.SLuqIEAYEE2gY0ZNw5ySHA"
            onViewportChange={viewport => {
                setViewport(viewport); 
            }}
            >
                <div style={{position: 'absolute', right: 10, top: 10}}>
                    <NavigationControl />
                </div>
                <Marker latitude={38.0316} longitude={-78.5050} offsetLeft={-20} offsetTop={-10}
                >
                    <div onClick={() => {
                        setShowPopup(0);
                        setIconColor(activeColor)
                        setIconColor1(inactiveColor)
                    }}
                    onMouseOver={() => {
                        setShowPopup(0);
                    }}
                    onMouseLeave={() => {
                        setShowPopup(null); 
                    }}
                    >
                        <IoMdLocate style={{color: iconColor, height: 30, width: 30}} />
                    </div>
                </Marker>
                {showPopup == 0 && 
                    <Popup
                        latitude={38.0316}
                        longitude={-78.5050}
                        closeButton={false}
                        closeOnClick={false}
                        tipSize={0}
                        offsetTop={-10}
                        >
                        <div>Test Location #1</div>
                    </Popup>}
                <Marker latitude={38.04} longitude={-78.51} offsetLeft={-20} offsetTop={-10}
                >
                    <div onClick={() =>{
                         setShowPopup(1);
                         setIconColor1(activeColor)
                         setIconColor(inactiveColor)
                         }}
                         onMouseOver={() => {
                            setShowPopup(1);
                        }}
                        onMouseLeave={() => {
                            setShowPopup(null);
                        }}
                         >
                             <IoMdLocate style={{color: iconColor1, height: 30, width: 30}} />
                         </div>
                </Marker>
                {showPopup == 1 && 
                    <Popup
                        latitude={38.04}
                        longitude={-78.51}
                        closeButton={false}
                        closeOnClick={false}
                        tipSize={0}
                        offsetTop={-10}
                        >
                        <div>Test Location #2</div>
                    </Popup>}
               
            </ReactMapGL>
            </div>
        </div>
    )
}

export default Reports; 