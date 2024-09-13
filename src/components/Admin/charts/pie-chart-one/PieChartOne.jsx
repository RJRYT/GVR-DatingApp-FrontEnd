import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Subscribed Users", "Unsubscribed Users"],
    datasets: [
      {
        label: "User Subscription Status",
        data: [50, 50], // Values similar to the ones in your screenshot
        backgroundColor: ["#7e3af2", "#EFE8FF"], // Matching colors from your UI
        borderColor: ["#EFE8FF", "#EFE8FF"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "81%",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true, // This makes the legend's color indicators round
          padding: 20, // Add some padding around the labels
          pointStyle: "circle", // Define the point style as a circle
        },
      },
    },

    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-56">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;