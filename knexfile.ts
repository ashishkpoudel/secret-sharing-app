import dotenv from 'dotenv';
dotenv.config();

exports.development = {
  client: 'postgres',
  connection: {
    connectionString: process.env.DB_CONNECTION_STRING,
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
};
