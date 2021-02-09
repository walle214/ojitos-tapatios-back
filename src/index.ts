import 'colors';
import startApp from './app';
import connectDB from './db_connection';
import dotenv from 'dotenv';

dotenv.config();
const main = async () => {
  await connectDB();
  startApp();
};

main();
