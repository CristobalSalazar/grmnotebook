import React from "react";

export default function Title(props) {
  return (
    <header className="Title">
      <h1>{props.profile}</h1>
      <br />
      <p> {props.companyName}</p>
    </header>
  );
}
