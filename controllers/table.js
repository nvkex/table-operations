const { DataFrame } = require('pandas-js');

const joinTables = (arr1, arr2, col) => {
    const df1 = new DataFrame(arr1);
    const df2 = new DataFrame(arr2);
    const newDf = df1.merge(df2, [col], 'inner');
    return newDf;

}

const sortByField = (req, res) => {
    res.send({ msg: 'Hello' })
}

const configTables = (req, res) => {
    const { join, sort } = req.query;
    var DF;

    // Join Tables
    if (join) {
        DF = joinTables(req.body.df1, req.body.df2, req.body.col);
    }
    if (sort) {

    }

    res.send({ csv: DF.to_csv() });

}

module.exports = { joinTables, configTables }
