'use strict';
/*
  Initializing the database in memory for tests
*/
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();

const testDatabase = () => {
  beforeAll(async () => {
    const uri = await mongod.getUri();

    const databaseOption = {
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    };

    await mongoose.connect(uri, databaseOption);
  });

  beforeEach(async () => {
    await Object.values(mongoose.connection.collections).map(async (collection) => collection.deleteMany());
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoose.disconnect();
    await mongod.stop();
  });
};

module.exports = testDatabase;