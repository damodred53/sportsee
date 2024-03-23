import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from 'recharts';
import Services from "../../../Services/Services.jsx";

const ChartLine = () => {
  const [average, setAverage] = useState([]);
  const arrayDay = ["L", "M", "M", "J", "V", "S", "D"];



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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip_line">
          <p className="label">{`${payload[0].value}min`}</p>
          
        </div>
      );
    }
  

    return null;
  };

  // Mapper les données de sessions dans le format attendu par Recharts
  const chartData = average.map((item, index) => (
    {
    name: arrayDay[index], 
    durée: item.sessionLength /* `${item.sessionLength} min`*/ // Utilisez la longueur de la session comme valeur
  }));

  return (
    
    <div className='line_chart'>
      <p className='line_chart_legend'>Durée moyenne des <br/>sessions</p>
      <div className='line_chart_darkened'></div>
      <ResponsiveContainer width="100%" height="100%" margin={{top : 10}}>
      
        <LineChart
          width={500}
          height={300}
          data={chartData} // Utilisez les données mappées ici
          margin={{
            top: 75,
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
          
          <Tooltip stroke="red" content={CustomTooltip}/>
          <defs>    
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop  stopColor="rgba(255,255,255,1)" stopOpacity="0.6" /> {/* Gris (code RVB: 128,128,128) */}
                <stop offset="100%" stopColor="rgba(255,255,255,1)" stopOpacity="1" /> {/* Blanc (code RVB: 255,255,255) */}
            </linearGradient>
            </defs>

          <Line className='line_chart_line' type="monotone" dataKey="durée" stroke='black'  strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;

//stroke="url(#gradient)"