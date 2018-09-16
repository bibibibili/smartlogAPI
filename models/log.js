const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = mongoose.model('userModel').schema;
const db = require('../utils/db');

var LogSchema = new Schema({
  SHIPMENT_ID: {
    type: String,
    required: true,
    unique: true
  },
  USER_ID: [{
    type: String,
    required: false
  }],
  GROUP_ID: [{
    type: String,
    required: false
  }],
  TRANSACTION_ID: [{
    type: String,
    required: false
  }]

}, { collection: 'Log' })

var LogModel = mongoose.model('LogModel', LogSchema);
module.exports = {
  LogModel
}
