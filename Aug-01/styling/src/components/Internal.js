class Internal extends React.Component {
  render() {
    const textStyle = {color: "red", backgroundColor: "yellow"};
    return <div>
      <hr />
      <hr />
      <h2 style={{backgroundColor: "yellow"}} >Internal CSS</h2>
      <hr />
      <h1 style={textStyle}>Hi, I am Aayush</h1>
      <p>I am an educator A &amp; B</p>
      <p>Things I like:</p>
      <ul>
        <li>JS</li>
        <li>Food</li>
      </ul>
    </div>
  }
}

//background-color <- Kebab Case
//backgroundColor <- camel Case