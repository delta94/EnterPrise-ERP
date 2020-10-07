import React from "react";
import Sidebar from "../components/Sidebar";
import "./Analytics.css";
import Chart from "../components/Chart";

function Analytics() {
  const data_1 = [
    { name: "Page A", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 240, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 210, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 120, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 60, pv: 2400, amt: 2400 },
    { name: "Page F", uv: 230, pv: 2400, amt: 2400 },
    { name: "Page G", uv: 58, pv: 2400, amt: 2400 },
    { name: "Page H", uv: 350, pv: 2400, amt: 2400 },
  ];

  const data_2 = [
    { name: "Page A", uv: 100, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 340, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 50, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 420, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 68, pv: 2400, amt: 2400 },
    { name: "Page F", uv: 110, pv: 2400, amt: 2400 },
    { name: "Page G", uv: 238, pv: 2400, amt: 2400 },
    { name: "Page H", uv: 30, pv: 2400, amt: 2400 },
  ];

  return (
    <div className="analytics">
      <div className="analytics__container">
        <Sidebar className="analytics__sidebar" />
        <div className="analytics__body">
          <h1>Analytics Page 🚀</h1>
          <div className="analytics__charts">
            <div className="analytics__charts" id="chart">
              <Chart data={data_1} />
              <h3>Data Set 1</h3>
            </div>
            <div className="analytics__charts" id="chart">
              <Chart data={data_2} />
              <h3>Data Set 2</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
