import React from "react";

const MatchButton = ({ progress = 80, text = "Match" }) => {
  const radius = 17; // Radius of the circle
  const strokeWidth = 3; // Width of the stroke
  const diameter = radius * 2; // Diameter of the circle
  const circumference = 2 * Math.PI * radius; // Total circumference of the circle
  const strokeDasharray = circumference; // Total length of the stroke
  const strokeDashoffset = circumference * (1 - progress / 100); // Correct offset to reflect progress

  return (
    <div className="relative flex justify-center items-center">
      <button className="relative flex items-center justify-between border-2 gap-2 border-fuchsia-600 rounded-full py-1 px-2 bg-fuchsia-900 shadow-md">
        {/* Progress Circle */}
        <div className="relative flex items-center justify-center">
          <svg
            width={diameter}
            height={diameter}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${diameter} ${diameter}`} // Viewbox to adjust the SVG coordinate system
          >
            {/* Background Circle */}
            <circle
              cx={radius}
              cy={radius}
              r={radius - strokeWidth / 2}
              fill="rgb(112 26 117)" // Background color
            />
            {/* Progress Circle */}
            <circle
              cx={radius}
              cy={radius}
              r={radius - strokeWidth / 2}
              stroke="rgb(192 38 211)"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset} // Negative offset to shift to the left
              fill="none"
              className="transition-all duration-500 ease-in-out"
              transform={`rotate(-90 ${radius} ${radius})`} // Rotate to start from the top-left
            />
            {/* Text on Top of Background */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white" // Explicitly set text color to white
              fontSize="10px" // Adjust font size as needed
              fontWeight="bold" // Make text bold
            >
              <tspan x="50%" dy="-0.6em">
                {progress}
              </tspan>
              <tspan x="50%" dy="1.2em">
                %
              </tspan>
            </text>
          </svg>
        </div>
        {/* Text Label */}
        <span className="text-white font-bold aldrich-regular">{text}</span>
      </button>
    </div>
  );
};

export default MatchButton;
