import { Express } from 'express';
import * as Knex from 'knex';
import 'index';
import app from 'app';
import { db } from 'database';

export class AppFactory {
  private constructor(
    public instance: Express,
    private knex: Knex,
  ) { }

  static async new(): Promise<AppFactory> {
    return new AppFactory(
      app,
      db,
    );
  }

  async refreshDatabase(): Promise<void> {
    await this.knex.migrate.rollback(); // TODO: Implement more efficient way
    await this.knex.migrate.up();
  }

  close(): Promise<void> {
    return this.knex.destroy();
  }
}
