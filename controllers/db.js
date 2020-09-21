const mongoose = require('mongoose');

exports.collectionList = async(req, res) => {

    mongoose.connection.db.listCollections().toArray( (err, data) => {
        const names = [...data.map(name => name.name)]
        console.log(names);
        res.send({names});
    });

}

exports.listFields = (req,res) => {
    const collection = req.body.coll;

    const tempSchema = new mongoose.Schema({},{
        strict: false,
        strictQuery: false
    });

    const tempModel = mongoose.model(collection, tempSchema);

    tempModel.findOne({})
    .then(data => {
        const fields = Object.keys(data._doc)
        res.send(fields);
    })
    .catch(err => {
        console.log(err);
        res.send({error: err});
    })
}

exports.joinCollections = (req, res) => {

}