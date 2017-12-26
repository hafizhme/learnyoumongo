const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/' + process.argv[2]

const user = {
    "name": "Tina",
    "age": 30,
    "username": "tinatime"
}
mongo.connect(url, (err, db) => {
    if (err) throw err
    let users = db.collection('users')
    users.update({
        username: "tinatime"
    }, {
        $set: {
            age: 40
        }
    }, (err) => {
        if (err) throw err
        db.close()
    })
})