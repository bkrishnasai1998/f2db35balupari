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

// VIEWS
// Handle a show all view
exports.onion_view_all_Page = async function(req, res) {
    try{
    theOnions = await onion.find();
    res.render('onion', { title: 'Onion Search Results', results: theOnions });
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
//exports.onion_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: Onion detail: ' + req.params.id);
//};
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

// Handle Costume create on POST.
exports.onion_create_post = async function(req, res) {
    console.log(req.body)
    let document = new onion();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"onion_weight":"10lbs", "onion_price":45, "onion_color":"Black"}
    document.onion_weight = req.body.onion_weight;
    document.onion_price = req.body.onion_price;
    document.onion_color = req.body.onion_color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific Costume.
exports.onion_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await onion.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };