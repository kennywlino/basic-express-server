const { app, start } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {
  it('handles root path', async () => {
    const response = await request.get('/'); 

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello world');
  });

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });

  it('works with query params and the "/helloQuery" route', async () => {
    const response = await request.get('/helloQuery?name=JoJo');
    expect(response.text).toEqual('Hello JoJo');
  });

  it('works with', async () => {
    const response = await request.get('');
    expect(response.text).toEqual();
  });
});