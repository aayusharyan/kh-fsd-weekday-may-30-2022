class Password extends React.Component {
  constructor() {
    super();

    this.state = {pass: "", cnf_pass: "", is_match: false};
  }

  passKeyUp = e => {
    this.setState({pass: e.target.value});
  }

  confPassKeyUp = e => {
    this.setState({cnf_pass: e.target.value});
  }

  componentDidUpdate(prevProp, prevState) {
    if(prevState.is_match !== this.state.is_match) {
      return;
    }

    if(this.state.pass.length > 8) {
      if(this.state.pass == this.state.cnf_pass) {
        if(this.state.is_match !== true) {
          this.setState({is_match: true});
          return;
        }
      }
    }
    if(this.state.is_match !== false) {
      this.setState({is_match: false});
    }
  }

  render() {
    return (
      <>
        <p>Password Matcher</p>
        <input type="text" placeholder="Password" onKeyUp={this.passKeyUp} />
        <input type="text" placeholder="Confirm Password" onKeyUp={this.confPassKeyUp} />
        <p>{this.state.is_match ? "Passwords Match" : "Passwords don't match"}</p>
      </>
    );
  }
}