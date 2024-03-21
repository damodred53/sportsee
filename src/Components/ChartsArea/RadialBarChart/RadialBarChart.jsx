import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Cell } from 'recharts';
import Services from "../../../Services/Services.jsx";

const RadialChart = () => {
    const [score, setScore] = useState([]);

    useEffect(() => {
        const fetchDataScore = async () => {
            const response = await Services.getUser();
            setScore(response.score);
        }
        fetchDataScore();
    }, []);

    const scoreToShow = score * 100;
    console.log("voici la réponse du score : ", scoreToShow);

    const data = [
        {
            name: "Score",
            uv: scoreToShow,            
        },
        {
            name: "test",
            uv: 100,
            width : 0
        }
    ];

    const chartDataScore = data.map((item, index) => ({
        name: "Score"[index],
        uv: item.uv
    }));
    
    // Mapper les données de chartDataScore dans les composantes RadialBar
    const radialBars = chartDataScore.map((item, index) => (
        <RadialBar
            key={index}
            minAngle={15}
            background
            clockWise
            dataKey="uv"
            barSize={170}
            fill='white'
            className='second'
            
        />
    ));

    return (
        <div className='radial'>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" barSize={10} data={chartDataScore} startAngle={90} endAngle={450}>
                    {radialBars}
                    <Legend iconSize={0} layout="vertical" verticalAlign="middle" />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadialChart;
