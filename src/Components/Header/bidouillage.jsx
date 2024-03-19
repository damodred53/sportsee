/*const fetchData = async () => {
    try {
      const result = await Test();

      console.log(result)
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  fetchData();

  const fetchData2 = async () => {
      try {
        const result = await Test2();

        console.log(result)
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData2();*/

    /*if (MockedDataUser && MockedDataUser != null) {
            const result = MockedDataUser.USER_MAIN_DATA
            console.log("Voici les données mockés : ", result)
        } else {
            const result = await Services.getFirstUser()
            console.log( result)
        }*/

        /*export default class ChartLine extends PureComponent {
          static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
        
        
        
        
          render() {
            return (
                <div className='line_chart'>
                <h1 className='line_chart_title'>Durée moyenne</h1>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={this.props.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  
                  <Tooltip />
                  <Legend />
                  
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
              </div>
            );
          }
        }*/











        import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from 'recharts';
import Services from "../../../Services/Services.jsx";

const ChartLine = () => {
  const [average, setAverage] = useState([]);
  const arrayDay = ["L", "M", "M", "J", "V", "S", "D"];
  const test = "prout"

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
  /*const chartData = average.map(item => ({
    name: arrayDay, // Utilisez le jour comme nom de la série
    duree: item.sessionLength /*`${item.sessionLength} minutes`*/ // Utilisez la longueur de la session comme valeur
 /* }));

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
          <Line className='line_chart_line' type="monotone" dataKey="duree" stroke="white"  />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;

//

// <Tooltip content={chartData.durée}/>

 
/*<defs>    
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop  stopColor="rgba(255,255,255,1)" stopOpacity="0.6" /> 
                    <stop offset="100%" stopColor="rgba(255,255,255,1)" stopOpacity="1" /> 
                </linearGradient>
            </defs>*/