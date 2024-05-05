import "../Styles/Header.scss"
import "../App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="header">
        <h1><Link to="/">Alchemie der UdK</Link></h1>
        <h1>Universität der Künste Berlin</h1>
      </div>
    );
  }
}

export default Header;
