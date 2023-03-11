import mongoose from 'mongoose';

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected === 1) {
    return console.log('already connected');
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      return console.log('usando last connection');
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URI || '');

  mongoConnection.isConnected = 1;
  console.log('conectado a mongodb', process.env.MONGO_URI);
};

export const disconnect = async () => {
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log('disconnected of mongodb');
};
