import dotenv from "dotenv";
dotenv.config();

export default {
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
};
