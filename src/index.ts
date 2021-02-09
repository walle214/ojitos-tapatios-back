import 'colors';
import dotenv from 'dotenv';
import startApp from './app';
import connectDB from './db_connection';

dotenv.config();

const main = async () => {
  await connectDB();
  startApp();
};

main();
