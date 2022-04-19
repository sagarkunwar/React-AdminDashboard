import React from "react";
import "../chart/chart.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ aspect, title }) {
  const data = [
    { name: "Jan", Total: 1000 },
    { name: "Feb", Total: 500 },
    { name: "Mar", Total: 300 },
    { name: "Apr", Total: 600 },
    { name: "May", Total: 500 },
    { name: "June", Total: 800 },
    { name: "July", Total: 700 },
    { name: "August", Total: 800 },
    { name: "Sep", Total: 900 },
    { name: "Oct", Total: 400 },
    { name: "Nov", Total: 700 },
    { name: "Dec", Total: 1200 },
  ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
