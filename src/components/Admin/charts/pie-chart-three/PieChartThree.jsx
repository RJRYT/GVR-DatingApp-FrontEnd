import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartThree = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Work done Status",
        data: [50, 50], // Values similar to the ones in your screenshot
        backgroundColor: ["#4192FC", "#5B616A"], // Matching colors from your UI
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
          display: false,
        },
      },
    },

    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-full">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartThree;