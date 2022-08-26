const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3007;
const options = {
  origin: 'http://localhost:3000'
}

const app = express();
app.use(cors(options));

const myMiddleware = (_, res, next) => {

  res.set({
    'customHeader': "Aayush Header"
  });
  next();
}

app.use(myMiddleware) ;
app.use(bodyParser.text());
// app.user(bodyParser.json());

app.listen(port, _ => {
  console.log(`Server started at ${port}`);
});

// app.get('/status', (_, res) => {
//   // res.set({
//   //   'Access-Control-Allow-Origin': "*"
//   // });
//   res.send("Status: Active");
// });

app.get('/status2', (_, res) => {
  res.send("Another Status Active");
});

app.get('/status', (req, res) => {
  console.log(req.body);
  res.send(`Hi, you have sent, ${req.body}`);
});