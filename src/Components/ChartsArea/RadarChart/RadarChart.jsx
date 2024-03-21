

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import Services from "../../../Services/Services.jsx";



const ChartRadar = () => {

    const [dataPerformance, setDataPerformance] = useState([]);
    const [dataKind, setDataKind] = useState([]);
    const subjects = ["Cardio", "Énergie", "Endurance", "Force", "Vitesse", "Intensité"];
    subjects.reverse()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await Services.getUserPerformance()
                
                setDataPerformance(response.sessions)
                setDataKind(response.kind)

            } catch(error) {
    
            }
        }
        
        fetchData()
    }, [])

    console.log("voici la response du radar chart: ", dataPerformance)
    console.log("voici la response du radar chart 2: ", dataKind)

    const chartDataPerformance = dataPerformance.map((item, index) => (
        {
          subject: subjects[index],
          fullMark: item.value
      }));



    return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartDataPerformance}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Performance" dataKey="fullMark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );

}

export default ChartRadar;

    
  

