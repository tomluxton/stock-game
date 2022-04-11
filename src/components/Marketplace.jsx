import React from "react";
import { NavLink } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const xyValues = [
  {x:'January', y:50},
  {x:'February', y:55},
  {x:'March', y:75},
  {x:'April', y:125},
  {x:'May', y:150},
  {x:'June', y:100},
  {x:'July', y:150},
];

export const data = {
  datasets: [
    {
      label: 'SnP500',
      data: xyValues,
      borderColor: 'rgb(255,99,132)',
      backgroundColor: 'rgba(255,99,132,0.5)',
    },
  ],
};

function Marketplace() {
  return (
    <div className="Marketplace">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <Line options={options} data={data} />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Marketplace</h1>
            <p>
              This is where you can buy and sell stocks.
            </p>
          </div>
        </div>
        <div className="row">
        <div className="col-sm">
          <NavLink className="nav-link" to = "/marketplace/stock1">Stock 1</NavLink>
        </div>
        <div className="col-sm">Stock 2</div>
        <div className="col-sm">Stock 3</div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;