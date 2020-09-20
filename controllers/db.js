const mongoose = require('mongoose');

exports.collectionList = async(req, res) => {
    const URL = req.body.dbURL;

    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( response => {console.log('Connected to DB')})
    .catch( err => {console.log(e)});

    mongoose.connection.db.listCollections().toArray( (err, data) => {
        const names = [...data.map(name => name.name)]
        console.log(names);
        res.send({names});
    })
}