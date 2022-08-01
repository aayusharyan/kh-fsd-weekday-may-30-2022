class Theme extends React.Component {
  constructor() {
    super();
    console.log("Construcor Called");

    this.state = {
      theme: "light"
    };
  }

  setLightTheme = () => {
    this.setState(_ => { return { theme: "light" } });
  }

  setDarkTheme = () => {
    this.setState(_ => { return { theme: "dark" } });
  }
  
  render() {
    return <div>
      <button onClick={this.setLightTheme}>Light Mode</button>
      &nbsp;
      <button onClick={this.setDarkTheme}>Dark Mode</button>
      {/* <div style={{backgroundColor: this.state.theme == "light" ? "white" : "black", color: this.state.theme == "light" ? "black" : "white"}}> */}
      <div className={this.state.theme == "light" ? "light-mode" : "dark-mode"}>
        <p>Current Theme: {this.state.theme}</p>
        <p>This is the content</p>
      </div>

    </div>
  }
}