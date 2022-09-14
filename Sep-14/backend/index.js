const express = require('express');
const app = express();
const port = 3004;

app.listen(port, _ => {
  console.log("Server is started");
});

app.get('/', (_, res) => {
  res.send("Hello everyone");
});

app.get('/add', (req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  if(num1 == undefined || num2 == undefined) {
    res.status(400).json({
      message: "Invalid request, please check again"
    });
    return;
  }

  const sum = parseInt(num1) + parseInt(num2);
  res.json({
    message: "Addition Successful",
    result: sum
  });
})

app.get('/random', (_, res) => {
  const r = Math.random();
  res.json({
    result: r
  })
})