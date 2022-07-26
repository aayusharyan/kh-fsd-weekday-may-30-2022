class AboutMe {
  static contactButtonClicked() {
    alert("Thank you for contacting");  
  }
  static render() {
    return `
      <h2>About me</h2>
      <p>Hi, I am Aayush Sinha and I am your Educator. </p>
      <!-- <button onclick="AboutMe.contactButtonClicked()">Contact me</button> -->
      ${Button.render("Contact Me")}
    `;
  }
}