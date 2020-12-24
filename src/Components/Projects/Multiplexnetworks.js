import React from 'react';

const Multiplexnetworks = () => {
    return(
        <div className="App">
            <div className="">
                <strong>Spectral Design of Multiplex Networks</strong>
                <p>Building interconnections between different networks requires a rigorous study of the resultant multiplex network. Prescribing the interconnection links to optimize the extremal behavior of the whole (e.g. by means of eigen-properties of the Laplacian matrices) is a natural problem connected to network vulnerability or rate of synchronization on networks. The second eigenvalue, or algebraic connectivity, of the Laplacian matrix represents such properties as robustness against targeted attacks or random errors, and the speed of convergence of a Markov process. Optimal design of the inter-layer links to maximize the algebraic connectivity of the multiplex with attention to existing budget constraints, is crucial to obtaining a well-connected multilayer structure. We proved that there is no need to solve the optimization problem when the available budget is less than a certain threshold–which can be found analytically. This conclusion rules out the possibility of designing any acceptable heuristic method to find optimal edge weights. Our findings were published as a rapid communication 1 and backed up by later results in research on neuronal oscillations in different regions of the brain. These projects indicate avenues to further develop research in graph theory and analyzing extremal spectral properties to answer many remaining questions 2.</p>
                <img src="https://www.hemanshakeri.com/images/algConnPRE.png"/>
            </div>
        </div>
    )
}

export default Multiplexnetworks ; 