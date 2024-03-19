import React from "react";
import ChartLine from "./ChartLine/ChartLine";

const Charts = (data) => {

    console.log("données envoyés dans le composant charts", data)

    return (
        <div className="chart">
            
                <ChartLine />
            
        </div>
    )
}

export default Charts;