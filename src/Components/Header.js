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
        <h1><Link to="/">{this.props.language === 'DE' && this.props.windowWidth > 700 ? 'Alchemie der UdK Berlin' : this.props.language === 'EN' && this.props.windowWidth > 700 ? 'Alchemy of the Udk Berlin' : this.props.language === 'DE' && this.props.windowWidth < 700 ? 'Alchemie der Universität der Künste Berlin' : 'Alchemy at the Berlin University of the Arts'}</Link></h1>
        <div className="languageSelector">
          <h1 onClick={()=> this.props.changeLanguage('DE')} style={{color: this.props.language === 'DE' ? 'black' : 'lightgrey'}}>DE</h1>
          <h1 onClick={()=> this.props.changeLanguage('EN')} style={{color: this.props.language === 'EN' ? 'black' : 'lightgrey'}}>EN</h1>
        </div>
        {
          this.props.windowWidth > 700 ? 
          <h1>{this.props.language === 'DE' ? 'Universität der Künste Berlin' : 'Berlin University of the Arts'}</h1>
          : null
        }
      </div>
    );
  }
}

export default Header;
