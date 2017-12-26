const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

let doc = {
    firstName: process.argv[2],
    lastName: process.argv[3],
}

mongo.connect(url, (err, db) => {
    if (err) throw err
    let docs = db.collection('docs')
    docs.insert(doc, (err, data) => {
        if (err) throw err
        console.log(JSON.stringify(doc))
        db.close()
    })
})