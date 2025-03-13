// tests/auth.test.js
const request = require('supertest');
const app = require('../app');
const { users } = require('../controllers/authController');

describe('Auth Controller', () => {
  beforeEach(() => {
    users.length = 0; // Clear the users array before each test
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({ username: 'testuser', password: 'testpassword' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
  });

  it('should login a user', async () => {
    users.push({ id: '1', username: 'testuser', password: 'hashedpassword' });
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'testuser', password: 'testpassword' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});