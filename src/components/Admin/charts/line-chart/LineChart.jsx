// LineChart.js
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

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Subscribers",
      data: [100, 50, 200, 100, 300, 200, 400],
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "#6f42c1",
      pointBackgroundColor: "#6f42c1",
      pointBorderColor: "#fff",
      pointRadius: 5,
      tension: 0,
    },
  ],
};

const options = {
  responsive: true,
  toolTipl: {
    enabled: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false, // Hide x-axis labels
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: true, // Hide x-axis labels
      },
      grid: {
        display: false,
        drawBorder: false,
        borderDash: [5, 5],
      },
    },
  },
};

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;