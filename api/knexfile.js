exports.development = exports.staging = exports.production = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_PASSWORD,
    user: process.env.DB_USERNAME,
    password: process.env.DB_DATABASE,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
