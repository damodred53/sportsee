import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Cell } from 'recharts';
import Services from "../../../Services/Services.jsx";

const RadialChart = () => {
    const [score, setScore] = useState([]);

    const dataValue = 360 * score;
    const scoreToShow = score * 100;

    useEffect(() => {
        const fetchDataScore = async () => {
            const response = await Services.getUser();
            setScore(response.score);
        }
        fetchDataScore();
    }, []);

    
    console.log("voici la réponse du score : ", scoreToShow);

    const style = {
        background: '#fff',
        fill: 'red',
      }

    return (
        <div className='radial'>
            <ResponsiveContainer>
                <RadialBarChart
                className='third'
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="75%"
                barSize={10}
                startAngle={-180}
                endAngle={-180 + -dataValue}
                data={[{value:scoreToShow}]}
                
                >
                <text x="10%" y="15%" fontSize={14} fontWeight={500}>
                    Score
                </text>
                <text textAnchor="middle" fontSize={15} fontWeight={500}>
                    <tspan x="50%" y="50%" fontSize={22}>
                    {`${scoreToShow}%`}
                    </tspan>
                    <tspan x="50%" y="65.5%" fill={'#74798c'}>
                    de votre
                    </tspan>
                    <tspan x="50%" y="77%" fill={'#74798c'}>
                    objectif
                    </tspan>
                </text>
                <RadialBar
                        background
                        dataKey="value"
                        fill="#FF0000"
                        minAngle={15}
                        clockWise={true}
                        strokeLinecap="round"
                      
                    />
            </RadialBarChart>
      </ResponsiveContainer>
        </div>
    );
}

export default RadialChart;
