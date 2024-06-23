import "../Styles/Slideshow.scss";
import React from "react";

class Slidehow extends React.Component {
  constructor() {
    super();
    this.state = {
      textDE : '',
      textEN : '',

      r : 99,
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

      let r = Math.floor(Math.random() * 3);
      this.setState({r : r});
    }
  

  render() {
    return (
      <div className="slideShowContainer">
        <video muted autoPlay loop>
          <source src={"./images/" + this.state.r +  ".mp4"} type="video/mp4"/>
        </video>
        <div className="overlay"></div>
        <div className="textOverlay">
          <h1>{this.props.language === 'DE' ? this.state.textDE : this.state.textEN}</h1>
        </div>
      </div>
    );
  }
}

export default Slidehow;
