import React, { useState, useRef, useCallback } from 'react';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapGL, {NavigationControl, Marker, Popup, Layer, Source} from "react-map-gl";
import { BsFillCircleFill, BsFillBarChartFill } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
import Data from './Data.json';
// import Data2 from './Data2.json';
import './Reports.css';
import { BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Line, Label } from "recharts"; 
import { chartData1a, chartData1b, chartData2a, chartData2b } from "./ChartData.js"; 
import Switch from "react-switch";

const Reports = () => {
    const [viewport, setViewport] = useState({
        latitude: 38.031479,
        longitude: -78.481272,
        width: window.innerWidth*0.50, //50vw
        height: "600px", 
        zoom: 13,
    });

    const mapRef = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
          const geocoderDefaultOverrides = { transitionDuration: 1000 };
     
          return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides
          });
        },
        []
      );

    const [showPopup, setShowPopup] = useState(null);
    
    let activeColor = 'rgba(57, 184, 120, 0.8)'; 
    let inactiveColor = 'rgba(255, 0, 0, 0.5)'; 
    let activeRegionColor = 'rgba(0, 0, 0, 1)';
    let inactiveRegionColor = 'rgba(0, 0, 0, 0.3)';

    const [iconColor, setIconColor] = useState(inactiveColor);
    const [iconColor1, setIconColor1] = useState(inactiveColor);

    const [regionLineColor, setRegionLineColor] = useState(inactiveRegionColor)

    const [showChart, setShowChart] = useState(null);

    const DataFormaterX = (date) => {
        return date.split(",")[0]; 
    }

    const DataFormaterY = (number) => {
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

      const [checked, setChecked] = useState(true); 

    return(
        <div className="App">
            <h1 style={{padding: 20}}><strong>Data Reports</strong></h1>
            <p style={{padding: 0}}>Click a location on the map below to view its data report, or scroll down to see all the charts.</p>
            <div className="map-chart-container">
            <div>
                <MapGL
                className="map-view-container"
                    ref={mapRef}
                    {...viewport}
                    onViewportChange={handleViewportChange}
                    mapStyle = "mapbox://styles/noahb20/ckigtszgw173519qy1c0t05va"
                    mapboxApiAccessToken = "pk.eyJ1Ijoibm9haGIyMCIsImEiOiJja2lkb2RlaGMwNGR4Mnhxd21sbWxyeWVnIn0.SLuqIEAYEE2gY0ZNw5ySHA"
                >
                    <div style={{position: 'absolute', right: 10, top: 10}}>
                    <NavigationControl />
                    </div>
                    <Geocoder
                    mapRef={mapRef}
                    onViewportChange={handleGeocoderViewportChange}
                    mapboxApiAccessToken="pk.eyJ1Ijoibm9haGIyMCIsImEiOiJja2lkb2RlaGMwNGR4Mnhxd21sbWxyeWVnIn0.SLuqIEAYEE2gY0ZNw5ySHA"
                    position="top-left"
                    />
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
                {showPopup === 0 && 
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
                {showPopup === 1 && 
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
                </MapGL>
            </div>
            <div>
                {((showChart == null || showChart === 0) && checked) &&
                <div className="chart-view-container">
                    <strong style={{fontSize: 20}}>Test Location #1</strong>
                    <p style={{color: 'gray'}}>The Test Location #1 serves # people.</p>
                    <p style={{color: 'gray'}}>Areas served: Test Location #1,...</p>  
                    <BarChart width={window.innerWidth*0.40} height={175} data={chartData1a} style={{marginBottom: 20}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                        <YAxis tickFormatter={DataFormaterY}>
                            <Label value="RNA (copies/mL)" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Bar dataKey="copies/mL" fill="#4B93E2" />
                    </BarChart>
                    <div>
                    <BarChart width={window.innerWidth*0.40} height={175} data={chartData1b}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                        <YAxis tickFormatter={DataFormaterY}>
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
                {((showChart == null || showChart === 0) && !checked) &&
                <div className="chart-view-container">
                    <strong style={{fontSize: 20}}>Test Location #1</strong>
                    <p style={{color: 'gray'}}>The Test Location #1 serves # people.</p>
                    <p style={{color: 'gray'}}>Areas served: Test Location #1,...</p>  
                    <LineChart width={window.innerWidth*0.40} height={175} data={chartData1a} style={{marginBottom: 20}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                        <YAxis tickFormatter={DataFormaterY}>
                            <Label value="RNA (copies/mL)" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Line dataKey="copies/mL" stroke="#4B93E2" dot={false}/>
                    </LineChart>
                    <div>
                    <LineChart width={window.innerWidth*0.40} height={175} data={chartData1b}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                        <YAxis tickFormatter={DataFormaterY}>
                        <Label value="Daily cases/100K" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Line dataKey="cases" stroke="#000000" dot={false}/>
                        <Line dataKey="predicted cases" stroke="#aaacab" dot={false}/>
                    </LineChart>
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
                {(showChart === 1 && checked) &&
                <div className="chart-view-container">
                    <strong style={{fontSize: 20}}>Test Location #2</strong>
                    <p style={{color: 'gray'}}>The Test Location #2 serves # people.</p>
                    <p style={{color: 'gray'}}>Areas served: Test Location #2,...</p>  
                    <BarChart width={window.innerWidth*0.40} height={175} data={chartData2a} style={{marginBottom: 20}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                        <YAxis tickFormatter={DataFormaterY}>
                            <Label value="RNA (copies/mL)" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Bar dataKey="copies/mL" fill="#4B93E2" />
                    </BarChart>
                    <div>
                    <BarChart width={window.innerWidth*0.40} height={175} data={chartData2b}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                        <YAxis tickFormatter={DataFormaterY}>
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
                {(showChart === 1 && !checked) &&
                <div className="chart-view-container">
                    <strong style={{fontSize: 20}}>Test Location #2</strong>
                    <p style={{color: 'gray'}}>The Test Location #2 serves # people.</p>
                    <p style={{color: 'gray'}}>Areas served: Test Location #2,...</p>  
                    <LineChart width={window.innerWidth*0.40} height={175} data={chartData2a} style={{marginBottom: 20}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                        <YAxis tickFormatter={DataFormaterY}>
                            <Label value="RNA (copies/mL)" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Line dataKey="copies/mL" stroke="#4B93E2" dot={false}/>
                    </LineChart>
                    <div>
                    <LineChart width={window.innerWidth*0.40} height={175} data={chartData2b}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                        <YAxis tickFormatter={DataFormaterY}>
                        <Label value="Daily cases/100K" position="insideBottomLeft" offset={10} angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        <Line dataKey="cases" stroke="#000000" dot={false}/>
                        <Line dataKey="predicted cases" stroke="#aaacab" dot={false}/>
                    </LineChart>
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
            
            {checked && <div className="bottom-chart-view-container">
                <strong style={{fontSize: 20}}>Wastewater SARS-CoV-2 Data</strong>
                <div className="chart-row">
                    <div className="chart-box">
                        <p>Test Location #1</p>
                        <BarChart width={window.innerWidth*0.20} height={175} data={chartData1a} style={{marginBottom: 20}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                            <YAxis tickFormatter={DataFormaterY}>
                                <Label value="RNA (copies/mL)" position="insideBottomLeft" offset={10} angle={-90}/>
                            </YAxis>
                            <Tooltip />
                            <Bar dataKey="copies/mL" fill="#4B93E2" />
                        </BarChart>
                    </div>
                    <div className="chart-box">
                        <p>Test Location #2</p>
                        <BarChart width={window.innerWidth*0.20} height={175} data={chartData2a} style={{marginBottom: 20}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                            <YAxis tickFormatter={DataFormaterY}>
                            </YAxis>
                            <Tooltip />
                            <Bar dataKey="copies/mL" fill="#4B93E2" />
                        </BarChart>
                    </div>
                </div>
                <strong style={{fontSize: 20}}>Case Data</strong>
                <p style={{color: 'gray'}}>By date of specimen collection</p>
                <div className="chart-row">
                    <div className="chart-box">
                        <p>Test Location #1</p>
                        <BarChart width={window.innerWidth*0.20} height={175} data={chartData1b}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                            <YAxis tickFormatter={DataFormaterY}>
                            <Label value="Daily cases/100K" position="insideBottomLeft" offset={10} angle={-90}/>
                            </YAxis>
                            <Tooltip />
                            <Bar dataKey="cases" fill="#000000"/>
                            <Bar dataKey="predicted cases" fill="#aaacab"/>
                        </BarChart>
                    </div>
                    <div className="chart-box">
                        <p>Test Location #2</p>
                        <BarChart width={window.innerWidth*0.20} height={175} data={chartData2b}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                            <YAxis tickFormatter={DataFormaterY}>
                            {/* <Label value="Daily cases/100K" position="insideBottomLeft" offset={10} angle={-90}/> */}
                            </YAxis>
                            <Tooltip />
                            <Bar dataKey="cases" fill="#000000"/>
                            <Bar dataKey="predicted cases" fill="#aaacab"/>
                        </BarChart>
                    </div>
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

            {!checked && <div className="bottom-chart-view-container">
                <strong style={{fontSize: 20}}>Wastewater SARS-CoV-2 Data</strong>
                <div className="chart-row">
                    <div className="chart-box">
                        <p>Test Location #1</p>
                        <LineChart width={window.innerWidth*0.20} height={175} data={chartData1a} style={{marginBottom: 20}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                            <YAxis tickFormatter={DataFormaterY}>
                                <Label value="RNA (copies/mL)" position="insideBottomLeft" offset={10} angle={-90}/>
                            </YAxis>
                            <Tooltip />
                            <Line dataKey="copies/mL" stroke="#4B93E2" dot={false}/>
                        </LineChart>
                    </div>
                    <div className="chart-box">
                        <p>Test Location #2</p>
                        <LineChart width={window.innerWidth*0.20} height={175} data={chartData2a} style={{marginBottom: 20}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                            <YAxis tickFormatter={DataFormaterY}>
                            </YAxis>
                            <Tooltip />
                            <Line dataKey="copies/mL" stroke="#4B93E2" dot={false}/>
                        </LineChart>
                    </div>
                </div>
                <strong style={{fontSize: 20}}>Case Data</strong>
                <p style={{color: 'gray'}}>By date of specimen collection</p>
                <div className="chart-row">
                    <div className="chart-box">
                        <p>Test Location #1</p>
                        <LineChart width={window.innerWidth*0.20} height={175} data={chartData1b}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                            <YAxis tickFormatter={DataFormaterY}>
                            <Label value="Daily cases/100K" position="insideBottomLeft" offset={10} angle={-90}/>
                            </YAxis>
                            <Tooltip />
                            <Line dataKey="cases" stroke="#000000" dot={false}/>
                            <Line dataKey="predicted cases" stroke="#aaacab" dot={false}/>
                        </LineChart>
                    </div>
                    <div className="chart-box">
                        <p>Test Location #2</p>
                        <LineChart width={window.innerWidth*0.20} height={175} data={chartData2b}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickFormatter={DataFormaterX}/>
                            <YAxis tickFormatter={DataFormaterY}>
                            </YAxis>
                            <Tooltip />
                            <Line dataKey="cases" stroke="#000000" dot={false}/>
                            <Line dataKey="predicted cases" stroke="#aaacab" dot={false}/>
                        </LineChart>
                    </div>
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

            <div className="toggle-button">
                <BiLineChart size={20} style={{marginRight: 10, marginTop: 5}}/>
                <label>
                    <Switch onChange={() => setChecked(!checked)} checked={checked} checkedIcon={false} uncheckedIcon={false} onColor="#c0c4c2" offColor="#c0c4c2"/>
                </label>
                <BsFillBarChartFill size={20} style={{marginLeft: 10, marginTop: 5}}/>
            </div>
        </div>
    )
}

export default Reports; 