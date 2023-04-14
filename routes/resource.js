var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Customer_controller = require('../controllers/Customer');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Customer ROUTES ///
// POST request for creating a Costume.
router.post('/Customers', Customer_controller.Customer_create_post);
// DELETE request to delete Costume.
router.delete('/Customers/:id', Customer_controller.Customer_delete);
// PUT request to update Costume.
router.put('/Customers/:id', Customer_controller.Customer_update_put);
// GET request for one Costume.
router.get('/Customers/:id', Customer_controller.Customer_detail);
// GET request for list of all Costume items.
router.get('/Customers', Customer_controller.Customer_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"Customers", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
