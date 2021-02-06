import { Express } from 'express';
import { Connection } from 'typeorm';
import app from 'app';
import { dbConnection } from 'database';

export class AppFactory {
  private constructor(
    public instance: Express,
    public dbConnection: Connection
  ) { }

  static async new(): Promise<AppFactory> {
    return new AppFactory(
      app,
      await dbConnection(),
    );
  }

  refreshDatabase(): Promise<void> {
    return this.dbConnection.synchronize(true);
  }

  close(): Promise<void> {
    return this.dbConnection.close();
  }
}
