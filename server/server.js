const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//is one way to customize our express server and we are going to be using it to register some middleware
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

//this lets us set up some function to run when someone makes a request to our server
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(port, () => { console.log('server is up') });

//to run the server we do on the console: node server/server.js

//we now need to serve up index.html for all files that dont have a match. As /create is not a separated file, it's just a route.