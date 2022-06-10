const mswNode = require('msw/node');
const { handlers } = require('./handlers');

const server = mswNode.setupServer(...handlers);

module.exports = { server };
