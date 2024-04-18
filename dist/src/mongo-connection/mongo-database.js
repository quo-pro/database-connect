"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDatabase = void 0;
const mongoose_1 = require("mongoose");
class MongoDatabase {
    constructor(connectionString) {
        this.connection = null;
        this.connectionString = connectionString;
        mongoose_1.default.set('strictQuery', true);
        MongoDatabase.instance = this;
        if (MongoDatabase === null || MongoDatabase === void 0 ? void 0 : MongoDatabase.instance) {
            console.log(':::MONGO_CONNECTION_ACTIVE:::');
        }
    }
    async connect() {
        if (!this.connectionString) {
            throw new Error('Connection string is required.');
        }
        if (this.connection) {
            console.log(':::MONGO_ALREADY_CONNECTED:::');
            return;
        }
        try {
            this.connection = await mongoose_1.default.connect(this.connectionString);
            console.log(':::MONGO_CONNECTED:::');
        }
        catch (error) {
            console.error(':::MONGO_CONNECTION_FAILED:::', error);
            throw error;
        }
    }
    static async getDatabaseConnection() {
        if (!MongoDatabase.instance) {
            throw new Error('MongoDatabase instance not created. Create an instance with new MongoDatabase(connectionString) and call connect().');
        }
        if (!MongoDatabase.instance.connection) {
            throw new Error('MongoDatabase connection is not established. Ensure connect() has been called.');
        }
        return MongoDatabase.instance.connection;
    }
}
exports.MongoDatabase = MongoDatabase;
MongoDatabase.instance = null;
