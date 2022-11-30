const { app, start } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {

  it('404 error code on a bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('404 error code on a bad method', async () => {
    const response = await request.post('/bad');
    expect(response.status).toEqual(404);
  });

  it('500 error code if no name is in the query string for /person', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });

  it('200 success code if name is in the query string for /person', async () => {
    const response = await request.get('/person?name=JoJo');
    expect(response.status).toEqual(200);
  });

  it('outputs correct object given a name in the query string', async () => {
    const response = await request.get('/person?name=JoJo');
    console.log(response);
    expect(response.body).toEqual({ name: 'JoJo' });
  });
});