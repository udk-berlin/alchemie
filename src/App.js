import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Pages/Main";
import Impressum from "./Pages/Impressum";
import Contact from "./Pages/Contact";

class App extends React.Component {
  constructor() {
    super();
    this.changeLanguage = this.changeLanguage.bind(this);
    this.elementWidth = React.createRef();
    this.state = {
      windowWidth: 999,
      language: "DE",
    };
  }

  changeLanguage(l) {
    this.setState({ language: l });
  }

  componentDidMount() {
    this.setState({ windowWidth: this.elementWidth.current.offsetWidth });
    window.addEventListener("resize", () => {
      console.log(this.elementWidth.current.offsetWidth);
      this.setState({ windowWidth: this.elementWidth.current.offsetWidth });
    });
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Main language={this.state.language} />} />
          <Route path="/contact" element={<Contact language={this.state.language} />} />
          <Route path="/impressum" element={<Impressum language={this.state.language}/>} />
        </Routes>

        <Header windowWidth={this.state.windowWidth} language={this.state.language} changeLanguage={this.changeLanguage}></Header>
        <div ref={this.elementWidth}>
          <Footer windowWidth={this.state.windowWidth}></Footer>
        </div>
      </div>
    );
  }
}

export default App;
