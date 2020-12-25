import React from 'react';
import "./Cyclicstructure.css"; 

const Cyclicstructure = () => {
    return(
        <div className="App">
            <div className="content-container">
                <strong style={{fontSize: 20}}>A new method for quantifying network cyclic structure to improve community detection</strong>
                <p>Published in arxiv, 2019</p>
                <p>A distinguishing property of communities in networks is that cycles are more prevalent within communities than across communities. Thus, the detection of these communities may be aided through the incorporation of measures of the local ”rich- ness” of the cyclic structure. In this paper, we introduce renewal non-backtracking random walks (RNBRW) as a way of quantifying this structure. RNBRW gives a weight to each edge equal to the probability that a non-backtracking random walk completes a cycle with that edge. Hence, edges with larger weights may be thought of as more important to the formation of cycles. Of note, since separate random walks can be performed in parallel, RNBRW weights can be estimated very quickly, even for large graphs. We give simulation results showing that pre-weighting edges through RNBRW may substantially improve the performance of common community detection algorithms. Our results suggest that RNBRW is especially efficient for the challenging case of detecting communities in sparse graphs.</p>
                <a target="_blank" href="https://arxiv.org/abs/1910.01921">Download paper here</a>
                <img className="paper-image-container-cyclic" src="https://www.hemanshakeri.com/images/RNBRW_w.png"/>
                <p>(a) An LFR benchmark graph. (b) The same graph weighted by RNBRW. Observe that within-community edges have larger weights than across-community edges.</p>
            </div>
        </div>
    )
}

export default Cyclicstructure; 