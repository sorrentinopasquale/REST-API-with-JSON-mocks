'use strict';
module.exports = function(app, welcomeMessage) {
    app.route('/')
        .get(function(req, res) {
            res.statusCode = 200;
            res.send(welcomeMessage);
        })
        .post(function(req, res) {
            res.statusCode = 200;
            res.send(welcomeMessage);
        })
};
