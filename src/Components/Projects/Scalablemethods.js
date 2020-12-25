import React from 'react';

const Scalablemethods = () => {
    return(
        <div className="App">
            <div className="content-container">
                <strong style={{fontSize: 20}}>Scalable methods for machine learning and graph algorithms</strong>
                <p>The availability of high-performance computation resources is allowing us to revisit the existing algorithms and improve them. For example, we have introduced an alternate method for minimizing edge usage in cyclic structures by employing swarms of renewal non-backtracking random walkers on networks that run in parallel and can explore large networks and improve community detection algorithms <a href="/Moreprojects/Cyclicstructure">[1]</a>. These methods enable us to use recent developments in deep learning and high-dimensional data analysis.

Finding the shortest cycle, or girth, in weighted graphs is a fundamental problem in network flow and supply chain. Algorithmically, this is in general not as efficient as finding shortest paths. We develop a method to find girth efficiently by using the Dijkstra’s algorithm to find a composite distance from a given node to the family of all cycles sequentially. We proved that our algorithm reduces the worst case complexity of the known combinatorial algorithms substantially.

GEMFsim that is an exact stochastic continuous time simulator for the generalized epidemic modeling framework <a href="/Moreprojects/Modelingframework">[2]</a>–in MATLAB, C, R, and Python platforms.
I also assisted in developing a simulation tool for assessing the behavior of cybersecurity networks in multiple-failure scenarios <a href="/Moreprojects/Opticalnetworks">[3]</a>.</p>
            </div>
        </div>
    )
}

export default Scalablemethods; 