import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sat',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sun',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mon',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Tue',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Wed',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Thu',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Fri',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Analyticsgraph() {
  return (
    <div className='analytics'>

        <div className='gn flex'>
            <h4>Analytics</h4>
            <p>22 Jun - 22 Jul</p>
        </div>

        <div className='analyticsgraph'>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </div>
  )
}
