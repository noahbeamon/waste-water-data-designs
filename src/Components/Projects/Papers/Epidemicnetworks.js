import React from 'react';
import "./Epidemicnetworks.css"; 

const Epidemicnetworks = () => {
    return(
        <div className="App">
            <div className="content-container">
                <strong style={{fontSize: 20}}>Optimal information dissemination strategy to promote preventive behaviors in multilayer epidemic networks</strong>
                <p>Published in Mathematical Biosciences and Engineering, 2015</p>
                <p>Launching a prevention campaign to contain the spread of infection requires substantial financial investments; therefore, a trade-off exists between suppressing the epidemic and containing costs. Information exchange among individuals can occur as physical contacts (eg, word of mouth, gatherings), which provide inherent possibilities of disease transmission, and non-physical contacts (eg, email, social networks), through which information can be transmitted but the infection cannot be transmitted. Contact network (CN) incorporates physical contacts, and the information dissemination network (IDN) represents non-physical contacts, thereby generating a multilayer network structure. Inherent differences between these two layers cause alerting through CN to be more effective but more expensive than IDN. The constraint for an epidemic to die out derived from a nonlinear Perron-Frobenius problem that was transformed into a semi-definite matrix inequality and served as a constraint for a convex optimization problem. This method guarantees a dying-out epidemic by choosing the best nodes for adopting preventive behaviors with minimum monetary resources. Various numerical simulations with network models and a real-world social network validate our method.</p>
                <a target="_blank" href="https://www.researchgate.net/publication/272397572_Optimal_information_dissemination_strategy_to_promote_preventive_behaviors_in_multilayer_epidemic_networks">Download paper here</a>
                <img className="paper-image-container-epidemic" src="https://www.hemanshakeri.com/images/MSDP1.png"/>
                <p>FIG. 1. From top to botton, (a) Compartmental transition graph according to the SAIS model with information dissemination. Y_i and Z_i are the number of infected neighbors of agent i in contact network and information dissemination network, respectively; (b) Multilayer contact topology.</p>
            </div>
        </div>
    )
}

export default Epidemicnetworks ; 