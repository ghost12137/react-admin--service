const {
  userMessage,
  roleList
} = require('../../datas/admin/users');
const UUID = require('uuid');

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
    const sliceEnd = currentPage * pageSize;

    return {
      data: userMessage.slice(sliceBegin, sliceEnd),
      status: 200,
      total: userMessage.length
    };
  },
  createUser: async (body) => {
    const {
      name,
      password,
      role
    } = body;
    let nameExists = false;
    userMessage.forEach(user => {
      if (user.name === name) {
        nameExists = true;
      }
    });
    if (nameExists) {
      return {
        status: 400,
        message: '该用户已存在'
      };
    }

    const newUser = {
      id: UUID.v1(),
      name,
      password,
      role: roleList[role]
    };
    userMessage.push(newUser);

    return {
      status: 200,
      data: '用户创建成功'
    };
  },
  updateUser: async (body) => {
    const {
      id,
      name,
      password,
      role
    } = body;
    let updated = false;
    userMessage.forEach(user => {
      if (user.id === id) {
        user.name = name;
        user.password = password;
        user.role = role;
        updated = true;
      }
    });
    if (updated) {
      return {
        status: 200,
        data: true
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
    let deleteStatus = 'no-user';
    userMessage.forEach((user, index) => {
      if (user.id === id) {
        userMessage.splice(index, 1);
        deleteStatus = 'deleted'
      }
    });
    return {
      status: 200,
      data: deleteStatus
    };
  },
};