class App {
  static render() {
    return `
    ${Heading.render()}
    ${Button.render()}
    <br />
    <br />
    ${Button.render()}
    <br />
    ${Paragraph.render()}
    <br />
    ${AboutMe.render()}
    `;
  }
}