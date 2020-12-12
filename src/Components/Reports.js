import React, { useState } from 'react';
import ReactMapGL, {NavigationControl, Marker, Popup, Layer, Source} from "react-map-gl";
import { BsFillCircleFill } from "react-icons/bs";
import Data from './Data.json'
import Data2 from './Data2.json'

const Reports = () => {
    const [viewport, setViewport] = useState({
        latitude: 38.031479,
        longitude: -78.481272,
        width: '60vw',
        height: "100vh", 
        zoom: 13,
    });

    const [showPopup, setShowPopup] = useState(null);
    
    let activeColor = 'rgba(0, 251, 0, 0.5)'; 
    let inactiveColor = 'rgba(255, 0, 0, 0.5)'; 
    let activeRegionColor = 'rgba(0, 0, 0, 1)';
    let inactiveRegionColor = 'rgba(0, 0, 0, 0.3)';

    const [iconColor, setIconColor] = useState(inactiveColor);
    const [iconColor1, setIconColor1] = useState(inactiveColor);

    const [regionLineColor, setRegionLineColor] = useState(inactiveRegionColor)

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
                <Marker latitude={38.0293} longitude={-78.4767} offsetLeft={-20} offsetTop={-10}
                >
                    <div onClick={() => {
                        setShowPopup(0);
                        setIconColor(activeColor)
                        setIconColor1(inactiveColor)
                    }}
                    onMouseOver={() => {
                        setShowPopup(0);
                        setRegionLineColor(activeRegionColor);
                    }}
                    onMouseLeave={() => {
                        setShowPopup(null); 
                        setRegionLineColor(inactiveRegionColor);
                    }}
                    >
                        {/* <IoMdLocate style={{color: iconColor, height: 30, width: 30}} /> */}
                        <BsFillCircleFill style={{color: iconColor}}/>
                    </div>
                </Marker>
                {showPopup == 0 && 
                    <Popup
                        latitude={38.0293}
                        longitude={-78.4767}
                        closeButton={false}
                        closeOnClick={false}
                        tipSize={0}
                        offsetTop={-10}
                        >
                        <div>Test Location #1</div>
                    </Popup>}  
                <Marker latitude={38.03501} longitude={-78.50425} offsetLeft={-20} offsetTop={-10}
                >
                    <div onClick={() =>{
                         setShowPopup(1);
                         setIconColor1(activeColor)
                         setIconColor(inactiveColor)
                         }}
                         onMouseOver={() => {
                            setShowPopup(1);
                            setRegionLineColor(activeRegionColor);
                        }}
                        onMouseLeave={() => {
                            setShowPopup(null);
                            setRegionLineColor(inactiveRegionColor);
                        }}
                         >
                             <BsFillCircleFill style={{color: iconColor1}}/>
                         </div>
                </Marker>
                {showPopup == 1 && 
                    <Popup
                        latitude={38.03501}
                        longitude={-78.50425}
                        closeButton={false}
                        closeOnClick={false}
                        tipSize={0}
                        offsetTop={-10}
                        >
                        <div>Test Location #2</div>
                    </Popup>}

                  
                   <div>
                    <Source id='polylineLayer' type='geojson' data={Data}>
                        <Layer
                        id='lineLayer' //lineLayer
                        type='line' //line
                        source='my-data'
                        layout={{
                        'line-join': 'round',
                        'line-cap': 'round',
                        }}
                        paint={{
                        'line-color': regionLineColor,
                            'line-width': 1,
                        }}
                        />
                    </Source>

                    <Source id='polygon' type='geojson' data={Data}>
                        <Layer
                        id= 'aoi-solid-fill'
                        source= 'aoi' 
                        type= 'fill'
                        paint= {{ 
                            'fill-color': 'rgba(255, 255, 255, 0.3)',
                         }}
                        />
                    </Source>
                    </div>  

                    {/* <div>
                    <Source id='polylineLayer2' type='geojson' data={Data2}>
                        <Layer
                        id='lineLayer2' //lineLayer
                        type='line' //line
                        source='my-data'
                        layout={{
                        'line-join': 'round',
                        'line-cap': 'round',
                        }}
                        paint={{
                        'line-color': 'rgba(0, 0, 0, 0.5)',
                            'line-width': 1,
                        }}
                        />
                    </Source>

                    <Source id='polygon2' type='geojson' data={Data2}>
                        <Layer
                        id= 'aoi-solid-fill2'
                        source= 'aoi' 
                        type= 'fill'
                        paint= {{ 
                            'fill-color': 'rgba(255, 255, 255, 0.3)',
                         }}
                        />
                    </Source>
                    </div> */}

            </ReactMapGL>
            </div>
        </div>
    )
}

export default Reports; 