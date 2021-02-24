'use strict';

const testDatabase = require('./testDatabase');
const Users = require('../src/models/users');
const { deleteOne } = require('../src/models/users');

testDatabase();

describe('.:. Users .:.', () => {

    it('can be created correctly', async () => {
        expect(async () => {
            await Users.create(user);
        }).not.toThrow();
    });

    it('exists after being created', async () => {
        await Users.create(user2);
        const userResponse = await Users.findOne();
        expect(userResponse.name).toBe(user2.name);
    });

    it('can be updated correctly', async () => {
        expect(async () => {
            await Users.findOneAndUpdate(user, userUpdate);
        }).not.toThrow();
    });

    it('can be deleted correctly', async () => {
        expect(async () => {
            await Users.findOneAndDelete({ userId: user.userId });
        }).not.toThrow();
    });

});

const user = {
    "userId": "1234",
    "email": "a@a.com",
    "password": "a@a.com",
    "name": "rafael"
};

const user2 = {
    "userId": "12345",
    "email": "a@a.com",
    "password": "a@a.com",
    "name": "rafael"
};

const userUpdate = {
    "name": "rafael 2"
};
