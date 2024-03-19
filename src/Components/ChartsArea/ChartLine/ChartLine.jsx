import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Services from "../../../Services/Services.jsx";

const ChartLine = () => {
  const [average, setAverage] = useState([]);
  const arrayDay = ["L", "M", "M", "J", "V", "S", "D"];


  /*const renderLegend = () => {
    return (
        <p className='line_chart_legend'>Durée moyenne des sessions</p>
    )
  }*/


  useEffect(() => {
    const fetchAverageData = async () => {
      try {
        const response = await Services.getUserAverageSession();
        setAverage(response.sessions);
      } catch (error) {
        console.error('Erreur lors du chargement des données moyennes:', error);
      }
    };

    fetchAverageData();
  }, []);

  console.log("voici average:", average)

  

  // Mapper les données de sessions dans le format attendu par Recharts
  const chartData = average.map(item => ({
    name: arrayDay, // Utilisez le jour comme nom de la série
    durée: item.sessionLength/*`${} minutes`*/ // Utilisez la longueur de la session comme valeur
  }));

  return (
    <div className='line_chart'>
      <p className='line_chart_legend'>Durée moyenne des <br/>sessions</p>
      <ResponsiveContainer width="100%" height="100%" margin={{top : 10}}>
      
        <LineChart
          width={500}
          height={300}
          data={chartData} // Utilisez les données mappées ici
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            type="category"
            tickLine={true}
            stroke="red"
            padding={{right:5, left:5}}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.6}}
          />
          <Tooltip />
          <Line className='line_chart_line' type="monotone" dataKey="durée" stroke="white"  />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;
