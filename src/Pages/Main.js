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
      <Archive listItems={this.props.listItems} itemData={this.props.itemData} language = {this.props.language}></Archive>
      <Process language = {this.props.language}></Process>
      <Participants language = {this.props.language}></Participants>
      </>
    );
  }
}

export default Main;
