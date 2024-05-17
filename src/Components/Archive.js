import "../Styles/Archive.scss";
import React from "react";

const archiveItem = ['LOREM IPSUM', 'GUBERGEN', 'NONUMY', 'SANCTUS']; 

class Archive extends React.Component {
  constructor(){
    super();
    this.state = {
      activeMenuItem : ''
    }
  }

  changeAcitveItem(i){
    this.setState({activeMenuItem : i}); 
  }
  
  render() {
    return (
      <>
        <div className="headline">{this.props.language === "DE" ? "Projekte" : "Projects"}</div>
        <div className="archiveContainer">
          <div className="archiveNav">

            {
              archiveItem.map((item) => 
                  <div onClick={()=> this.changeAcitveItem(item)} className="navItem" style={{background: this.state.activeMenuItem === item ? 'red' : 'lightgrey'}}>{item}</div>    
              )
            }

          </div>
          <div className="archive">
            <div className="archiveItem"></div>
            <div className="archiveItem"></div>
            <div className="archiveItem"></div>
            <div className="archiveItem"></div>
            <div className="archiveItem"></div>
            <div className="archiveItem"></div>
            <div className="archiveItem"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Archive;