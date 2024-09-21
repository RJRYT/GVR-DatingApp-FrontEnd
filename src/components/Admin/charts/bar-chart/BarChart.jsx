import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          5000, 7000, 8000, 6000, 4000, 9000, 10000, 7000, 8000, 9000, 10000,
          12000, 11000, 13000, 8000, 9000, 10000, 11000, 12000, 13000, 14000,
          15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000,
        ],
        backgroundColor: "#4E73DF",
        borderColor: "#4E73DF",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [
          3000, 4000, 5000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
          10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000,
          20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000,
        ],
        backgroundColor: "#E74A3B",
        borderColor: "#E74A3B",
        borderWidth: 1.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          borderRadius: 8,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        ticks: {
          maxTicksLimit: 19, // Limits the number of ticks on the x-axis
          autoSkipPadding: 20, // Adds padding between the x-axis ticks
        },
        grid: {
          offset: true, // Adjusts the grid lines' alignment with the ticks
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full  h-[85%]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;