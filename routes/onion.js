var express = require('express');
const onion_controlers = require('../controllers/onion');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', onion_controlers.onion_view_all_Page);

/* GET detail onion page */
router.get('/detail', onion_controlers.onion_view_one_Page);

/* GET create onion page */
router.get('/create',secured, onion_controlers.onion_create_Page);

/* GET create update page */
router.get('/update',secured, onion_controlers.onion_update_Page);

/* GET delete onion page */
router.get('/delete',secured, onion_controlers.onion_delete_Page);

module.exports = router;
