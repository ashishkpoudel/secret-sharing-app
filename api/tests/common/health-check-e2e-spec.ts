import request from 'supertest';
import app from '../app';

describe('Health check e2e', () => {
  it('GET /health-check returns 200 ok', async () => {
    await request(app)
      .get('/health-check')
      .send()
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
