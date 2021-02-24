"use strict";

const mongoose = require("mongoose");
const bluebird = require("bluebird");
const config = require('./config/index');

class Database {
    // Initialize your database pool
    static init() {
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
                console.info('Connected to mongo: ' + dsn);
            }
        });
    }
}

exports.Database = Database;
exports.default = mongoose;