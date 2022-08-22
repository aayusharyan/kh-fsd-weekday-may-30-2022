const express = require('express');
const app = express();
const port = 3002;

app.listen(port, () => {
  console.log("App started successfully");
});


app.get("/", (request, response) => {
  response.json({
    fname: "Aayush",
    lname: "Sinha",
    role: "Educator",
    location: "Bengaluru",
    country: "India"
  });
  // console.log({
  //   fname: "Aayush",
  //   lname: "Sinha"
  // });
});