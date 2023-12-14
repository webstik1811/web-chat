import * as mongoose from 'mongoose';

const handleConnectionError = (err: mongoose.Error) => {
  console.error('Mongoose connection error:', err);
};

const handleDisconnection = () => {
  console.log('Mongoose connection disconnected');
};

const handleConnectionSuccess = () => {
  console.log('MongoDB Connected');
};

/**
 * Establishes a connection to the MongoDB database using the provided environment variable.
 *
 * @throws {Error} If the "MONGODB_URI" environment variable is missing or invalid.
 *
 * @async
 * @function dbConnect
 *
 * @returns {Promise<void>} A promise that resolves when the connection is established or rejects on an error.
 *
 * @example
 * // Usage
 * await dbConnect();
 */
const dbConnect = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  const mongoDbUri = process.env.MONGODB_URI;

  await mongoose
    .connect(mongoDbUri, {
      serverSelectionTimeoutMS: 20000,
    })
    .then(handleConnectionSuccess)
    .catch(handleConnectionError);

  mongoose.connection.on('error', handleConnectionError);
  mongoose.connection.on('disconnected', handleDisconnection);
};

export default dbConnect;
