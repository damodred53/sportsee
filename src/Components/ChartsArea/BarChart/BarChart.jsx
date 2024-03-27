import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Services from "../../../Services/Services.jsx";
import {useEffect, useState} from 'react';

const BarCharts = () => {

    const [activity, setActivity] = useState([])

    /**
     * Hook permettant d'appeler la fonction getUserACtivity lors du premier render
     * puis de mettre le contenu dans un useState qui est à l'origine un tableau vide.
     */

    useEffect(() => {
        const fetchData = async () => {
            const response = await Services.getUserActivity()
             if (response) { 
                setActivity(response.sessions)
             }
        }
        fetchData()
    }, [])


  /**
   * Fonction permettant de mapper le poids et les calories afin de les intégrer dans le graphique 
   */

    const mappedActivity = activity.map((item, index) => ({
        name : index+1,
        kilogram : item.kilogram,
        calories : item.calories
    }));

   /**
    * Fonction permettant d'afficher et de remplir l'infobulle
    * @param {*} param0 
    * @returns React.JSX.Element
    */

      const CustomTooltip = ({ active, payload}) => {
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
        top: '-2.8rem',
        right: '1rem',
      };

      return (
            <article className="barchart">
          <h2 className="barchart_title">Activité quotidienne</h2>
          <ResponsiveContainer width="100%" height="100%" className="barchart_container">
            <BarChart
              className="barchart_container_main"
              data={mappedActivity}
              margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
              title="Activité quotidienne"
            >
              <CartesianGrid vertical={false} strokeDasharray="2 2" />
              <XAxis
                dataKey="name"
                tickLine={false}
                tick={{ fontSize: 14}}
                dy={15}
                stroke="1 1"
                color='red'
              />
              <YAxis
                yAxisId="kilogram"
                dataKey="kilogram"
                type="number"
                domain={['dataMin - 2', 'dataMax + 1']}
                tickCount="4"
                axisLine={false}
                orientation="right"
                tickLine={false}
                tick={{ fontSize: 14 }}
                dx={15}
              />
              <YAxis
                yAxisId="calories"
                dataKey="calories"
                type="number"
                domain={['dataMin - 20', 'dataMax + 10']}
                hide
              />
              <Tooltip className="tooltype" cursor={{ fill: 'rgba(128, 128, 128, 0.4)' }} content={<CustomTooltip />} />
              <Legend className='barchart_container_main_legend' iconSize={10} iconType='circle' wrapperStyle={StyleLegend}  payload={[{
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
              <Bar
                yAxisId="kilogram"
                dataKey="kilogram"
                fill="#282d30"
                barSize={7}
                radius={[3, 3, 0, 0]}
              />
              <Bar
                yAxisId="calories"
                dataKey="calories"
                fill="#ff0000"
                barSize={7}
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
    </article>
          );
      

}
export default BarCharts;
