var onion = require('../models/onion');
// List of all Onions
exports.onion_list = async function(req, res) {
    try{
    theOnions = await onion.find();
    res.send(theOnions);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// List of all Onions
//exports.onion_list = function(req, res) {
//res.send('NOT IMPLEMENTED: Onion list');
//};
// for a specific Onion.
exports.onion_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Onion detail: ' + req.params.id);
};
// Handle Onion create on POST.
exports.onion_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Onion create POST');
};
// Handle Onion delete form on DELETE.
exports.onion_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Onion delete DELETE ' + req.params.id);
};
// Handle Onion update form on PUT.
exports.onion_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Onion update PUT' + req.params.id);
};