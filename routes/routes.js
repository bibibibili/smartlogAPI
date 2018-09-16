var controller = require('../controllers/logController').default;

module.exports = {
    configure: function (app) {
        app.get('/log/:id', function (req, res) {
            controller.get(req,res)
        });
        app.post('/log/:id', function (req, res) {
            controller.create(req,res)
        });
        //TODO
        //Update function

       
    }
};