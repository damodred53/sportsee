
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
      

 
    
               