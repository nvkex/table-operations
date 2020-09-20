const router = require('express').Router();

// Controllers
const {
    configTables
} = require('../controllers/table');

// For multiple configs
router.post('/config', configTables);

module.exports = router;