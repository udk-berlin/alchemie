import "../Styles/Footer.scss";
import "../App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount () {}

  componentDidUpdate(){
  }

  render() {
    return (
      <div className="footer" style={{ display : this.props.windowWidth < 700 ? 'none' : 'flex'}}>
        <div className="container">
          <h1><Link to="/contact">Kontakt</Link></h1>
        </div>
        <div className="container">
          <h1>Impressum</h1>
        </div>
      </div>
    );
  }
}

export default Footer;
