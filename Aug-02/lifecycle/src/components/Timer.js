class Timer extends React.Component {
  constructor() {
    super();

    this.state = {id: 0};
  }

  componentDidMount() {
    const id = setInterval(_ => console.log("ABCD"), 1000);
    this.setState({id: id});
  }

  componentWillUnmount() {
    clearInterval(this.state.id);
  }

  render() {
    return <>
      <p>Timer App</p>
    </>
  }
}