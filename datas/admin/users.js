const roleList = [
  'system_admin',
  'user_admin',
  'normal_user',
  'baned_user',
];

const userMessage = [{
    id: '1',
    name: '金晨龙', // 用户名
    password: '123456789', // 密码role
    role: roleList[0], // 用户权限
  },
  {
    id: '2',
    name: '赵宇洋',
    password: '123456789',
    role: roleList[1],
  },
  {
    id: '3',
    name: '翁文凯',
    password: '123456789',
    role: roleList[2],
  },
  {
    id: '4',
    name: '戴崇特',
    password: '123456789',
    role: roleList[3],
  },
  {
    id: '5',
    name: '崔家正',
    password: '123456789',
    role: roleList[0],
  },
  {
    id: '6',
    name: '许成广',
    password: '123456789',
    role: roleList[1],
  },
  {
    id: '7',
    name: '李娟',
    password: '123456789',
    role: roleList[2],
  },
  {
    id: '8',
    name: '袁穗茹',
    password: '123456789',
    role: roleList[3],
  },
  {
    id: '9',
    name: '龙秋江',
    password: '123456789',
    role: roleList[0],
  },
  {
    id: '10',
    name: '黄俊龙',
    password: '123456789',
    role: roleList[1],
  },
  {
    id: '11',
    name: '丁磊',
    password: '123456789',
    role: roleList[2],
  },
  {
    id: '12',
    name: '雷军',
    password: '123456789',
    role: roleList[3],
  },
  {
    id: '13',
    name: '潘俊可',
    password: '123456789',
    role: roleList[0],
  },
  {
    id: '14',
    name: '沈万三',
    password: '123456789',
    role: roleList[1],
  },
  {
    id: '15',
    name: '尹晓辉',
    password: '123456789',
    role: roleList[2],
  },
  {
    id: '16',
    name: '叶晓辉',
    password: '123456789',
    role: roleList[3],
  },
  {
    id: '17',
    name: '秦雨辰',
    password: '123456789',
    role: roleList[0],
  },
];

module.exports = {
  roleList,
  userMessage
};