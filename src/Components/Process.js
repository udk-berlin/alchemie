import "../Styles/Process.scss"
import React from "react";
import Markdown from 'react-markdown';

class Process extends React.Component {
  constructor(){
    super();
    this.state = {
      textDE : '',
      textEN : ''
    }
  }

  componentDidMount(){
    var time = new Date();
    let date = new Date("06/28/2024 13:00");


    console.log(date);
    if(time > date){
      console.log('is bigger');
      fetch("./data/processNewDE.md")
      .then((r) => r.text())
      .then(text => {
        this.setState({textDE : text}); 
      });
  
      fetch("./data/processNewEN.md")
      .then((r) => r.text())
      .then(text => {
        this.setState({textEN : text}); 
      });
    } else {
      console.log('is smaller');
      fetch("./data/processDE.md")
      .then((r) => r.text())
      .then(text => {
        this.setState({textDE : text}); 
      });
  
      fetch("./data/processEN.md")
      .then((r) => r.text())
      .then(text => {
        this.setState({textEN : text}); 
      });
    }
  }
  
  render() {  
    return (
        <>
        <div className="headlineProcess">{this.props.language === 'DE' ? "Hintergrund" : "Background"}</div>
        <div className="processContainer">
          <div className="processContent">
            <Markdown>{this.props.language === 'DE' ? this.state.textDE : this.state.textEN}</Markdown>
          </div>
        </div>
        </>
    );
  }
}

export default Process;
