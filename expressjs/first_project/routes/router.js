let con = require('../logics_function/controller');

let express = require('express');

let router = express.Router();

router.get('/', con.index)
router.get('/a', con.about)

module.exports = router;