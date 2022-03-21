import React from 'react';
import './chart.scss'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const data = [
{name:'January',Total:1200},
{name:'February',Total:1500},
{name:'March',Total:1000},
{name:'April',Total:1100},
{name:'May',Total:1600},
{name:'June',Total:600},
];
const Chart = ({height,title}) => {

    return (

        <div className='chart'>
            <div className='title'>{title}</div>
            <BarChart width={700} height={height} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip className='tooltipChart' />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="Total" fill="#8884d8" barSize={30} />
            </BarChart>
            
        </div>

    )

}

export default Chart;