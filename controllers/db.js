const mongoose = require('mongoose');

exports.collectionList = async(req, res) => {

    mongoose.connection.db.listCollections().toArray( (err, data) => {
        const names = [...data.map(name => name.name)]
        console.log(names);
        res.send({names});
    });

}

exports.joinCollections = async(req,res) => {
    const collection1 = req.body.coll1;

    const tempSchema = new mongoose.Schema({},{
        strict: false,
        strictQuery: false
    });

    const tempModel = mongoose.model(collection1, tempSchema);

    tempModel.findOne({})
    .then(data => {
        console.log(data);
        res.send(Object.keys(data._doc));
    })
    .catch(err => {
        console.log(err)
    })
}