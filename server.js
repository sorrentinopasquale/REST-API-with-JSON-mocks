//Starting nodemon and using express js
const express = require('express'),
    app = express(),
    port = process.env.myPort || 3000;
    app.listen(port);
    console.log('The server is listening on the port:' + port );