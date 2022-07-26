class Button {
  static render(text = "Click Me") {
    // if(text == undefined) {
    //   text = "Click Me";
    // }
    return `<button>${text}</button>`;
  }
}