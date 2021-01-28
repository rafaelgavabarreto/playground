require('dotenv').config({
    path: './.env.' + (process.env.NODE_ENV || 'dev')
});
console.log('process.env',process.env.MONGO_DB_NAME)
module.exports = {
    server: {
        port: process.env.SERVER_PORT
    },
    databaseOption: { 
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        authSource: 'admin',
        dbName: `${process.env.MONGO_DB_NAME}`,
    },
    database: `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_URL}:${process.env.MONGO_DB_PORT}`,
};