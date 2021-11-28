const UUID = require('uuid');

const roleList = [
  'system_admin',
  'user_admin',
  'normal_user',
  'baned_user',
];

const userMessage = [{
    id: UUID.v1(),
    name: '金晨龙', // 用户名
    password: '123456789', // 密码role
    role: roleList[0], // 用户权限
  },
  {
    id: UUID.v1(),
    name: '赵宇洋',
    password: '123456789',
    role: roleList[1],
  },
  {
    id: UUID.v1(),
    name: '翁文凯',
    password: '123456789',
    role: roleList[2],
  },
  {
    id: UUID.v1(),
    name: '戴崇特',
    password: '123456789',
    role: roleList[3],
  },
  {
    id: UUID.v1(),
    name: '崔家正',
    password: '123456789',
    role: roleList[0],
  },
  {
    id: UUID.v1(),
    name: '许成广',
    password: '123456789',
    role: roleList[1],
  },
  {
    id: UUID.v1(),
    name: '李娟',
    password: '123456789',
    role: roleList[2],
  },
  {
    id: UUID.v1(),
    name: '袁穗茹',
    password: '123456789',
    role: roleList[3],
  },
  {
    id: UUID.v1(),
    name: '龙秋江',
    password: '123456789',
    role: roleList[0],
  },
  {
    id: UUID.v1(),
    name: '黄俊龙',
    password: '123456789',
    role: roleList[1],
  },
  {
    id: UUID.v1(),
    name: '丁磊',
    password: '123456789',
    role: roleList[2],
  },
  {
    id: UUID.v1(),
    name: '雷军',
    password: '123456789',
    role: roleList[3],
  },
  {
    id: UUID.v1(),
    name: '潘俊可',
    password: '123456789',
    role: roleList[0],
  },
  {
    id: UUID.v1(),
    name: '沈万三',
    password: '123456789',
    role: roleList[1],
  },
  {
    id: UUID.v1(),
    name: '尹晓辉',
    password: '123456789',
    role: roleList[2],
  },
  {
    id: UUID.v1(),
    name: '叶晓辉',
    password: '123456789',
    role: roleList[3],
  },
  {
    id: UUID.v1(),
    name: '秦雨辰',
    password: '123456789',
    role: roleList[0],
  },
];

module.exports = {
  roleList,
  userMessage
};