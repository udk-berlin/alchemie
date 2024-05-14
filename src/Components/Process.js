import "../Styles/Process.scss"
import React from "react";
import Markdown from 'react-markdown'

class Process extends React.Component {
  constructor(){
    super();
    this.state = {
      textDE : '',
      textEN : ''
    }
  }

  componentDidMount(){
    fetch("./data/processDE.md")
    .then((r) => r.text())
    .then(text => {
      console.log(text);
      this.setState({textDE : text}); 
    });

    fetch("./data/processEN.md")
    .then((r) => r.text())
    .then(text => {
      console.log(text);
      this.setState({textEN : text}); 
    });
  }
  
  render() {
    return (
        <>
        <div className="headline">{this.props.language === 'DE' ? "Prozess" : "Process"}</div>
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
