import "../Styles/Archive.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Archive extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMenuItem: "",
      storyData: [],
      projectData: [],
    };
  }

  changeAcitveItem(i) {
    this.setState({ activeMenuItem: i });
  }

  componentDidUpdate() {
    this.props.itemData.map((item) => {
      if (item.template === "story") {
        console.log("story", item);
      } else if (item.template === "project") {
        console.log("project", item);
      }
    });
  }

  render() {
    return (
      <>
        <div className="headline">{this.props.language === "DE" ? "Projekte" : "Projects"}</div>
        <div className="archiveContainer">
          <div className="archiveNav">
            {this.props.listItems.map((item) => (
              <div onClick={() => this.changeAcitveItem(item)} className="navItem" style={{ background: this.state.activeMenuItem === item ? "red" : "lightgrey" }}>
                {item.name}
              </div>
            ))}
          </div>
          <div className="archive">
            {this.props.itemData.map((item) => (
              <>
                <div className="archiveItem">
                  {/* <div className="overlay"></div> */}
                  <div className="imageContainer">
                    <Link to={"/project/" + item.id}>
                      <img src={item.thumbnail}></img>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Archive;
