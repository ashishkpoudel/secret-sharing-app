import { Express } from 'express';
import { Knex } from 'knex';
import app from 'app';
import { db } from 'database';

export class AppFactory {
  private constructor(
    public instance: Express,
    public knex: Knex,
  ) { }

  static async new(): Promise<AppFactory> {
    return new AppFactory(
      app,
      db,
    );
  }

  async refreshDatabase(): Promise<void> {
    return Promise.resolve();
  }

  close(): Promise<void> {
    return Promise.resolve();
  }
}
