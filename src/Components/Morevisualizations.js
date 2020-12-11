import React, { useState } from 'react';
import TableauReport from 'tableau-react';

const Morevisualizations = () => {
    return(
        <div className="App">
            <h1 style={{padding: 20}}><strong>More Visualizations</strong></h1>
            <p>Project data is provided in the Tableau project below.</p>
            <body style={{padding: 20}}>
                <TableauReport url="https://public.tableau.com/shared/WG32P77P8?:display_count=y&:origin=viz_share_link" />
            </body>
        </div>
    )
}

export default Morevisualizations; 