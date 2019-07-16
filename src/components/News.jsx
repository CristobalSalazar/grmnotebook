import React, { Component } from "react";
import axios from "axios";
const { ipcRenderer } = window.electron;

export default class News extends Component {
  state = {
    source: "Google",
    articles: []
  };
  componentDidMount() {
    switch (this.state.source) {
      case "Google":
        this.getGoogle();
        break;
      case "IEX":
        this.getIEX();
        break;
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.profile !== prevProps.profile) {
      switch (this.state.source) {
        case "Google":
          this.getGoogle();
          break;
        case "IEX":
          this.getIEX();
          break;
      }
    }
  }
  getGoogle = () => {
    //GOOGLE NEWS
    const baseUrl = "https://newsapi.org/v2";
    const endPoint = "everything";
    const key = "20a722fdac8449d9aa7fda600c6a5740";
    const params = `apiKey=${key}&q=Apple`;
    const url = `${baseUrl}/${endPoint}?${params}`;

    axios.default.get(url).then(data => {
      console.log(data.data.articles);
      this.setState({ articles: data.data.articles });
    });
  };
  getIEX() {
    this.props.iex.stock.news(this.props.profile).then(data => {
      console.log(data);
      this.setState({ articles: data });
    });
  }
  openInBrowser = (e, url) => {
    e.preventDefault();
    ipcRenderer.send("m/open", url);
  };
  render() {
    switch (this.state.source) {
      // --- GOOGLE ---
      case "Google":
        return (
          <div className="News">
            {this.state.articles.map((article, i) => {
              return (
                <div className="Article" key={i}>
                  <h1 className="Title">{article.title}</h1>
                  <p className="Description">{article.description}</p>
                  <a className="URL" onClick={e => this.openInBrowser(e, article.url)} href="#">
                    Read More on {article.source.name}
                  </a>
                </div>
              );
            })}
          </div>
        );
      // --- IEX ---
      case "IEX":
        return (
          <div className="News">
            {this.state.articles.map((article, i) => {
              return (
                <div className="Article" key={i}>
                  <h1 className="Title">{article.headline}</h1>
                  <p className="Description">{article.summary}</p>
                  <a className="URL" onClick={e => this.openInBrowser(e, article.url)} href="#">
                    Read More on {article.source}
                  </a>
                </div>
              );
            })}
          </div>
        );
    }
  }
}
