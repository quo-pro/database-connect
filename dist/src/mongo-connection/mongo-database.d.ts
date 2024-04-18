import { Mongoose } from 'mongoose';
export declare class MongoDatabase {
    private static instance;
    private connectionString;
    private connection;
    constructor(connectionString: string);
    connect(): Promise<void>;
    static getDatabaseConnection(): Promise<Mongoose>;
}
