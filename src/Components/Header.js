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
        <h1><Link to="/">{this.props.language === 'DE' ? 'Alchemie der UdK' : 'Alchemy of the UdK'}</Link></h1>
        <div className="languageSelector"  style={{ display : this.props.windowWidth < 700 ? 'none' : 'flex'}}>
          <h1 onClick={()=> this.props.changeLanguage('DE')} style={{color: this.props.language === 'DE' ? 'black' : 'lightgrey'}}>DE</h1>
          <h1 onClick={()=> this.props.changeLanguage('EN')} style={{color: this.props.language === 'EN' ? 'black' : 'lightgrey'}}>EN</h1>
        </div>
        <h1>{this.props.language === 'DE' ? 'Universität der Künste Berlin' : 'Berlin University of the Arts'}</h1>
      </div>
    );
  }
}

export default Header;
