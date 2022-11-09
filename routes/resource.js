var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var onion_controller = require('../controllers/onion');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ONION ROUTES ///
// POST request for creating a Onion.
router.post('/onions', onion_controller.onion_create_post);
// DELETE request to delete Onion.
router.delete('/onions/:id', onion_controller.onion_delete);
// PUT request to update Onion.
router.put('/onions/:id', onion_controller.onion_update_put);
// GET request for one Onion.
router.get('/onions/:id', onion_controller.onion_detail);
// GET request for list of all Costume items.
router.get('/onions', onion_controller.onion_list);
module.exports = router;
// API for our resource