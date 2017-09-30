'use strict';
module.exports = function(app, port) {
    const fs = require('fs'),
        dir = './mocks', // The directory with all the dummie JSON
        setIndexRoutesFN = require('../routes/indexRoute'), // Index route
        createMethods = require('../routes/createMethods'); // Rest routes

    fs.readdir(dir, (err, files) => {
        console.log(`You folders contains ${files.length} files, we'll build the same number of end points *2, GET and POST.`);
        const welcomeMessage = 'Welcome to fake back-end service.';
        let len = files.length;
        console.log('Services available:');
        while (len--) {
            createMethods(app, files[len], port);
        }
        setIndexRoutesFN(app, welcomeMessage); //register the route
    });
};
