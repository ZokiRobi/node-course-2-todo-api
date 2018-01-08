// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect");
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').deleteMany({text:"eat lunch"}).then((res) => {
    //     console.log(res);
    // });
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });
    db.collection('Users').deleteOne({_id:new ObjectID("5a5338f85147b12df4fd1fc4")}).then((res) => {
        console.log(res);
    });
    //db.close();
});