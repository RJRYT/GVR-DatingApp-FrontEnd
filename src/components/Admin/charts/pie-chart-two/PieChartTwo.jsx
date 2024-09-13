import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueByModuleChart = () => {
  const data = {
    labels: ["Dating", "Matrimony", "Study Abroad", "Job Portal", "E-commerce"],
    datasets: [
      {
        label: "Revenue by Module",
        data: [20, 25, 10, 30, 15], // Example percentages
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#2d3748",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default RevenueByModuleChart;