var express = require('express');
const onion_controlers= require('../controllers/onion');
var router = express.Router();

/* GET home page. */
router.get('/', onion_controlers.onion_view_all_Page);

/* GET detail onion page */
router.get('/detail', onion_controlers.onion_view_one_Page);

/* GET create onion page */
router.get('/create', onion_controlers.onion_create_Page);

module.exports = router;
