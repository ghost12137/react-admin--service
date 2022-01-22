const {
  sequelize,
  syncDatabase,
  open
} = require('./connect');
const Sequelize = require('sequelize');

open();

// 定义user表模型
const User = sequelize.define('admins', {
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

// 定义商品数据表模型
const Good = sequelize.define('goods', {
  id: { // 商品Id
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: { // 商品名
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {  // 商品描述
    type: Sequelize.STRING,
  },
  goodImg: {  // 商品图片
    type: Sequelize.STRING
  },
}, {
  timestamps: false
});

syncDatabase();

module.exports = {
  User,
  Good
};