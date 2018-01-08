// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect");
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').find(
    //     {
    //         _id:new ObjectID("5a477d87c956060c2424c994")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // }); 
    db.collection('Users').find({name:"".startsWith('P')}).toArray().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    }, (err) => {
        console.log(err);
    });

    //db.close();
});