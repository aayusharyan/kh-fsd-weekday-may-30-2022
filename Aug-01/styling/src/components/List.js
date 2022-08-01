class List extends React.Component {
  render() {
    const elements = (new Array(20)).fill("ABCD");
    console.log(elements);
    return <ul>
      {elements.map((element, idx) => {
        // reebbsdbnm
        return <li key={idx} style={{color: idx % 2 == 0 ? "red" : "blue"}}>{element}</li>
      })}
      {/* sfhgsfhjs
      dsfg
      dfg
      dfg
      dfg
      hjfdghjg */}
    </ul>
  }
}