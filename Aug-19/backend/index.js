const express = require('express')
const app = express()
const port = 3004 //3000



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// app.get('/', (req, res) => {
//   // res.send('Hello World!')
//   res.json({
//     message: "Hello everyone",
//     status: "successful",
//   });
// })