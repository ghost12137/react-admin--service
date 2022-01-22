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

    let userList = [];
    let userCount = 0;
    let status = 400;
    let message = '获取用户列表失败';

    try {
      userList = await getAllUsers(sliceBegin, pageSize);

      userCount = await getAllUsersCount();

      status = 200;
      message = '获取用户列表成功';
    } catch (error) {
      console.log('service admin users getUserList error: ', error);
    }
    return {
      data: userList,
      status,
      message,
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