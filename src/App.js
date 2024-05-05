import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.scss";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

import Main from "./Pages/Main";
import Contact from "./Pages/Contact";

class App extends React.Component {
  constructor() {
    super();
    this.elementWidth = React.createRef();
    this.state = {
      windowWidth: 999,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      console.log(this.elementWidth.current.offsetWidth);
      this.setState({ windowWidth: this.elementWidth.current.offsetWidth });
    });
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      // // <div ref={this.elementWidth}>
      // //   <Header></Header>

      // //   {/* <div className="startContainer">
      // //     <img src="./images/image.png"></img>
      // //   </div>

      // //   <div className="prozessContainer">
      // //   </div> */}

      // //   <Footer
      // //     windowWidth = {this.state.windowWidth}
      // //   ></Footer>
      // // </div>

      // <Router>
      //   <Header></Header>

      //   <div style={{marginTop: '500px'}}>
      //   <button style={{width: '250px', height: '250px'}} to="/contact">X</button>
      //   </div>

      //   <Routes>
      //     <Route path="/contact" element={<Contact />} />
      //   </Routes>

      //   <Footer windowWidth={this.state.windowWidth}></Footer>
      // </Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Header></Header>
        
        <div ref={this.elementWidth}>
          <Footer windowWidth={this.state.windowWidth}></Footer>
        </div>
      </div>
    );
  }
}

export default App;
