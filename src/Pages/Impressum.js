import "../App.scss";
import "../Styles/Impressum.scss"
import React from "react";

class Impressum extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
        <div className="impressumDiv">
          <h1>{this.props.language === 'DE' ? 'Impressum' : 'Imprint'}</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed a aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
    );
  }
}

export default Impressum;
