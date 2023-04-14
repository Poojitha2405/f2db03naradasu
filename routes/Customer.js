var express = require('express');
const Customer_controlers= require('../controllers/Customer');
var router = express.Router();
/* GET Customers */
router.get('/', Customer_controlers.Customer_view_all_Page );
module.exports = router;
