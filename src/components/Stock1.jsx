import React from "react";

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
  {x:'January', y:6},
  {x:'February', y:10},
  {x:'March', y:22},
  {x:'April', y:20},
  {x:'May', y:23},
  {x:'June', y:25},
  {x:'July', y:29.6},
];

export const data = {
  datasets: [
    {
      label: 'Stock1 Price',
      data: xyValues,
      borderColor: 'rgb(255,99,132)',
      backgroundColor: 'rgba(255,99,132,0.5)',
    },
  ],
};

function Stock1() {
  const price = 500;
  const shares = 0;
  const playerOwned = shares*price;
  return (
    <div className="Stock1">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <Line options={options} data={data} />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Stock1</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>Price: ${price}</p>
            <p>You own: {shares} shares = ${playerOwned} worth</p>
            <form>
              <input></input>
              <input type="submit" value="Buy"></input>
            </form>
            <form>
              <input></input>
              <input type="submit" value="Sell"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stock1;