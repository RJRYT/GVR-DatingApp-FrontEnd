import React from "react";
import TopSectionCard from "./top-section-card/TopSectionCard";
import LineChart from "../charts/line-chart/LineChart"
import PieChart  from "../charts/pie-chart-one/PieChartOne";

function TopContainer() {
  return (
    <div className="w-[90%] h-1/2  flex gap-2">
      <div className="w-[25%] h-full flex flex-col gap-7 py-5">
        <h1 className="text-start font-bold">Users</h1>
        <TopSectionCard
          icon={null}
          percentage={85.07}
          rate={"85k"}
          title={"Active users"}
        />
        <TopSectionCard
          icon={null}
          percentage={85.07987}
          rate={"85k"}
          title={"Total users"}
          bgColor={"red"}
        />
        <TopSectionCard
          icon={null}
          percentage={85.07987}
          rate={"85k"}
          title={"Subscribed users"}
          bgColor={"green"}
        />
      </div>

      <div className="w-[40%]  h-full px-5  flex gap-5 flex-col items-start justify-center">
        <h1 className="font-semibold">Subscribes daily</h1>
        <div className="w-full  h-4/5 text-violet-600 bg-white px-5 rounded-2xl grid place-items-center">
          <LineChart />
        </div>
      </div>
      <div className="w-[42%] h-full  px-5  flex gap-5 flex-col items-start justify-center ">
        <h1 className="font-semibold">Statistics</h1>
        <div className="w-full h-4/5 bg-white rounded-2xl grid place-items-center">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default TopContainer;