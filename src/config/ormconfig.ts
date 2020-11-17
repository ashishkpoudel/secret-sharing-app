import databaseConfig from 'config/database';

export = {
  ...databaseConfig,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  migrations: [__dirname + '/../../migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'migrations',
  },
};
