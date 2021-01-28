const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/index.js');

let server;

mongoose.connect(config.database, config.databaseOption).then(() => {
    console.info('Connected to MongoDB');
    server = app.listen(config.server.port, () => {
        console.info(`Listening to port ${config.server.port}`);
    });
});