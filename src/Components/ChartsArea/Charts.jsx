import React from "react";
import ChartLine from "./ChartLine/ChartLine";
import ChartRadar from "./RadarChart/RadarChart";
import RadialChart from "./RadialBarChart/RadialBarChart.jsx";
import BarChart from "./BarChart/BarChart.jsx";

const Charts = (data) => {

    console.log("données envoyés dans le composant charts", data)

    return (
        <div className="chart">
            
                <BarChart />
                <ChartLine />
                <ChartRadar />
                <RadialChart />
                
        </div>
    )
}

export default Charts;