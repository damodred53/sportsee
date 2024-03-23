

import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Services from "../../../Services/Services.jsx";
import {useEffect, useState} from 'react';

const BarCharts = () => {

    const [activity, setActivity] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            const response = await Services.getUserActivity()
             if (response) {
                
                setActivity(response.sessions)
             }
        }

        fetchData()
    }, [])

    console.log('les données venant de activity', activity)

    const mappedActivity = activity.map((item, index) => ({
        name : index+1,
        uv : item.kilogram,
        pv : item.calories
    }));

   

      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value}kg`}</p>
              <p className="label">{`${payload[1].value}Kcal`}</p>
            </div>
          );
        }
      

        return null;
      };

      const StyleLegend = {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
      };


      
      
      
      
          return (
            <div className='barchart'>
                <ResponsiveContainer className="barchart_main" width="100%" height="100%" margin={{top : 5}}>
                    <text className='barchart_title' cx={20} cy={20}>Activité quotidienne</text>
                    
                <BarChart
                    width={100}
                    height={350}
                    data={mappedActivity}
                    margin={{
                    top: 75,
                    right: 50,
                    left: 50,
                    bottom: 0
                    }}
                    barGap={10}
                >
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis  dataKey="name"  scale='point' padding={{top:10}} />
                    
                    <Legend className='barchart_legend' iconSize={10} iconType='circle' wrapperStyle={StyleLegend}  payload={[{
                        value: 'Poids (kg)',
                        type: 'circle',
                        color: 'black'
                        },
                        {
                        value: 'Calories brûlées (kCal)',
                        type: 'circle',
                        color: 'red',
                    }]}
                    />
                    
                    <Bar dataKey="pv" barSize={7} className='barchart_bar' radius={[10, 10, 0, 0]} fill="black" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" barSize={7} className='barchart_bar' radius={[10, 10, 0, 0]} fill="red" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    
                </BarChart>
                
                </ResponsiveContainer>
            </div>
          );
      

}
export default BarCharts;
