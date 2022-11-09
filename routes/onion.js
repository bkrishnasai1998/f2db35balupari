var express = require('express');
const onion_controlers= require('../controllers/onion');
var router = express.Router();

/* GET home page. */
router.get('/', onion_controlers.onion_view_all_Page);

module.exports = router;
