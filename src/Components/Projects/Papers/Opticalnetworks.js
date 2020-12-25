import React from 'react';
import "./Opticalnetworks.css"; 

const Opticalnetworks = () => {
    return(
        <div className="App">
            <div className="content-container">
                <strong style={{fontSize: 20}}>A study of the robustness of optical networks under massive failures</strong>
                <p>Published in Optical Switching and Networking, 2019</p>
                <p>In this paper, we provide a comparative analysis of network robustness for different synthetic and real optical network topologies under various types of massive failures using the Girona Network Robustness Simulator (GNRS). We model massive failures as random, targeted, and epidemic, the later of which has not yet been considered in the context of robustness. Results indicate that, in addition to the presence of hub nodes, which are critical for targeted attacks, the network diameter limiting the distance between hubs plays an important role in network robustness under epidemic massive failures.</p>
                <a target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S1573427718300729">Download paper here</a>
                <img className="paper-image-container-optical" src="https://www.hemanshakeri.com/images/NetRobustEpid.jpg"/>
                <p>The transition graph for the epidemic model: node states are susceptible (S), level iattacker or infected node I(i), and recovered or removed node R; deltais the recovery rate and βi is the infection rate of a susceptible node by a level i infected neighbor.</p>
            </div>
        </div>
    )
}

export default Opticalnetworks ; 