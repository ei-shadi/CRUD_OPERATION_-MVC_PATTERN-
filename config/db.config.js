import mongoose from "mongoose";

const DB_CONNECT = () => {

mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'my-store'
})
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err.message);
  });

};

export default DB_CONNECT;