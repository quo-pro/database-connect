
# @quo-pro/database-connect

## Description
The `@quo-pro/database-connect` package provides an efficient solution for managing MongoDB connections in quo-pro applications, leveraging Mongoose for streamlined interactions. It establishes a global MongoDB connection, enabling schemas to be imported and utilized throughout the application without the need for repetitive connection initializations.

## Installation
```bash
npm install @quo-pro/database-connect
```

## Usage
### Establishing Database Connection
At the application's entry point or startup stage, import the package to initiate a global database connection:

```typescript
import { MongoDatabase } from '@quo-pro/database-connect';

const mongoConnection = new MongoDatabase(connectionString);
await mongoConnection.connect();

// rest of application startup logic
```

This ensures that the MongoDB connection is established before the application starts, a recommended practice for database-dependent applications.


### Accessing the Database Connection
After the global connection is established, you can access the database connection from anywhere within your application without initiating a new connection:

```typescript
import { MongoDatabase } from '@quo-pro/database-connect';
const mongooseConnection = await MongoDatabase.getDatabaseConnection();
```

### Using Schemas
Once the global connection is established, models (e.g., User model) can be imported and used anywhere within the application without requiring a separate connection initiation:

```typescript
// Example of importing a User model
import { UserModel } from '@quo-pro/database-connect';

// Use UserModel directly for database operations
```

This approach simplifies database interactions, as you can directly use models or schemas without additional connection checks.

## Features
- Global MongoDB connection setup using Mongoose.
- Seamless and direct usage of schemas throughout the application.
- Promised-based startup ensures database readiness before application launch.

## Author
Israel Ayokunnu

## License
ISC

## Contributing
Feel free to contribute. see https://github.com/quo-pro/database-connect/blob/main/PUBLISH.md

## Dependencies
- `@quo-pro/commons`
- `mongoose`


