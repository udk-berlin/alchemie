import "../Styles/Archive.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: "ALL",
      mainFilterItem: "ALL",
      storyData: [],
      projectData: [],
      data: [],
    };

    this.list = [];
    this.uniqueList = [];
    
    this.preData = [];
    this.preList = [];
  }

  changeAcitveItem(i) {
    if (i === this.state.activeMenuItem) {
      this.setState({ activeMenuItem: "ALL" });
    } else {
      this.setState({ activeMenuItem: i });
    }
  }

  changeMainFilterItem(i) {
    if (i === this.state.mainFilterItem) {
      this.setState({ mainFilterItem: "ALL" });
    } else {
      this.setState({ mainFilterItem: i });
    }
  }

  render() {
    if (this.state.activeMenuItem === "ALL" && this.state.mainFilterItem === "ALL") {
      this.preData = this.props.itemData;
    } else if (this.state.mainFilterItem === "Projekte") {
      this.preData = this.props.itemData.filter((item) => item.template === "project");
    } else if (this.state.mainFilterItem === "Geschichten") {
      this.preData = this.props.itemData.filter((item) => item.template === "story");
    }

    if (this.state.activeMenuItem === "ALL") {
      this.data = this.preData;
    } else {
      this.data = this.preData.filter((item) => item.parents[0].name === this.state.activeMenuItem);
    }

    {
      this.list = [];
      this.props.itemData.map((item) => {
        if (this.state.mainFilterItem === "ALL") {
          console.log("push all");
          this.list.push(item.parents[0].name);
        } else {
          if(this.state.mainFilterItem === "Projekte" && item.template === "project"){
            console.log("projekte", item.parents[0].name);
            this.list.push(item.parents[0].name);
          } else if(this.state.mainFilterItem === "Geschichten" && item.template === "story"){
            console.log("projekte", item.parents[0].name);
            this.list.push(item.parents[0].name);
          }
        }
      });

      this.uniqueList = [];
      this.list.forEach((element) => {
        if (!this.uniqueList.includes(element)) {
          console.log(element);
          this.uniqueList.push(element);
          console.log(this.uniqueList);
        }
      });
    }

    return (
      <>
        <div className="headline">{this.props.language === "DE" ? "Projekte" : "Projects"}</div>

        <div className="archiveContainer">
          <div className="filter">
            <div className="mainFilter">
              <div className="mainFilterItem" onClick={() => this.changeMainFilterItem("Projekte")} style={{ backgroundColor: "#FCE8A0", opacity: this.state.mainFilterItem === "ALL" || this.state.mainFilterItem === "Projekte" ? 1 : 0.5 }}>
                Projekte
              </div>
              <div className="mainFilterItem" onClick={() => this.changeMainFilterItem("Geschichten")} style={{ backgroundColor: "#EB4A1C", opacity: this.state.mainFilterItem === "ALL" || this.state.mainFilterItem === "Geschichten" ? 1 : 0.5 }}>
                Geschichten
              </div>
            </div>
            <div className="archiveNav">
              {this.uniqueList.map((item, key) => (
                <div onClick={() => this.changeAcitveItem(item)} className="navItem" style={{ background: this.state.activeMenuItem === item ? "red" : "lightgrey" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="archive">
            {this.data.map((item, key) => (
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
