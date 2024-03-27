import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Services from "../../../Services/Services.jsx";

const RadialChart = () => {
    const [score, setScore] = useState([]);

    // constante permettant de calculer l'angle de score de la radiale
    const dataValue = 360 * score;

    // résultat multiplié par 100 afin d'afficher un résultat en pourcentage
    const scoreToShow = score * 100;

    /**
     * Hook permettant d'appeler la fonction getUserPerformance lors du premier render
     * puis de mettre le contenu dans un useState qui est à l'origine un tableau vide.
     */

    useEffect(() => {
        const fetchDataScore = async () => {
            const response = await Services.getUser();
            setScore(response.score);
        }
        fetchDataScore();
    }, []);

    return (
        <div className='radial'>
            <ResponsiveContainer>
                <RadialBarChart
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
