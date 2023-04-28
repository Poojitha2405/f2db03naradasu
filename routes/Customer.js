var express = require('express');
const Customer_controlers= require('../controllers/Customer');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET Customers */
router.get('/', Customer_controlers.Customer_view_all_Page );

router.get('/customers/:id', Customer_controlers.Customer_detail);

/* GET detail customer page */
router.get('/detail', Customer_controlers.Customer_view_one_Page);

router.get('/create', secured, Customer_controlers.Customer_create_Page);

router.get('/update', secured, Customer_controlers.Customer_update_Page);

router.get('/delete', secured, Customer_controlers.Customer_delete_Page);

module.exports = router;

