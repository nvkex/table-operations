const mongoose = require('mongoose');
const { joinTables } = require('./table');

exports.collectionList = async (req, res) => {

    mongoose.connection.db.listCollections().toArray((err, data) => {
        const names = [...data.map(name => name.name)]
        console.log(names);
        res.send({ names });
    });

}

exports.fieldList = (req, res) => {
    const collection = req.body.coll;

    const tempSchema = new mongoose.Schema({}, {
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
            res.send({ error: err });
        })
}

exports.joinCollections = async (req, res) => {
    const collection1 = req.body.coll1;
    const collection2 = req.body.coll2;
    const column = req.body.column;

    // Temporary schemas
    const tempSchema1 = new mongoose.Schema({}, {
        strict: false,
        strictQuery: false
    });
    const tempSchema2 = new mongoose.Schema({}, {
        strict: false,
        strictQuery: false
    });

    // Models
    const tempModel1 = mongoose.model(collection1, tempSchema1);
    const tempModel2 = mongoose.model(collection2, tempSchema2);

    var coll1Data;
    var coll2Data;

    await tempModel1.find({}, { _id: 0 })
        .then(data => {
            coll1Data = [
                ...
                data.map(entry => JSON.parse(JSON.stringify(entry)))
            ];
        }).catch(err => { res.send({ error: err }) });

    await tempModel2.find({}, { _id: 0 })
        .then(data => {
            coll2Data = [
                ...
                data.map(entry => JSON.parse(JSON.stringify(entry)))
            ];
        }).catch(err => { res.send({ error: err }) });

    const DF = joinTables(coll1Data, coll2Data, column);
    res.send({ csv: DF.to_csv() });

}