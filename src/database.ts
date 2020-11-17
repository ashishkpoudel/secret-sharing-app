import { createConnection } from 'typeorm';
import dbConfig from 'config/database';

export const dbConnection = async () => {
  return createConnection({
    type: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    database: dbConfig.database,
    username: dbConfig.username,
    password: dbConfig.password,
    synchronize: dbConfig.synchronize,
    entities: [
      __dirname + '/**/*.entity{.ts,.js}',
    ],
  });
};
