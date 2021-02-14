import Knex from 'knex';
import dbConfig from 'config/database';

export const db = Knex({
  client: 'pg',
  connection: {
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
  }
});
