import React, { Component } from "react";
import WatchItem from "./WatchItem";
import { statement } from "@babel/template";
const ipcr = window.electron.ipcRenderer;

export default class News extends Component {
  componentDidMount() {
    this.props.iex.stock.news(this.props.profile).then(data => {
      console.log(data);
      this.setState({ articles: data });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.profile != prevProps.profile) {
      this.props.iex.stock.news(this.props.profile).then(data => {
        console.log(data);
        this.setState({ articles: data });
      });
    }
  }
  state = {
    articles: []
  };
  getData = profile => {};
  render() {
    return (
      <div className="News">
        {this.state.articles.map((val, i) => {
          return (
            <div className="Article" key={i}>
              <p style={{ fontSize: "16px", color: "gray" }}>{val.headline}</p>
              <br />
              <p style={{ fontSize: "12px" }}>{val.summary}</p>
              <a style={{ fontSize: "12px", color: "#428bca" }} href={val.url}>
                Read More on {val.source}
              </a>
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
