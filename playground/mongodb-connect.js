// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect");
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err)
    //         return console.log('Unable to insert todo', err);

    //     console.log(JSON.stringify(res.ops,undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name:'Zoran',
    //     age:31,
    //     location:'Celarevo'
    // },(err, res) => {
    //     if(err)
    //     return console.log('Unable to insert user',err);

    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
    // });
    db.close();
});