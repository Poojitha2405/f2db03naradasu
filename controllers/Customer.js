var customer = require('../models/customer');
// List of all Costumes
exports.customer_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Customer list');
};
// for a specific Costume.
exports.customer_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await customer.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Costume create on POST.
exports.customer_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Customer create POST');
};
// Handle Costume delete form on DELETE.
exports.customer_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await customer.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Costume update form on PUT.
exports.customer_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await customer.findById( req.params.id)
    // Do updates of properties
    if(req.body.Cust_Name) toUpdate.Cust_Name = req.body.Cust_Name;
    if(req.body.Cust_Age) toUpdate.Cust_Age = req.body.Cust_Age;
    if(req.body.Mail_Id) toUpdate.Mail_Id = req.body.Mail_Id;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
   };

// List of all Customer
exports.customer_list = async function(req, res) {
    try{
    thecustomer = await customer.find();
    res.send(thecustomer);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.customer_view_all_Page = async function(req, res) {
    try{
    thecustomer = await customer.find();
    res.render('customer', { title: 'Customer Search Results', results: thecustomer });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.customer_create_post = async function(req, res) {
    console.log("request body params" + req.body.Cust_Name)
    let document = new customer();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Cust_Name = req.body.Cust_Name;
    document.Cust_Age = req.body.Cust_Age;
    document.Mail_Id = req.body.Mail_Id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle a show one view with id specified by query
exports.customer_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await customer.findById( req.query.id)
    res.render('customerdetail',
   { title: 'Customer Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.customer_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('customercreate', { title: 'Customer Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle building the view for updating a costume.
// query provides the id
exports.customer_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await customer.findById(req.query.id)
    console.log(result)
     res.render('customerupdate', { title: 'Customer Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.customer_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await customer.findById(req.query.id)
    res.render('customerdelete', { title: 'Customer Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };