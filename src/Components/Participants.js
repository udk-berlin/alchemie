import "../Styles/Participants.scss";
import React from "react";
import Markdown from "react-markdown";

class Participants extends React.Component {
  constructor() {
    super();
    this.state = {
      textDE: "",
      textEN: "",
    };
  }

  componentDidMount() {
    fetch("./data/personsDE.md")
      .then((r) => r.text())
      .then((text) => {
        this.setState({ textDE: text });
      });

    fetch("./data/personsEN.md")
      .then((r) => r.text())
      .then((text) => {
        this.setState({ textEN: text });
      });
  }

  render() {
    return (
      <>
        <div className="headline">{this.props.language === "DE" ? "Unterstützer*innen" : "Supporters"}</div>
        <div className="participantsContainer">
          <div className="participantsContent">
            <Markdown>{this.props.language === "DE" ? this.state.textDE : this.state.textEN}</Markdown>
          </div>
        </div>
      </>
    );
  }
}

export default Participants;
