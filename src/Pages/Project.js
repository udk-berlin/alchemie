import "../App.scss";
import React from "react";
import "../Styles/Project.scss"

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: ''
    }
  }
  
  
  componentDidMount() {
    const urlId = window.location.href.split('/')[4]; 
    this.setState({id : urlId})  
  }

  render() {
    return (
      <>
      <div className="projectDiv">
        <img src="images/image.png"></img>
        <div className="textDiv">
          <h1>{this.state.id}</h1>
          <h2>{this.props.person}</h2>
          {/* <p>{this.props.text}</p> */}
          
          <p>GERMAN TEXT Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      </>
    );
  }
}

export default Project;
