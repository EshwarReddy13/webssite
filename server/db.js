import dotenv from "dotenv";
import pgPromise from "pg-promise";

// Load environment variables from .env file
dotenv.config();

// Create a new PostgreSQL client using environment variables
const pg = pgPromise();
const db = pg({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default db;
