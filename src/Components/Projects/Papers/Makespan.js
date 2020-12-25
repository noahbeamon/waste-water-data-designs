import React from 'react';
import "./Makespan.css"; 

const Makespan = () => {
    return(
        <div className="App">
            <div className="content-container">
                <strong style={{fontSize: 20}}>Minimizing order picking makespan with multiple pickers in a wave picking warehouse</strong>
                <p>Published in International Journal of Production Economics, 2018</p>
                <p>In this paper, order assignment, order batching and picker routing problems with multiple pickers in a wave picking warehouse of a major US third party logistics company is studied and modeled mathematically. The proposed mathematical model is solved using an exact algorithm. Since the exact algorithm suffers from long CPU time, a Lagrangian decomposition heuristic combined with particle swarm optimization (LD-PSO) algorithm is proposed, which performs well for small size waves. To solve large-scale problems, a hybrid parallel simulated annealing and ant colony optimization (PSA-ACO) is presented. The proposed methods are tested using the warehouse data. The results are compared against the minimum makespan impact (MMI) heuristic that is currently being used in the warehouse and a state-of-the-art variable neighborhood descent (VND). While PSA-ACO slightly outperforms VND, for picking large waves, PSA-ACO and VND can improve the makespan by approximately 7.8% and 6.9% over MMI respectively. Numerical experiments show that increasing number of pickers and picking capacity has a greater impact on reducing makespan when the ratio of orders to number of pickers or picking capacity is high.</p>
                <a target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S0925527318304146">Download paper here</a>
                <img className="paper-image-container-makespan" src="https://www.hemanshakeri.com/images/OrderSpan.jpg"/>
                <p>Minimizing tardiness vs makespan and workload balance.</p>
            </div>
        </div>
    )
}

export default Makespan ; 