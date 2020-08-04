var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learning_mongo';

var findDocuments = function(db, callback) {
  var collection = db.collection("tours");

  collection.find({"tourPackage":"Snowboard Cali"}).toArray((err, docs) => {
    console.log(docs);
    callback;
  })
}

MongoClient.connect(url, (err, db) => {
  console.log("Connection Successful");
  findDocuments(db, () => {
    db.close();
  });
})

