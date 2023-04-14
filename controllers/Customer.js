var Customer = require('../models/Customer');
// List of all Customers
exports.Customer_list = async function(req, res) {
//res.send('NOT IMPLEMENTED: Customer list');
try{
    Customer = await Customer.find();
    res.send(Customer);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific Customer.
exports.Customer_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Customer detail: ' + req.params.id);
};

// Handle Customer create on POST.
exports.Customer_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Customer();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Customer_type":"goat", "cost":12, "size":"large"}
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
    


// Handle Customer delete form on DELETE.
exports.Customer_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Customer delete DELETE ' + req.params.id);
};
// Handle Customer update form on PUT.
exports.Customer_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Customer update PUT' + req.params.id);
};




// VIEWS
// Handle a show all view
exports.Customer_view_all_Page = async function(req, res) {
    try{
    Customer = await Customer.find();
    res.render('Customer', { title: 'Customer Search Results', results: Customer });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

   
    
    