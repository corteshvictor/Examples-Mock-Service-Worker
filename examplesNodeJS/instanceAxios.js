const axios = require('axios');
const { baseURL } = require('./config');

const instanceAxios = axios.create({ baseURL });

const getUsers = () => instanceAxios.get('/users');

const getUserById = (id) => instanceAxios.get(`/users/${id}`);

const addUser = async (data) => instanceAxios.post('/users', data);

const updateUserById = async (id, data) =>
  instanceAxios.put(`/users/${id}`, data);

const updatePartialUserById = (id, data) =>
  instanceAxios.patch(`/users/${id}`, data);

const deleteUserById = (id) => instanceAxios.delete(`/users/${id}`);

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUserById,
  updatePartialUserById,
  deleteUserById,
};
