const { server } = require('./mocks/server.js');
const instanceAxios = require('./instanceAxios.js');

describe('Axios API', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should call axios get and return a response', async () => {
    const expectedData = {
      username: 'username',
      firstName: 'firstName',
      lastName: 'lastName',
    };

    const response = await instanceAxios.getUsers();
    expect(response).toMatchObject({ data: expectedData, status: 200 });
  });

  it('should call axios get by id and return a response', async () => {
    const id = 1;
    const expectedData = {
      id,
      username: 'username',
      firstName: 'firstName',
      lastName: 'lastName',
    };

    const response = await instanceAxios.getUserById(id);
    expect(response).toMatchObject({ data: expectedData, status: 200 });
  });

  it('should call axios put by id and return a response', async () => {
    server.printHandlers();
    const id = 1;
    const data = {
      username: 'username2',
      firstName: 'firstName2',
    };

    const expectedData = {
      id,
      username: 'username',
      firstName: 'firstName',
    };

    const response = await instanceAxios.updateUserById(id, data);
    expect(response).toMatchObject({ data: expectedData, status: 200 });
  });

  it('should call axios delete by id and return a response', async () => {
    const id = 1;
    const expectedData = { id };

    const response = await instanceAxios.deleteUserById(id);
    expect(response).toMatchObject({ data: expectedData, status: 200 });
  });
});
