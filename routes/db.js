const router = require('express').Router();

const {
    collectionList,
    fieldList,
    joinCollections
} = require('../controllers/db.js');

// Get a list of collections
router.get('/get-collections', collectionList);
router.post('/get-fields', fieldList);
router.post('/join-collections', joinCollections);

module.exports = router;