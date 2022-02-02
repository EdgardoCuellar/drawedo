import React, { Component } from "react";
import "../styles/Header.css"
import Logo from "../assets/img/logo.png"
import {
  Link
} from "react-router-dom";

class Header extends Component {

  render() {
    return (
        <div className="HeaderMain">
          <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap');</style>
          <Link to="/">
            <div className="top-header">
                <img className="logo-header" src={Logo} />
                <h1>Tartine Network</h1>
            </div>
          </Link>
          <div className="HeaderContainer">
              <Link to={"/"} className="HeaderText">Home</Link>
              <Link to={"/team"} className="HeaderText">Team</Link>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="HeaderText">Video</a>
              <a href="https://github.com/maluyckx/mnist-tartine-2022"  className="HeaderText">Doc</a>
          </div>
        </div>
    );
  }
}

export default Header