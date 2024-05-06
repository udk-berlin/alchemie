import "../Styles/Header.scss"
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
        <div className="languageSelector">
          <h1 onClick={()=> this.props.changeLanguage('DE')} style={{color: this.props.language === 'DE' ? 'black' : 'lightgrey'}}>DE</h1>
          <h1 onClick={()=> this.props.changeLanguage('EN')} style={{color: this.props.language === 'EN' ? 'black' : 'lightgrey'}}>EN</h1>
        </div>
        <h1>Universität der Künste Berlin</h1>
      </div>
    );
  }
}

export default Header;
