import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form className = "Login">
        <div id="spacer"></div>
        <p style={{textAlign: 'left'}}>Username:</p>
        <input type='text'></input>
        <p style={{textAlign: 'left'}}>Password:</p>
        <input type='password'></input>
        <br></br>
        <br></br>
        <input type="submit" id="submit" value="Login"></input>
      </form>
    )
  }
}
