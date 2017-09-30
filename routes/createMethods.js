'use strict';
module.exports = function(app, fileName, port) {
    const firstLetter = (fileName.charAt(0).toUpperCase()),
        endPointName =  firstLetter + fileName.slice(1).replace('.json','');

    app.get('/get' + endPointName, function (req, res) {
        res.statusCode = 200;
        res.send(require(`../mocks/${fileName}`));
    });
    app.post('/post'  + endPointName, function(req, res) {
        res.statusCode = 200;
        res.send(require(`../mocks/${fileName}`));
    });
    console.log(`http://localhost:${port}/get${endPointName}\nhttp://localhost:${port}/post${endPointName}` );
};
