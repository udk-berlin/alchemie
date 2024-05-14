import "../Styles/Participants.scss";
import React from "react";
import Markdown from "react-markdown";

class Participants extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  componentDidMount() {
    fetch("./data/persons.md")
      .then((r) => r.text())
      .then((text) => {
        this.setState({ text: text });
      });
  }

  render() {
    return (
      <>
        <div className="headline">{this.props.language === "DE" ? "Personen" : "Persons"}</div>
        <div className="participantsContainer">
          <div className="participantsContent">
            <Markdown>{this.state.text}</Markdown>
          </div>
        </div>
      </>
    );
  }
}

export default Participants;
