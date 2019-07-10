import React from "react";
import SampleChart from "./SampleChart";
import SampleChart2 from "./SampleChart2";
import SampleChart3 from "./SampleChart3";
import SampleChart4 from "./SampleChart4";
import SampleData from "./SampleData";
import Quote from "./Quote";

export default function Dashboard(props) {
  return (
    <div className="Dashboard">
      <Quote iex={props.iex} profile={props.profile} />
      <SampleChart iex={props.iex} profile={props.profile} />
      <SampleChart2 />
      <SampleChart3 />
      <SampleChart4 />
      <SampleData />
      <SampleData />
      <SampleChart2 />
      <SampleChart2 />
    </div>
  );
}
