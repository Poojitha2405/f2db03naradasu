const mongoose = require("mongoose")
const CustomerSchema = mongoose.Schema({
    Cust_Name: String,
    Cust_Age: {type: Number, min: 1, max: 100},
    Mail_Id: {type:String, required:true}
})
module.exports = mongoose.model("Customer",
CustomerSchema)