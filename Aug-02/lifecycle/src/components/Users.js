class Users extends React.Component {
  constructor() {
    super();

    this.state = {users: []}; 
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      response.json().then(data => {
        // this.setState(_ => {
        //   return {users: data};
        // });
        this.setState({users: data});
      });
    });
  }

  render() {
    return <div>
      <p>List of users</p>
      {this.state.users.length == 0 ? <div>
        <p>Loading...</p>
      </div> : <div>
        <ul>
          {this.state.users.map((e, i) => {
            return <li key={i}>{e.name}</li>
          })}
        </ul>
      </div>}
    </div>
  }
}