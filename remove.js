const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/' + process.argv[2]

mongo.connect(url, (err, db) => {
    if (err) throw err
    let collection = db.collection(process.argv[3])
    collection.remove({
        _id: process.argv[4]
    }, (err) => {
        if (err) throw err
        db.close()
    })
})