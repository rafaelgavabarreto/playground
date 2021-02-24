"use strict"; 
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const cluster = require('cluster');
const app = require('./providers/app');
const config = require('./config/index');
// const numCPUs = require('os').cpus().length;
const numCPUs = 1;

let server;

if (cluster.isMaster) {
    
  console.info(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`worker ${worker.process.pid} died`);
  });
} else {

    const dsn = config.database;
    const options = config.databaseOption;

    mongoose.Promise = bluebird;
    mongoose.connect(dsn, options, (error) => {
        // handle the error case
        if (error) {
            console.info('Failed to connect to the Mongo');
            console.error(error);
            throw error;
        }
        else {
            server = app.listen(config.server.port, () => {
                console.info(`Worker ${process.pid} start`);
                console.info('Connected to mongo: ' + dsn);
                console.info(`Listening to port ${config.server.port}`);
            });
        }
    });

}