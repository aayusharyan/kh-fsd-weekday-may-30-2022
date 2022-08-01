class Users extends React.Component {
  constructor() {
    super();

    this.state = { users:[] };
    
    fetch("https://reqres.in/api/users").then(response => {
      response.json().then(data => {
        this.setState(_ => { return { users: data.data } });
      });
    });
  }

  render() {
    return <div>
      <ul>
        {this.state.users.map((e, idx) => {
          return <li key={idx}>{e.first_name} {e.last_name} ({e.email})</li>
        })}
      </ul>
    </div>
  }
}