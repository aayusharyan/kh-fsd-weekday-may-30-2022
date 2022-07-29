class State extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 1337
    };
  }
  
  increment = () => {
    this.setState(oldState => {
      const newState = {
        counter: oldState.counter + 1
      };

      return newState;
    });

    // this.setState(s => {return {counter: s.counter + 1}});
  }

  render() {
    return <div>
      <button onClick={this.increment}>Increment counter</button>
      <p>{this.state.counter}</p>
    </div>
  }
}