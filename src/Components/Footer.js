import "../Styles/Footer.scss";
import "../App.scss";

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
      <div ref={this.elementWidth} className="footer" style={{ display : this.props.windowWidth < 700 ? 'none' : 'flex'}}>
        <div className="container">
          <h1>Kontakt</h1>
        </div>
        <div className="container">
          <h1>Impressum</h1>
        </div>
      </div>
    );
  }
}

export default Footer;
