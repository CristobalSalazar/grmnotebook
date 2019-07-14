import React from "react";

export default function SearchItem(props) {
  return (
    <div onClick={() => props.getWatchItem(props.name)} className="WatchItem">
      <span
        style={{
          float: "left",
          height: "16px",
          width: "16px",
          background: "white",
          marginRight: "6px"
        }}
      />
      {props.name}
    </div>
  );
}
