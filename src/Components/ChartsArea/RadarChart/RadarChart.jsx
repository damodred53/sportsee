import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import Services from "../../../Services/Services.jsx";

const ChartRadar = () => {

    const [dataPerformance, setDataPerformance] = useState([]);
    const subjects = ["Cardio", "Énergie", "Endurance", "Force", "Vitesse", "Intensité"];
    subjects.reverse()

    /**
     * Hook permettant d'appeler la fonction getUserPerformance lors du premier render
     * puis de mettre le contenu dans un useState qui est à l'origine un tableau vide.
     */

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await Services.getUserPerformance()
                setDataPerformance(response.sessions)
            } catch(error) {
              console.log("impossible d'afficher les données : ", error)
            }
        }
        fetchData()
    }, [])

  /**
   * fonction permettant de mapper les données contenues dans le hook useState afin 
   * de les intégrer dans le graphique ensuite
   */

    const chartDataPerformance = dataPerformance.map((item, index) => (
        {
          subject: subjects[index],
          fullMark: item.value
      }));

    return (
      <div className='radar'>
        <ResponsiveContainer  width="100%" height="100%">
          <RadarChart className="responsive_radar"  cx="50%" cy="50%" outerRadius="60%" fill={'#282D30'}  data={chartDataPerformance}>
           
            <PolarAngleAxis className="radar_polar_axis" dataKey="subject"  stroke="white" tickLine={false} />
            <PolarGrid gridType="polygon" radialLines={false} stroke="white"  />
            <Radar name="Performance" dataKey="fullMark"   fill="#FF0101" fillOpacity={0.7}  />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      );

}

export default ChartRadar;

    
  

