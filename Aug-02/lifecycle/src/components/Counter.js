class Counter extends React.Component {
  constructor() {
    super();
    this.state = {counter: 100, interval_id: 0};
  }

  componentDidMount() {
    const id = setInterval(_ => this.decreaseCounter(), 1000);
    this.setState({interval_id: id});
  }

  componentWillUnmount() {
    clearInterval(this.state.interval_id);
  }

  decreaseCounter = _ => {
    if(this.state.counter > 1) {
      this.setState(current => {
        return {counter: current.counter - 1};
      });
    }
  }

  render() {
    return <>
      <p>Counter from 100 to 1</p>
      <h5>{this.state.counter}</h5>
    </>
  }
}