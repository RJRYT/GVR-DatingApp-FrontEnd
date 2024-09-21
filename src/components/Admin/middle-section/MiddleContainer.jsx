import React from "react";
import  LineChartTwo from "../charts/line-chart-two/LineChartTwo"
import  PieChartTwo  from "../charts/pie-chart-two/PieChartTwo";
import { Settings } from "lucide-react";

function MiddleContainer() {
  return (
    <div className="w-full h-1/2  grid place-items-center ">
      <div className="w-[90%] h-full   flex gap-5 ">
        <div className="w-[60%] h-full bg-white rounded-xl flex flex-col items-center">
          <div className="w-[90%] h-20  flex items-center justify-between">
            <h1 className="text-2xl font-bold">Customer arrival</h1>
            <Settings className="cursor-pointer" />
          </div>
          <div className="w-4/5 h-[70%]">
            <LineChartTwo />
          </div>
        </div>
        <div className="w-[37%] h-full bg-white rounded-xl flex flex-col items-center">
          <div className="w-[90%] h-20  flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Revenue by module</h1>
              <p className="text-xs opacity-40">
                click each area to see details
              </p>
            </div>
            <Settings className="cursor-pointer" />
          </div>
          <div className="w-full h-4/5 grid place-items-center">
            <PieChartTwo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer;