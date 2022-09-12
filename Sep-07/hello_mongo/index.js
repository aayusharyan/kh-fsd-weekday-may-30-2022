const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://username:password1234@cluster0.cprsjzo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  (async _ => {
    await collection.insertOne({
      caption: "Hello Mongo Again"
    })
  

    client.close();
  })();
});