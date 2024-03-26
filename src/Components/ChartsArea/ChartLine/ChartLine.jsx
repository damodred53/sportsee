import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from 'recharts';
import Services from "../../../Services/Services.jsx";

const ChartLine = () => {
  const [average, setAverage] = useState([]);
  const arrayDay = ["L", "M", "M", "J", "V", "S", "D"];

 /**
     * Hook permettant d'appeler la fonction getUserAverageSession lors du premier render
     * puis de mettre le contenu dans un useState qui est à l'origine un tableau vide.
     */

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

  /**
    * Fonction permettant d'afficher et de remplir l'infobulle
    * @param {*} param0 
    * @returns React.JSX.Element
    */

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip_line">
          <p className="label">{`${payload[0].value} min`}</p>
          
        </div>
      );
    }
    return null;
  };

/**
 * fonction permettant de mapper les données contenues dans le hook useState afin 
 * de les intégrer dans le graphique ensuite
 */
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
          data={chartData} 
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
          <defs>    
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop  stopColor="rgba(255,255,255,1)" stopOpacity="0.6" /> 
                <stop offset="100%" stopColor="rgba(255,255,255,1)" stopOpacity="1" /> 
            </linearGradient>
          </defs>
          <Tooltip stroke="white" content={CustomTooltip}/>
          <Line className='line_chart_line' type="monotone" dataKey="durée" stroke="url(#gradient)" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;
