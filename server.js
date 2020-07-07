
const path = require('path');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
//  let noteCount = 1;
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// static files
app.use(express.static('public'));
// create a controller for our note app so we can handle the routes and the rendering of
// views then require the controllers (modules)
app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

// Start the server & listen for requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});