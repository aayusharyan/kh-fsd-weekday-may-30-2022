class App extends React.Component {
  buttonClicked = () => {
    alert("Thank you for contacting me");
  }
  render() {
    return <div>
      {/* <h2 className="heading">Aug-01 session</h2>
      <hr />
      <h1>Hi, I am Aayush</h1>
      <p>I am an educator</p>
      <p>Things I like:</p>
      <ul>
        <li>JS</li>
        <li>Food</li>
      </ul>
      <button onClick={this.buttonClicked}>Contact me</button>
      <Internal />
      <List /> */}
      {/* <Theme /> */}
      {/* <Image /> */}
      <Users />
    </div>
  }
}