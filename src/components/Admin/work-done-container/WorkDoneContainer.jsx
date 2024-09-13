import React from "react";
import PieChartThree  from "../charts/pie-chart-three/PieChartThree";

function WorkDoneContainer() {
  return (
    <div className="w-full h-1/3 bg-white mt-5 rounded-2xl flex flex-col items-center">
      <div className="w-4/5 h-16  flex items-center justify-between">
        <h1 className="text-lg font-medium">Total work done</h1>
        <select
          name="week"
          id="week-select"
          className="h-8 px-2 text-cyan-700 bg-cyan-200 rounded-md outline-none "
        >
          <option value="week-c" selected>
            This week
          </option>
        </select>
      </div>

      <div className="w-full h-2/3 ">
        <PieChartThree />
      </div>
    </div>
  );
}

export default WorkDoneContainer;