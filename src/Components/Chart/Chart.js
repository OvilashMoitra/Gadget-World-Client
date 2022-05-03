import React, { useEffect, useState } from 'react';
import { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'
const Chart = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/stockChart`)
            .then(res => res.json())
            .then(data => setChartData(data));
    }, []);


    return (
        <div className='d-flex justify-content-center'>
            <div className="chart">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={chartData} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>
            <div className="chart-details" >
                <ul>
                    <li><strong>InStock {chartData[1]?.value}</strong></li>
                    <li><strong>Sold {chartData[0]?.value}</strong></li>
                    <li><strong>ReStock {chartData[2]?.value}</strong></li>
                </ul>
            </div>
        </div>
    );
};

export default Chart;