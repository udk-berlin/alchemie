import "../App.scss";
import React from "react";
import "../Styles/Project.scss";
import parse from "html-react-parser";

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
    this.fetchData(urlId);
  }

  fetchData(id) {
    this.id = id;
    fetch("https://api.alchemie.udk-berlin.de/api/v2/" + this.id + "/render/json")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ data: json });
      });
  }

  componentDidUpdate() {}

  render() {
    if (this.state.data.abstract !== undefined) {
      console.log(this.state.data.languages);
      Object.keys(this.state.data.languages[this.props.language].content).map((index) =>
        this.state.data.languages[this.props.language].content[index].template === "code" ? 
        console.log(this.state.data.languages[this.props.language].content[index].content.split(' ')[8].split('"')[1]) : null
      );
      return (
        <>
          <div className="projectDiv">
            <img src={this.state.data.abstract.thumbnail}></img>
            <div className="textDiv">
              <h1>{this.state.data.abstract.name}</h1>
              {Object.keys(this.state.data.languages[this.props.language].content).length !== 0 ? (
                Object.keys(this.state.data.languages[this.props.language].content).map((index) =>
                  this.state.data.languages[this.props.language].content[index].template === "text" ? (
                    <div>{parse(this.state.data.languages[this.props.language].content[index].formatted_content)}</div>
                  ) : (
                    <iframe width="100%" height="500px" allowfullscreen="" frameBorder="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src={this.state.data.languages[this.props.language].content[index].content.split(' ')[8].split('"')[1]}></iframe>
                  )
                )
              ) : (
                <p>{this.props.language === "DE" ? "Noch kein Inhalt vorhanden, bitte kommen Sie später wieder" : "No content available yet, please come back later"}</p>
              )}
            </div>
          </div>
        </>
      );
    } else {
      console.log("no matching content");
    }
  }
}

export default Project;
