import React from "react";

export default function SampleData() {
  return (
    <div className="SampleData">
      <h1>Sample Data</h1>
      <br />
      <h1>${(Math.random() * 10000).toFixed(2)}</h1>
    </div>
  );
}
