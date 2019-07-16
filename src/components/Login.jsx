import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1 className="Login-Title">GRM Notebook</h1>
        <form className="Login-Form" onSubmit={this.props.onSubmit}>
          <div className="Login-Form-Group">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" />
          </div>
          <div className="Login-Form-Group">
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" />
          </div>
          <input type="submit" id="submit" value="Login" />
        </form>
      </div>
    );
  }
}
