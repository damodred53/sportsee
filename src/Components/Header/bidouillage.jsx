
/*<RadialBar
                    minAngle={15}
                    
                    background
                    clockWise
                    dataKey="uv"
                    barSize={170}
                    fill='white'
                    className='first'
                    
                    />

<RadialBar
						dataKey="uv"
						barSize={15}
						cornerRadius={100}
						fill="red"
                        className='first'
                        
					/>


import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { pageData, pageDataWithFillColor } from '../../data';
import { Tooltip, RadialBar, RadialBarChart, ResponsiveContainer, Cell, Legend, RadialBarProps } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';
import { ActiveShapeProps } from '../props/ActiveShapeProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
    ...ActiveShapeProps,
  },
  component: RadialBarChart,
};

export const Simple: Meta<RadialBarProps> = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={data}>
          <RadialBar dataKey="uv" activeShape={args.activeShape} activeIndex={args.activeIndex} />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },
};

export const WithCustomizedClickLegendEvent = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    const [selectedRadialBar, setSelectedRadialBar] = useState('35-39');

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
        >
          <RadialBar background dataKey="uv">
            {data.map((entry: { name: string }) => (
              <Cell key={`cell-${entry.name}`} opacity={selectedRadialBar === entry.name ? 1 : 0.1} />
            ))}
          </RadialBar>
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            content={({ payload }) => (
              <ul>
                {payload?.map((entry: { value: string; color: string }) => {
                  return (
                    <li
                      onClick={() => setSelectedRadialBar(entry.value)}
                      key={`item-${entry.value}`}
                      style={{
                        color: entry.color,
                        opacity: selectedRadialBar === entry.value ? 1 : 0.2,
                      }}
                    >
                      {entry.value}
                    </li>
                  );
                })}
              </ul>
            )}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageDataWithFillColor,
  },
};*/




/*<ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="65%" outerRadius="75%" barSize={10} data={chartDataScore} startAngle={-180} endAngle={450}>
                    {radialBars}
                    <text x="10%" y="15%" fontSize={22}> </text>
                    <Legend iconSize={0} layout="vertical" verticalAlign="middle" />
                </RadialBarChart>
            </ResponsiveContainer>*/
      

 
    
            /*<div className='barchart'>
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
              <CartesianGrid className='cartesian'  strokeDasharray="3 3" />
              <XAxis   dataKey="name"  scale='point' padding={{top:10}} />
              <Tooltip className="tooltype" cursor={{fill: 'black'}} content={<CustomTooltip />} /> 
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
                  <Bar dataKey="pv" background={{ fill: '#eee' }}   barSize={7} className='barchart_bar' radius={[10, 10, 0, 0]} fill="black"  />
                  <Bar dataKey="uv"  barSize={7} className='barchart_bar' radius={[10, 10, 0, 0]} fill="red"  />
                
            </BarChart>
            
            </ResponsiveContainer>
        </div>*/