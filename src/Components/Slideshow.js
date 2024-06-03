import "../Styles/Slideshow.scss";
import React from "react";

class Slidehow extends React.Component {
  constructor() {
    super();
  }

  handleClick(){
      window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
  }

  render() {
    return (
      <div className="slideShowContainer">
        <img alt="" src="./images/image.png"></img>
        <img alt="" className="fade" src="./images/image1.png"></img>
        <div className="overlay"></div>

        {/* <div onClick={()=> this.handleClick()} className="arrowContainer">
          <p>zum Prozess</p>
          <p>↓</p>
        </div> */}
      </div>
    );
  }
}

export default Slidehow;
