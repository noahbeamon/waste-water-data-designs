import React, { useState } from 'react';
import ReactMapGL, {NavigationControl, Marker, Popup, Layer, Source} from "react-map-gl";
import { BsFillCircleFill } from "react-icons/bs";
import Data from './Data.json';
import Data2 from './Data2.json';
import './Reports.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from "recharts"; 
import { chartData1a, chartData1b, chartData2a, chartData2b } from "./ChartData.js"; 

const Reports = () => {
    const [viewport, setViewport] = useState({
        latitude: 38.031479,
        longitude: -78.481272,
        width: '50vw',
        height: "600px", 
        zoom: 13,
    });

    const [showPopup, setShowPopup] = useState(null);
    
    let activeColor = 'rgba(57, 184, 120, 0.8)'; 
    let inactiveColor = 'rgba(255, 0, 0, 0.5)'; 
    let activeRegionColor = 'rgba(0, 0, 0, 1)';
    let inactiveRegionColor = 'rgba(0, 0, 0, 0.3)';

    const [iconColor, setIconColor] = useState(inactiveColor);
    const [iconColor1, setIconColor1] = useState(inactiveColor);

    const [regionLineColor, setRegionLineColor] = useState(inactiveRegionColor)

    const [showChart, setShowChart] = useState(null); 

      var graphOneYLabel = "SARS-CoV-2 RNA \
       copies/mL"

       const DataFormater = (number) => {
        if(number > 1000000000){
          return (number/1000000000).toString() + 'B';
        }else if(number > 1000000){
          return (number/1000000).toString() + 'M';
        }else if(number > 1000){
          return (number/1000).toString() + 'K';
        }else{
          return number.toString();
        }
      }

    return(
        <div className="App">
            <h1 style={{padding: 20}}><strong>Data Reports</strong></h1>
            <p style={{padding: 0}}>Click a location on the map below to view its data report, or scroll down to see all the charts.</p>
            <div className="map-chart-container">
            <div>
            <ReactMapGL
            className="map-view-container"
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
                        setIconColor(activeColor);
                        setIconColor1(inactiveColor);
                        setShowChart(0);
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
                         setIconColor1(activeColor);
                         setIconColor(inactiveColor);
                         setShowChart(1);
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
            <div>
                {(showChart == null || showChart == 0) &&
                <div className="chart-view-container">
                    <strong style={{fontSize: 20}}>Test Location #1</strong>
                    <p style={{color: 'gray'}}>The Test Location #1 serves # people.</p>
                    <p style={{color: 'gray'}}>Areas served: Test Location #1,...</p>  
                    <BarChart width={window.innerWidth*0.40} height={175} data={chartData1a} style={{marginBottom: 20}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"/>
                        <YAxis tickFormatter={DataFormater}>
                            <Label value="RNA (copies/mL)" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Bar dataKey="copies/mL" fill="#4B93E2" />
                    </BarChart>
                    <div>
                    <BarChart width={window.innerWidth*0.40} height={175} data={chartData1b}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis tickFormatter={DataFormater}>
                        <Label value="Daily cases/100K" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Bar dataKey="cases" fill="#000000"/>
                        <Bar dataKey="predicted cases" fill="#aaacab"/>
                    </BarChart>
                    </div>
                    <div className="bottom-legend">
                        <BsFillCircleFill style={{color: '#000000', margin: 8}} size={8}/>
                        <p>Measured case data</p>
                    </div>
                    <div className="bottom-legend">
                        <BsFillCircleFill style={{color: '#aaacab', margin: 8}} size={8}/>
                        <p>Predicted case data based on wastewater SARS-CoV-2 concentrations</p>
                    </div>
                </div>}
                {(showChart == 1) &&
                <div className="chart-view-container">
                    <strong style={{fontSize: 20}}>Test Location #2</strong>
                    <p style={{color: 'gray'}}>The Test Location #2 serves # people.</p>
                    <p style={{color: 'gray'}}>Areas served: Test Location #2,...</p>  
                    <BarChart width={window.innerWidth*0.40} height={175} data={chartData2a} style={{marginBottom: 20}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"/>
                        <YAxis tickFormatter={DataFormater}>
                            <Label value="RNA (copies/mL)" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Bar dataKey="copies/mL" fill="#4B93E2" />
                    </BarChart>
                    <div>
                    <BarChart width={window.innerWidth*0.40} height={175} data={chartData2b}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis tickFormatter={DataFormater}>
                        <Label value="Daily cases/100K" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Bar dataKey="cases" fill="#000000"/>
                        <Bar dataKey="predicted cases" fill="#aaacab"/>
                    </BarChart>
                    </div>
                    <div className="bottom-legend">
                        <BsFillCircleFill style={{color: '#000000', margin: 8}} size={8}/>
                        <p>Measured case data</p>
                    </div>
                    <div className="bottom-legend">
                        <BsFillCircleFill style={{color: '#aaacab', margin: 8}} size={8}/>
                        <p>Predicted case data based on wastewater SARS-CoV-2 concentrations</p>
                    </div>
                </div>}
            </div>
            </div>
        </div>
    )
}

export default Reports; 