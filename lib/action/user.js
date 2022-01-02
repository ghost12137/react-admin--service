const {
  User,
} = require('../db/model');
const { Op } = require('sequelize');

// 查询所有用户信息
const getAllUsers = async (pageBegin = 0, pageSize = 10) => {
  try {
    return User.findAll({
      offset: Number.parseInt(pageBegin),
      limit: Number.parseInt(pageSize)
    });
  } catch (error) {
    console.log('getAllUsers error: ', error);
  }
};

// 查询用户个数
const getAllUsersCount = async () => {
  try {
    return User.count();
  } catch (error) {
    console.log('getAllUsersCount error: ', error);
  }
};

// 根据用户id查询
const getUserById = async (id) => {
  //sequelize v5中findById被换成findByPk
  try {
    return User.findByPk(id);
  } catch (error) {
    console.log('getUserById error: ', error);
  }
};

// 根据用户名字查询
const getUserByName = async (name) => {
  try {
    return User.findOne({
      where: {
        name: {
          [Op.like]: name
        }
      },
    });
  } catch (error) {
    console.log('getUserByName error: ', error);
  }
};

// 更新用户信息
const updateUser = async (preUserInstance, newUserMsg) => {
  try {
    return preUserInstance.update(newUserMsg);
  } catch (error) {
    console.log('updateUser error: ', error);
  }
};

// 创建用户
const createUser = async (user) => {
  try {
    return User.create(user);
  } catch (error) {
    console.log('createUser error: ', error);
  }
};

// 删除用户
const deleteUser = async (userInstance) => {
  try {
    return userInstance.destroy();
  } catch (error) {
    console.log('deleteUser error: ', error);
  }
};

module.exports = {
  getAllUsers,
  getAllUsersCount,
  getUserById,
  getUserByName,
  updateUser,
  createUser,
  deleteUser,
};