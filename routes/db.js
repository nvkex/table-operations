const router = require('express').Router();

const {
    collectionList
} = require('../controllers/db.js');

// Get a list of collections
router.post('/get-collections', collectionList);

module.exports = router;