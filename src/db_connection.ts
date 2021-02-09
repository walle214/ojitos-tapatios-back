import { connect } from 'mongoose';
const connectDB = async () => {
  const uri = `mongodb+srv://${process.env.MONGO_DB_URI}/?retryWrites=true`;
  try {
    await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      w: 'majority',
      user: process.env.MONGO_DB_USER,
      pass: process.env.MONGO_DB_PASSWORD,
      dbName: process.env.MONGO_DB_NAME,
    });
    console.log('Db connected'.magenta);
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
