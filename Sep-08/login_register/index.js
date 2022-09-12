const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://username:password1234@cluster0.cprsjzo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const port = 3005;

app.use(cors());

app.listen(port, _ => {
  console.log("Server started");
  client.connect();
});


app.get("/login", (req, res) => {
  const data = client.db("sep_08").collection("users").find({
    username: req.query.username,
    password: req.query.password
  });
  data.toArray().then((result) => {
    if(result.length > 0) {
      res.send("Login Successful");
    } else {
      res.send("Login Failed");
    }
    // res.json({
    //   message: "Success",
    //   data: result,
    // })
  })

  console.log(data);

});

app.get('/register', (req, res) => {
  const collection = client.db("sep_08").collection("users");
  // perform actions on the collection object
  collection.insertOne({
    username: req.query.username,
    password: req.query.password
  });
  res.send("Resigtration Successful");
  
});

const randomNumber = len => {
  const ran = Math.floor(Math.random() * len);
  return ran;
}

app.get("/insert_many", (req, res) => {
  client.db("sep_08").collection("numbers").insertMany([{
    num: randomNumber(1000)
  }, {
    num: randomNumber(1000)
  }, {
    num: randomNumber(1000)
  },{
    num: randomNumber(1000)
  }]);

  res.send("Inserted 4 records successfully");
});

app.get("/find_range", (_, res) => {
  const data = client.db("sep_08").collection("numbers").find({
    num: {$gt: 700, $lt: 800}
  });
  data.toArray().then(result => {
    res.json({
      status: "Successful",
      numbers: result
    })
  })
})


/*
  const result = await data.toArray();
  res.json({
    numbers: result
  });
*/