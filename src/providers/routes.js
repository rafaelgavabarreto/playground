"use strict";

const Api = require("./../routes/index");

class Routes {
    // mountIn(_express) {
    //     console.info('Routes :: Mounting In Routes...');
    //     return _express.use('/', Web_1.default);
    // }
    // mountOut(_express) {
    //     console.info('Routes :: Mounting Out Routes...');
    //     return _express.use(`/${apiPrefix}`, Api_1.default);
    // }
    // mountOff(_express) {
    //     console.info('Routes :: Mounting API Routes...');
    //     return _express.use(`/${apiPrefix}`, Api_1.default);
    // }
    mountAPI(_express) {
        console.info('Routes :: Mounting API Routes...');
        return _express.use(`/${playground}`, Api);
    }
}

exports.default = new Routes;