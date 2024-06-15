import "../Styles/Archive.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

var data = [];

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: "ALL",
      storyData: [],
      projectData: [],

      data: [],
    };
  }

  changeAcitveItem(i) {
    if (i.name === this.state.activeMenuItem) {
      this.setState({ activeMenuItem: "ALL" });
    } else {
      this.setState({ activeMenuItem: i.name });
    }
  }

  render() {
    console.log(this.props.itemData);

    if(this.state.activeMenuItem === 'ALL'){
      data = this.props.itemData;
    } else {
      data = this.props.itemData.filter(item => item.parents[0].name === this.state.activeMenuItem);
      
    }

    return (
      <>
        <div className="headline">{this.props.language === "DE" ? "Projekte" : "Projects"}</div>
        <div className="archiveContainer">
          <div className="archiveNav">
            {this.props.listItems.map((item) => (
              <div onClick={() => this.changeAcitveItem(item)} className="navItem" style={{ background: this.state.activeMenuItem === item.name ? "red" : "lightgrey" }}>
                {item.name}
              </div>
            ))}
          </div>

          <div className="archive">
            {/* {this.props.itemData.filter(item => item.parents[0].name === this.state.activeMenuItem).map((item) => ( */}
              {data.map((item) => (
              <>
                <div className="archiveItem">
                  {item.thumbnail !== "" ? (
                    <Link to={"/project/" + item.id}>
                      <div className="imageContainer">
                        <img src={item.thumbnail} onError={(i) => (i.target.style.display = "none")}></img>
                      </div>
                    </Link>
                  ) : (
                    <Link to={"/project/" + item.id}>
                      <div className="imageContainer" style={{ backgroundColor: item.template === "project" ? "red" : "blue", pointerEvents: "none", opacity: "0.1" }}>
                        <img src={item.thumbnail} onError={(i) => (i.target.style.display = "none")}></img>
                      </div>
                    </Link>
                  )}
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
