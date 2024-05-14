import "../Styles/Archive.scss";
import React from "react";
// import Markdown from "react-markdown";

class Archive extends React.Component {
  render() {
    return (
      <>
        <div className="headline">{this.props.language === "DE" ? "Projekte" : "Projects"}</div>
        <div className="archiveContainer">
          <div className="archiveContent">
          </div>
        </div>
      </>
    );
  }
}

export default Archive;
