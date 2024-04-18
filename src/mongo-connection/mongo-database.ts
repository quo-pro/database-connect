import mongoose, { Mongoose } from 'mongoose';

export class MongoDatabase {
  private static instance: MongoDatabase | null = null;
  private connectionString: string;
  private connection: Mongoose | null = null;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
    mongoose.set('strictQuery', true);
    MongoDatabase.instance = this;
    if (MongoDatabase?.instance) {
      console.log(':::MONGO_CONNECTION_ACTIVE:::');
    }
  }

  public async connect(): Promise<void> {
    if (!this.connectionString) {
      throw new Error('Connection string is required.');
    }

    if (this.connection) {
      console.log(':::MONGO_ALREADY_CONNECTED:::');
      return;
    }

    try {
      this.connection = await mongoose.connect(this.connectionString);
      console.log(':::MONGO_CONNECTED:::');
    } catch (error) {
      console.error(':::MONGO_CONNECTION_FAILED:::', error);
      throw error;
    }
  }

  public static async getDatabaseConnection(): Promise<Mongoose> {
    if (!MongoDatabase.instance) {
      throw new Error(
        'MongoDatabase instance not created. Create an instance with new MongoDatabase(connectionString) and call connect().'
      );
    }

    if (!MongoDatabase.instance.connection) {
      throw new Error(
        'MongoDatabase connection is not established. Ensure connect() has been called.'
      );
    }

    return MongoDatabase.instance.connection;
  }
}
