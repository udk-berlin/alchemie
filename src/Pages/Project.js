import "../App.scss";
import React from "react";
import "../Styles/Project.scss"

class Project extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
      <div className="projectDiv">
        <img src="images/image.png"></img>
        <div className="textDiv">
          <h1>{this.props.projectName}</h1>
          <h2>{this.props.person}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
      </>
    );
  }
}

export default Project;
