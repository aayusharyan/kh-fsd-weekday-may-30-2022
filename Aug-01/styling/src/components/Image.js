class Image extends React.Component {
  constructor() {
    super();

    this.state = {show: true};
  }

  toggleShow = _ => {
    this.setState(current => {
      return {show: !current.show};
    });
  }
  
  render() {
    return <div>
      <button onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"}</button>
      <br />
      <br />
      {this.state.show == true ? 
        <img src="https://media.istockphoto.com/photos/chocolate-assortment-background-top-view-of-different-kinds-of-picture-id1276645382?s=170667a" />
        :
        false
      }
    </div>
  }
}