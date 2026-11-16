import request from 'supertest';
import { app } from '../src/app';

describe('GET /sante', () => {
  it('retourne 200', async () => {
    const reponse = await request(app).get('/sante');
    expect(reponse.status).toBe(200);
    expect(reponse.body).toEqual({ statut: 'ok' });
  });
});
