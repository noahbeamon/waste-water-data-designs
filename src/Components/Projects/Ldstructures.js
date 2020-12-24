import React from 'react';

const Ldstructures = () => {
    return(
        <div className="App">
            <div className = "">
                <strong>Inference of low-dimensional structures in data</strong>
                <p>Finding associations between risk factors and morbidity patterns in biomedical data are of essential interest in healthcare analytics. The current state of the art methods using a descriptive analysis, are looking into the frequency of occurances and thus are prone to errors in detecting the patterns and can be blunt in separating different trends, such as temporal changes. We are considering these issues by first inferring the underlying patterns using powerful statistical methods that can be validated while having enough resolution to avoid errors.</p>
                <strong>Comorbidity patterns in health data</strong>
                <p>Chronic health conditions often arise from (or are followed by) multiple other complications. We study the associations among various health conditions by showing that the underlying network can be modeled using an Ising distribution. This is a concept borrowed from physics, known as binary Markov fields, that allowed us to reconstruct the network using multiple logistic regressions with penalties on the model complexity represented by the number of edges. Various benchmarks testify to the advantages of our proposed method compared to the state of the art methods in association analysis, such as frequency itemsets. Our method achieved higher accuracy in retrieving the underlying structures and enabling users to do statistical testing.</p>
                <strong>Temporal patterns in the bacterial resistance spread</strong>
                <p>Antimicrobial resistance expansion is a major threat to public health. Bacterial susceptibility to a drug is measured by the minimum inhibitory concentration (MIC) that prevents the bacterial growth. Numerous challenges involve the analysis of MIC data such as nonnormality, skewness, and the censored nature of the data. We study the temporal patterns of co-susceptibility (CDS) in different bacteria against a panel of antimicrobial agents and prove the slow and fast changes of multi-drug resistance in E. coli and Salmonella non-typhi species. Our analysis involves novel approaches toward the problem, including two sample testing of CDS patterns and robust clustering of groups of drugs with similar susceptibility behavior.</p>
            </div>
        </div>
    )
}

export default Ldstructures ; 