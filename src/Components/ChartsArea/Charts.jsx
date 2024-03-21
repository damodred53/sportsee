import React from "react";
import ChartLine from "./ChartLine/ChartLine";
import ChartRadar from "./RadarChart/RadarChart";

const Charts = (data) => {

    console.log("données envoyés dans le composant charts", data)

    return (
        <div className="chart">
            
                <ChartLine />
                <ChartRadar />
        </div>
    )
}

export default Charts;