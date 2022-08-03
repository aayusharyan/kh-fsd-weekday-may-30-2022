// import React from "react";

// class Button extends React.Component {
//   render() {
//     return <button>Click me</button>
//   }
// }

// export default Button;

const Button = (props) => {
  return <button>{props.title}</button>
}

export default Button;