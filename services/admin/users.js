const {
  userMessage
} = require('../../datas/admin/users');

module.exports = {
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
  deleteUser: async (body) => {
    const {
      id
    } = body;
    let deleteStatus = 'not-delete';
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