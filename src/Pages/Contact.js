import "../App.scss";
import "../Styles/Contact.scss"
import React from "react";
import Markdown from 'react-markdown'


class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      textDE : '',
      textEN : ''
    }
  }

  componentDidMount() {
    fetch("./data/contactDE.md")
    .then((r) => r.text())
    .then(text => {
      console.log(text);
      this.setState({textDE : text}); 
    });

    fetch("./data/contactEN.md")
    .then((r) => r.text())
    .then(text => {
      console.log(text);
      this.setState({textEN : text}); 
    })
  }

  render() {
    return (
        <div className="contactDiv">
          <Markdown>{this.props.language === 'DE' ? this.state.textDE : this.state.textEN}</Markdown>
        </div>
    );
  }
}

export default Contact;
