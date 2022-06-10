require('dotenv').config({ path: `${__dirname}/.env` });

const { BASE_URL } = process.env;

const config = { baseURL: BASE_URL };

module.exports = config;
