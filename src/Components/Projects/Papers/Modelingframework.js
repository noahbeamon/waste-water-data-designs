import React from 'react';
import "./Modelingframework.css"; 

const Modelingframework = () => {
    return(
        <div className="App">
            <div className="content-container">
                <strong style={{fontSize: 20}}>GEMFsim: a stochastic simulator for the generalized epidemic modeling framework</strong>
                <p>Published in Journal of computational science, 2017</p>
                <p>The recently proposed generalized epidemic modeling framework (GEMF) [1] lays the groundwork for systematically constructing a broad spectrum of stochastic spreading processes over complex networks. This article builds an algorithm for exact, continuous-time numerical simulation of GEMF-based processes. Moreover the implementation of this algorithm, GEMFsim, is available in popular scientific programming platforms such as MATLAB, R, Python, and C; GEMFsim facilitates simulating stochastic spreading models that fit in GEMF framework. Using these simulations one can examine the accuracy of mean-field-type approximations that are commonly used for analytical study of spreading processes on complex networks.</p>
                <a target="_blank" href="https://journals.aps.org/pre/pdf/10.1103/PhysRevE.95.012316">Download paper here</a>
                <a target="_blank" href="https://www.ece.k-state.edu/netse/software/index.html">Download software here</a>
                <p>GEMFsim algorithm:</p>
                <img className="paper-image-container-modeling1" src="https://www.hemanshakeri.com/images/GEMFcode.jpg"/>
                <p>GEMF is suitable fo hypothesis testing, e.g.,</p>
                <img className="paper-image-container-modeling2" src="https://www.hemanshakeri.com/images/GEMFcompetitive.jpg"/>
                <p>Fraction of nodes infected by virus type 2 (above) and virus type 1 (below) in the SI1SI2S  competitive spreading model. Infection strength of I_2, tau_2, was 5/lambda_1(B), while the infection strength of I1, tau1, varied. If 2/lambda_1(A) ..., viruses coexist; only one virus survives outside this region.</p>
            </div>
        </div>
    )
}

export default Modelingframework; 