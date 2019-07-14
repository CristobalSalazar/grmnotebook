import React from "react";
import SampleChart from "./HighLow1m";
import HighLow5d from "./HighLow5d";
import Close3m from "./Close3m";
import SampleChart4 from "./SampleChart4";
import SampleData from "./SampleData";
import Quote from "./Quote";

export default function Dashboard(props) {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="Dashboard">
        {/* <Quote iex={props.iex} profile={props.profile} /> */}
        <Close3m iex={props.iex} profile={props.profile} />
        <SampleChart iex={props.iex} profile={props.profile} />
        <HighLow5d iex={props.iex} profile={props.profile} />
      </div>
    </div>
  );
}
