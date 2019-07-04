import React from "react";
import SampleChart from "./SampleChart";
import SampleChart2 from "./SampleChart2";
import SampleChart3 from "./SampleChart3";
import SampleChart4 from "./SampleChart4";
import SampleData from "./SampleData";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <SampleChart />
      <SampleChart2 />
      <SampleChart3 />
      <SampleChart4 />
      <SampleData />
      <SampleChart />
      <SampleData />
      <SampleChart2 />
      <SampleChart />
      <SampleChart2 />
    </div>
  );
}
