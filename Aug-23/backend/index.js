const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;

const options = {
  origin: 'http://localhost:3002'
}

app.use(cors(options));

app.listen(port, _ => {
  console.log(`Listening on Port number ${port}`);
});

app.get('/', (request, response) => {
  response.json({
    message: "Hello World"
  });
});

app.get('/logout', (req, res) => {
  res.json({
    message: "Logout" 
  });
})

// Task A: Create an Endpoint and return a random number everytime it is called;

// Task B: Create a POST Endpoint
app.post('/ep1', (req, res) => {
  res.json({
    message: "Hello from POST handler"
  });
});


app.get('/add', (req, res) => {
  console.log(req.query.num1);
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  res.json({
    result: num1 + num2
  });
});