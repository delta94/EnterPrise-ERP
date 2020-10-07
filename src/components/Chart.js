import React from "react";
import { BarChart, Bar, XAxis, YAxis, Label } from "recharts";
import "./Chart.css";

// Generate Sales Data

export default function Chart({ data }) {
  return (
    <div className="chart">
      <BarChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 16,
          right: 0,
          bottom: 0,
          left: 20,
        }}
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis>
          <Label angle={270} position="left">
            UV
          </Label>
        </YAxis>
        <Bar dataKey="uv" barSize={30} fill="#8884d8" />
      </BarChart>
    </div>
  );
}
