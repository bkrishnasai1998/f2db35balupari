var onion = require('../models/onion');
// List of all Onions
exports.onion_list = async function (req, res) {
    try {
        theOnions = await onion.find();
        res.send(theOnions);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.onion_view_all_Page = async function (req, res) {
    try {
        theOnions = await onion.find();
        res.render('onion', { title: 'Onion Search Results', results: theOnions });
    }
    catch (err) {
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
exports.onion_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Onion create POST');
};
// Handle Onion delete form on DELETE.
exports.onion_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Onion delete DELETE ' + req.params.id);
};
// Handle Onion update form on PUT.
//exports.onion_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: Onion update PUT' + req.params.id);
//};

// Handle Costume create on POST.
exports.onion_create_post = async function (req, res) {
    console.log(req.body)
    let document = new onion();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"onion_weight":"10lbs", "onion_price":45, "onion_color":"Black"}
    document.onion_weight = req.body.onion_weight;
    document.onion_price = req.body.onion_price;
    document.onion_color = req.body.onion_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Costume.
exports.onion_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await onion.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

/// Handle Costume update form on PUT.
exports.onion_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await onion.findById(req.params.id)
        // Do updates of properties
        if (req.body.onion_weight)
            toUpdate.onion_weight = req.body.onion_weight;
        if (req.body.onion_price) toUpdate.onion_price = req.body.onion_price;
        if (req.body.onion_color) toUpdate.onion_color = req.body.onion_color;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};

// Handle Costume delete on DELETE.
exports.onion_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await onion.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.onion_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await onion.findById(req.query.id)
        res.render('oniondetail',
            { title: 'Onion Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a onion.
// No body, no in path parameter, no query.
// Does not need to be async
exports.onion_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('onioncreate', { title: 'Onion Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};