const {
  userMessage,
  roleList
} = require('../../datas/admin/users');
const UUID = require('uuid');

const {
  getAllUsers,
  getAllUsersCount,
  getUserById,
  getUserByName,
  updateUser,
  createUser,
  deleteUser,
} = require('../../lib/action/user');

module.exports = {
  getRoleList: () => {
    return {
      status: 200,
      data: roleList
    };
  },

  getUserList: async (query) => {
    const {
      currentPage = 1,
      pageSize = 10
    } = query;

    const sliceBegin = (currentPage - 1) * pageSize;

    let result = await getAllUsers(sliceBegin, pageSize);

    const userCount = await getAllUsersCount();

    if (result && result.length) {
      result = result.map(item => {
        return JSON.parse(JSON.stringify(item, null, 2));
      })
    }
    return {
      data: result,
      status: 200,
      total: userCount
    };
  },
  createUser: async (body) => {
    const {
      name,
      password,
      role
    } = body;

    const user = await getUserByName(name);
    if (user) {
      return {
        status: 400,
        message: '该用户已存在'
      };
    }
    const newUser = {
      id: UUID.v1(),
      name,
      password,
      role: role
    };

    await createUser(newUser);

    return {
      status: 200,
      data: 'yes'
    };
  },
  updateUser: async (body) => {
    const {
      id,
    } = body;
    const user = await getUserById(id);

    if (user) {
      await updateUser(user, body);
      return {
        status: 200,
        data: 'yes'
      };
    } else {
      return {
        status: 400,
        message: '没有该用户'
      };
    }
  },
  deleteUser: async (body) => {
    const {
      id
    } = body;
    const user = await getUserById(id);

    if (user) {
      await deleteUser(user);
      return {
        status: 200,
        data: '删除成功'
      };
    } else {
      return {
        status: 400,
        message: '没有该用户'
      };
    }
  },
};