const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');

var userSchema = new Schema({
    WHSEID: {
        type: String,
        required: false,
    },
    CUSTOMER_ID: {
        type: String,
        required: false
    },
    CARRIER_ID: {
        type: String,
        required: false
    },
    SUPPLIER_ID: {
        type: String,
        required: false
    }

})
var userModel = mongoose.model('userModel', userSchema);
module.exports = {
    userModel
}
