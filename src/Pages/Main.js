import "../App.scss";
import React from "react";
import Slidehow from "../Components/Slideshow";
import Process from "../Components/Process";
import Participants from "../Components/Participants";
import Archive from "../Components/Archive";


class Main extends React.Component {
  componentDidMount() {
  }

  render() {  
    return (
      <>
      <Slidehow language = {this.props.language}></Slidehow>
      <Process language = {this.props.language}></Process>
      <Archive listItems={this.props.listItems} language = {this.props.language}></Archive>
      <Participants language = {this.props.language}></Participants>
      </>
    );
  }
}

export default Main;
