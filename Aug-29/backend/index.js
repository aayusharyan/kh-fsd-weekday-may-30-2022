const express = require('express');
const app = express();
const port = 3006;
const fs = require('fs');

app.listen(port, _ => {
  console.log("Server has started");
});

app.get('/', (_, res) => {
  res.json({
    message: "Successful"
  });
});

app.get('/ls', (_, res) => {
  fs.readdir('./', {}, (error, files) => {
    res.json({
      items: files
    });
  });
});

app.get('/important', (_, res) => {
  // const passowrd = req.query.passowrd;
  fs.readFile('./important.txt', {}, (error, data) => {
    // if(data == passowrd) {

    // }
    res.send(data);
  });
});

app.get('/important2', (_, res) => {
  fs.readFile('./important.html', {}, (error, data) => {
    res.set({
      'Content-Type': 'text/html'
    });
    res.send(data);
  })
});

app.get('/new_file', (req, res) => {
  // const username = req.query.username;

  // fs.writeFile(`./${usernamee}.txt`, 'XYZ XYZ', (error) => {
  //   console.log(error);
  //   res.send("Written successfully");
  // })
});

app.get('/append', (_, res) => {
  fs.appendFile('./important.txt', 'ABCD ABCD', (error) => {
    res.send("Appended successfully");
  })
})

app.get('/delete', (_, res) => {
  fs.unlink('./new_file.txt', (error) => {
    res.send("File deleted successfuly");
  })
})