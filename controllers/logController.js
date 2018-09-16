const LogModel = require('../models/log').LogModel;
const UserModel = require('../models/user').userModel;
function operations() {
    this.get = function (req, res) {

        LogModel.findOne({ SHIPMENT_ID: req.params.id }).then((log) => {
            console.log('Found log: ' + log)
            res.send(log);

        }, (e) => {
            res.status(400).send(e)
        })
    };
    this.create = function (req, res) {

        var log = new LogModel({
            SHIPMENT_ID: req.body.SHIPMENT_ID,
            USER_ID: req.body.USER_ID,
            GROUP_ID: req.body.GROUP_ID,
            TRANSACTION_ID: req.body.TRANSACTION_ID

        })
        log.save().then((log) => {
            res.send(log)
        }, (e) => {
            res.status(400).send(e)
        })
    };
    this.update = function (req, res) {
        //find and update using shipmentid
        LogModel.findOne({ SHIPMENT_ID: req.params.id }).then((log) => {
            //TODO
            log.save(function (err, updatelog) {
                if (err) return handleError(err);
                res.send(updatelog);
              });
           

        }, (e) => {
            res.status(400).send(e)
        })
    };

}
module.exports = new operations();