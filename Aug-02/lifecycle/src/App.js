class App extends React.Component {
  constructor() {
    super();

    this.state = {isShowing: true};
  }

  toggleShow = _ => {
    this.setState(current => {
      return {isShowing: !current.isShowing};
    });
  }

  render() {
    return <div>
      <h2>Lifecycle session</h2>
      {/* <Users /> */}
      {/* <Password /> */}
      {/* <button onClick={this.toggleShow}>Show/Hide</button> */}
      {/* {this.state.isShowing ? <Timer /> : false } */}
      <Counter />
    </div>
  }
}