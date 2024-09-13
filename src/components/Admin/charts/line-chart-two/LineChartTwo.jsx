import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomerArrivalChart = () => {
  const data = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1), // Days of the month
    datasets: [
      {
        label: "Customer Arrival",
        data: [10, 30, 44, 33, 55, 33, 33.56, 55, 22, 55, 77],
        fill: false,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#0858BB",
        pointRadius: 3,
        tension: 0.1,
      },
      {
        label: "Customer Arrival",
        data: [20, 60, 54, 43, 65, 73, 57, 75, 32, 25, 37, 77],
        fill: false,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#05016B",
        pointRadius: 3,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        ticks: {
          maxTicksLimit: 12, // Limits the number of ticks on the x-axis
          autoSkipPadding: 10, // Adds padding between the x-axis ticks
        },
        grid: {
          offset: true, // Adjusts the grid lines' alignment with the ticks
        },
      },
      y: {
        display: true,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default CustomerArrivalChart;