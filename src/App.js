import logo from "./logo.svg";
import "./App.scss";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>Alchemie der Udk</h1>
          <h1>Universität der Künste Berlin</h1>
        </div>

        <div className="startContainer">
          <img src="./images/image.png"></img>
        </div>

        <div className="prozessContainer">
        </div>

        <footer>
          <div className="container">
            <h1>Kontakt</h1>
          </div>
          <div className="container">
            <h1>Impressum</h1>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
