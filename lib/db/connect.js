const Sequelize = require('sequelize');

const { db: {
  database,
  username,
  password,
  hostName
} } = require('../../config');

const sequelize = new Sequelize(database, username, password, {
  host: hostName,
  dialect: 'mysql',  // sql语言类型
  operatorsAliases: false, // 是否支持运算符别名
  pool: { // 设置连接池
    max: 5, //最大连接数
    min: 0, //最小连接数
    acquire: 30000, //可获取的连接池
    idle: 10000 // 可闲置的连接池
  }
});

module.exports = {
  sequelize,
  async open() {  // 打开数据库
    try {
      await sequelize.authenticate();
      console.log('connected');
    } catch (error) {
      console.error('connect faild');
    }
  },
  async close() { // 关闭数据库
    try {
      await sequelize.close();
      console.log('closed');
    } catch (error) {
      console.error('close faild');
    }
  },
  async syncDatabase() { // 同步数据库
    try {
      await sequelize.sync();
      console.log('sync done');
    } catch (error) {

      console.error('sync faied: ', error);
    }
  }
};