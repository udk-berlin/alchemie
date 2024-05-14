import "../App.scss";
import "../Styles/Impressum.scss"
import React from "react";
import Markdown from 'react-markdown';

class Impressum extends React.Component {
  constructor() {
    super();
    this.state = {
      textDE : '',
      textEN : ''
    }
  }

  componentDidMount() {
    fetch("./data/imprintDE.md")
    .then((r) => r.text())
    .then(text => {
      this.setState({textDE : text}); 
    });

    fetch("./data/imprintEN.md")
    .then((r) => r.text())
    .then(text => {
      this.setState({textEN : text}); 
    });
  }

  render() {
    return (
        <div className="impressumDiv">
          <Markdown>{this.props.language === 'DE' ? this.state.textDE : this.state.textEN}</Markdown>
        </div>
    );
  }
}

export default Impressum;
