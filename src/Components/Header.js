import "../Styles/Header.scss"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      activeLanguage : 'DE'
    }
  }

  render() {
    return (
      <div className="header">
        <h1><Link to="/">Alchemie der UdK</Link></h1>
        <div className="languageSelector">
          <h1 onClick={()=> this.setState({activeLanguage : 'DE'})} style={{color: this.state.activeLanguage === 'DE' ? 'black' : 'lightgrey'}}>DE</h1>
          <h1 onClick={()=> this.setState({activeLanguage : 'EN'})} style={{color: this.state.activeLanguage === 'EN' ? 'black' : 'lightgrey'}}>EN</h1>
        </div>
        <h1>Universität der Künste Berlin</h1>
      </div>
    );
  }
}

export default Header;
