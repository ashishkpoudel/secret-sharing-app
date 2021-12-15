import knex from 'knex';

export const db = knex({
  client: 'postgresql',
  connection: {
    host: 'castor.db.elephantsql.com',
    port: 5432,
    user: 'cqwjncox',
    password: 'xYZQYM7UWUXpPH0DAcUv5JtMM7eW8c7H',
    database: 'cqwjncox'
  }
});
