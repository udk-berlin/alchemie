import "../Styles/Header.scss"
import "../App.scss";

import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="header">
        <h1>Alchemie der Udk</h1>
        <h1>Universität der Künste Berlin</h1>
      </div>
    );
  }
}

export default Header;
