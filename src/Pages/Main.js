import "../App.scss";
import React from "react";
import Slidehow from "../Components/Slideshow";
import Process from "../Components/Process";
// import Main from "../Styles/Main.scss"


class Main extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
      <Slidehow></Slidehow>
      <Process></Process>
      </>
    );
  }
}

export default Main;
