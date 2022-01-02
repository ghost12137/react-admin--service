const {
  sequelize,
  syncDatabase,
  open
} = require('./connect');
const Sequelize = require('sequelize');

open();

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,           // 设置为主键
    allowNull: false,           // 不允许为空
    unique: true                // 值唯一
  },
  name: { // 用户名
    type: Sequelize.STRING,
    allowNull: false,           // 不允许为空
  },
  password: { // 密码 
    type: Sequelize.STRING,
    allowNull: false,           // 不允许为空
  },
  role: { // 用户权限
    type: Sequelize.INTEGER,
    allowNull: false,           // 不允许为空
  },
}, {
  timestamps: false
});

syncDatabase();

module.exports = {
  User,
};