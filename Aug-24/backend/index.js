const express = require('express');
const cors = require('cors');
const port = 3006;

const options = {
  origin: '*'
};

const app = express();
app.use(cors(options));

app.listen(port, _ => {
  console.log(`App started at ${port}`);
});

app.get('/', (_, res) => {
  res.send("Server is running fine");
});

const users = {
  user1: "Password 1",
  user2: "PW2",
  test: "test"
}

app.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  if(username !== undefined && password !== undefined) {
    if(users[username] == password) {
      res.send("Login Successful");
    } else {
      res.send("Incorrect username/password");
    }
  } else {
    res.send("Invalid Request");
  }
});


// Task: Create an endpoint which accepts a number and returns whether it is prime number or not.

// const isPrime = () => {

// }

// app.get('/check-prime', () => {
//   if(isPrime(req.query.num)) {

//   }
// })

app.get("/div", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  // num1 = "10";
  res.json({
    response: num1 / num2
  });
})

app.get("/custom-status", (_, res) => {
  res.send(305, {
    message: "Blah blah"
  });
})