import "../Styles/Slideshow.scss"
import React from "react";

class Slidehow extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div className="slideShowContainer">
            <img alt="" src="./images/image.png"></img>
            <img alt="" className="fade" src="./images/image1.png"></img>
            <div className="overlay"></div>
        </div>
    );
  }
}

export default Slidehow;
