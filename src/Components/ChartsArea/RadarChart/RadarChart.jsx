

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


    const chartDataPerformance = dataPerformance.map((item, index) => (
        {
          subject: subjects[index],
          fullMark: item.value
      }));



    return (
      <div className='radar'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart  cx="50%" cy="50%" outerRadius="70%" data={chartDataPerformance}>
           
            <PolarAngleAxis dataKey="subject" stroke="white" />
            <PolarGrid gridType="polygon" radialLines={false} stroke="white" />
            <Radar name="Performance" dataKey="fullMark"  fill="#FF0101" fillOpacity={0.7}  />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      );

}

export default ChartRadar;

    
  

