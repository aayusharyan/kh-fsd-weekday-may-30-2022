const express = require('express');
const app = express();
const port = 3006;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const uri = "mongodb+srv://username:password1234@cluster0.cprsjzo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("sep_09").collection("todos");

app.listen(port, _ => {
  console.log("The server has started")
});

// TODO Application
// 1. Add a new Todo ✔️
// 2. Get the List of all Todos ✔️
// 3. Edit an action ✔️
// 4. Mark as done ✔️
// 5. Delete that todo item ✔️

app.get("/add", (req, res) => {
  const todoItem = req.query.item;
  if(todoItem == undefined) {
    res.status(400).json({
      status: "Unsuccessful"
    });
    return;
  }
  collection.insertOne({
    item: todoItem,
    isDone: false,
    deleted: false 
  });
  res.json({
    status: "Successful"
  });
});

app.get("/list", (_, res) => {
  (async _ => {
    const data = await collection.find().toArray();
    res.json({
      status: "Successful",
      data: data
    });
  })();
});

app.get("/edit", (req, res) => {
  const id = req.query.id;
  const todoItem = req.query.item;
  if(id == undefined || todoItem == undefined) {
    res.status(400).json({
      status: "Unsuccessful"
    });
    return;
  }

  collection.updateOne({
    _id: ObjectId(id)
  }, {
    $set: {
      item: todoItem
    },
  });
  res.json({
    status: "Successful"
  });
})

app.get("/done", (req, res) => {
  const id = req.query.id;
  if(id == undefined) {
    res.status(400).json({
      status: "Unsuccessful" 
    });
  }

  collection.updateOne({
    _id: ObjectId(id)
  }, {
    $set: {
      isDone: true
    }
  });

  res.json({
    status: "Successful"
  });
});

app.get("/delete", (req, res) => {
  const id = req.query.id;
  if(id == undefined) {
    res.status(400).json({
      status: "Unsuccessful"
    });
  }

  collection.deleteOne({
    _id: ObjectId(id)
  });
  res.json({
    status: "Successful"
  });
})