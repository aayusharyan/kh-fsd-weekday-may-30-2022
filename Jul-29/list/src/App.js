class App extends React.Component {
  render() {
    const students = [
      {name: "Unnati",  marks: 10},
      {name: "Tejaswi", marks: 20},
      {name: "Sandeep", marks: 30},
      {name: "Kaustubh",marks: 40},
      {name: "Apurva",  marks: 45},
      {name: "Harika",  marks: 49}
    ];

    return <div>
      <h2>Jul-29 session</h2>
      <ul>
        {students.map((elem, idx) => {
          // if(elem.marks < 25) {
          //   return false;
          // }
          //Task A -> IF the student's name does not start with a vowel, return false;
          return <MarksListItem name={elem.name} marks={elem.marks} key={idx} />
        })}
      </ul>
      <hr />
      <State />
    </div>
  }
}