import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.scss";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.elementWidth = React.createRef()
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

  render() {
    return (
      <div ref={this.elementWidth}>
        <Header></Header>

        {/* <div className="startContainer">
          <img src="./images/image.png"></img>
        </div>

        <div className="prozessContainer">
        </div> */}

        <Footer
          windowWidth = {this.state.windowWidth}
        ></Footer>
      </div>
    );
  }
}

export default App;
