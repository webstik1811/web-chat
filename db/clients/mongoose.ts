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
