import "../App.scss";
import React from "react";
import Slidehow from "../Components/Slideshow";
import Process from "../Components/Process";
import Participants from "../Components/Participants";


class Main extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
      <Slidehow></Slidehow>
      <Process></Process>
      <Participants></Participants>
      </>
    );
  }
}

export default Main;
