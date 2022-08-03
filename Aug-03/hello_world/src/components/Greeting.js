import React from "react";
import Button from './Button';

class Greeting extends React.Component {
  render() {
    return <div style={{borderColor: "red", borderWidth: "1px", borderStyle: "solid"}}>
      <h2>Hi everyone. Welcome to the session</h2>
      <Button title={this.props.title} />
    </div>;
  }
}

export default Greeting;