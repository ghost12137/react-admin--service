const {
  User,
} = require('../db/model');
const { Op } = require('sequelize');

// 查询所有用户信息
const getAllUsers = async (pageBegin = 0, pageSize = 10) => {
  try {
    const result = await User.findAll({
      offset: Number.parseInt(pageBegin),
      limit: Number.parseInt(pageSize)
    });
    let res = [];
    if (result && result.length) {
      res = result.map(item => JSON.parse(JSON.stringify(item, null, 2)))
    }
    return res;
  } catch (error) {
    console.log('getAllUsers error: ', error);
  }
};

// 查询用户个数
const getAllUsersCount = async () => {
  try {
    return User.count();
  } catch (error) {
    console.log('lib action user getAllUsersCount error: ', error);
  }
};

// 根据用户id查询
const getUserById = async (id) => {
  //sequelize v5中findById被换成findByPk
  try {
    const user = await User.findByPk(id);
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log('lib action user getUserById error: ', error);
  }
};

// 根据用户名字查询
const getUserByName = async (name) => {
  try {

    const user = await User.findOne({
      where: {
        name: {
          [Op.like]: name
        }
      },
    });
    if (user) {
      return user.dataValues;
    } else {
      return null;
    }
  } catch (error) {
    console.log('lib action user getUserByName error: ', error);
  }
};

// 更新用户信息
const updateUser = async (preUserInstance, newUserMsg) => {
  try {
    return preUserInstance.update(newUserMsg);
  } catch (error) {
    console.log('lib action user updateUser error: ', error);
  }
};

// 创建用户
const createUser = async (user) => {
  try {
    return User.create(user);
  } catch (error) {
    console.log('lib action user createUser error: ', error);
  }
};

// 删除用户
const deleteUser = async (userInstance) => {
  try {
    return userInstance.destroy();
  } catch (error) {
    console.log('lib action user deleteUser error: ', error);
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