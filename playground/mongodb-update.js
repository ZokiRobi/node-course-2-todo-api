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
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a53452e8453e2d08c1faf65')
    },{
        $set:{
            name:"Zoran"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((res) => {
        console.log(res);
    });

    //db.close();
});