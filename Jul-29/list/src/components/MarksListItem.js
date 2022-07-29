class MarksListItem extends React.Component {
  render() {
    return <li>{this.props.name} ({this.props.marks} marks)</li>;
  }
}