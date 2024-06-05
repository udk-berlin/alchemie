import "../Styles/Slideshow.scss";
import React from "react";

class Slidehow extends React.Component {
  constructor() {
    super();
    this.state = {
      textDE : '',
      textEN : ''
    }
  }

  handleClick() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  
    componentDidMount(){
      fetch("./data/landingDE.md")
      .then((r) => r.text())
      .then(text => {
        this.setState({textDE : text}); 
      });
  
      fetch("./data/landingEN.md")
      .then((r) => r.text())
      .then(text => {
        this.setState({textEN : text}); 
      });
    }
  

  render() {
    return (
      <div className="slideShowContainer">
        <img alt="" src="./images/headImage.jpg"></img>
        <div className="overlay"></div>
        <div className="textOverlay">
          <h1>{this.props.language === 'DE' ? this.state.textDE : this.state.textEN}</h1>
        </div>
      </div>
    );
  }
}

export default Slidehow;
