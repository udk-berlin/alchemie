import "../App.scss";
import React from "react";
import "../Styles/Project.scss";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      data: [],
    };
  }

  componentDidMount() {
    const urlId = window.location.href.split("/")[4];
    console.log(urlId);
    this.setState({ id: urlId });
  }

  componentDidUpdate() {
    if (this.state.data.length == 0) {
      fetch("https://api.alchemie.udk-berlin.de/api/v2/" + this.state.id + "/render/json")
        .then((resp) => resp.json())
        .then((json) => {
          this.setState({ data: json });
        });
    }
  }

  render() {
    if (this.state.data.abstract !== undefined) {
      console.log(this.state.data);
      return (
        <>
          <div className="projectDiv">
            <img src={this.state.data.abstract.thumbnail}></img>
            <div className="textDiv">
              <h1>{this.state.data.abstract.name}</h1>
              <p>{this.state.data.languages.DE.content[0].content}</p>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Project;
