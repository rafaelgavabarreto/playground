"use strict";

const express = require("express");

const Routes_1 = require("./Routes");
const Kernel_1 = require("../middlewares/Kernel");
const config = require('./config/index');

class Express {
    /**
     * Initializes the express server
     */
    constructor() {
        this.express = express();
        this.mountMiddlewares();
        this.mountRoutes();
    }
    /**
     * Mounts all the defined middlewares
     */
    mountMiddlewares() {
        this.express = Kernel_1.default.init(this.express);
    }
    /**
     * Mounts all the defined routes
     */
    mountRoutes() {
        this.express = Routes_1.default.mountAPI(this.express);
    }
    /**
     * Starts the express server
     */
    init() {

        // Start the server on the specified port
        this.express.listen(config.server.port, (error) => {
            if (error) {
                console.error(`Error: ${error}`);
            } 
            console.info(`Listening to port ${config.server.port}`);
        });

    }
}

exports.default = new Express();