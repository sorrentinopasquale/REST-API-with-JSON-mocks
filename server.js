const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000; // Don't use alternative port, because some projects will point to it

const setRoutes = require('./routes/generalRoutes'); //importing route
setRoutes(app, port); //register the route

app.listen(port);
console.log('fake-JSON-backend server started on: ' + port);