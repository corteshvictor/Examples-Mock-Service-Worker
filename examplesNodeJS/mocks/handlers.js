const { stub } = require('sinon');
const { rest } = require('msw');

const config = require('../config');

const BASE_URL = 'http://localhost:8000';
stub(config, 'baseURL').value(BASE_URL);

const handlers = [
  rest.get(`${BASE_URL}/users`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'username',
        firstName: 'firstName',
        lastName: 'lastName',
      })
    );
  }),

  rest.get(`${BASE_URL}/users/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: +req.params.id,
        username: 'username',
        firstName: 'firstName',
        lastName: 'lastName',
      })
    );
  }),

  rest.post(`${BASE_URL}/users`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      })
    );
  }),

  rest.put(`${BASE_URL}/users/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: +req.params.id,
        username: 'username',
        firstName: 'firstName',
      })
    );
  }),

  rest.delete(`${BASE_URL}/users/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ id: +req.params.id }))
  ),
];

module.exports = { handlers };
