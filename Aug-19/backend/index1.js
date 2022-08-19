const express = require('express');
const app = express();
const PORT = 3003;

// app.get('/', (req, res) => {
//   res.send("Hey everyone");
// })

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.json({
    message: "Hello everyone",
    status: "successful",
    list_abcd: [
      'abcd',
      'efgh',
      'ijkl',
      'mnop'
    ]
  });
})

app.listen(PORT, () => {
  console.log("Server Start Successful");
});