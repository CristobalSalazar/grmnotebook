import React, { Component } from "react";

export default class Resizer extends Component {
  startX = 0;
  mouseX = 0;

  componentDidMount() {
    document.querySelector("body").addEventListener("mousemove", e => {
      this.mouseX = e.clientX;
    });
  }
  handleStartDrag = () => {
    this.startX = this.mouseX;
  };
  handleDrag = e => {
    const aside = document.querySelector("aside");
    aside.style.width = (aside.clientWidth + e.clientX - this.startX).toString(10) + "px";
    this.startX = e.clientX;
  };

  render() {
    return (
      <div
        draggable="true"
        onDragStart={this.handleStartDrag}
        onDrag={this.handleDrag}
        id="resizer"
        className={this.props.display ? "Resizer" : "hidden"}
      />
    );
  }
}
