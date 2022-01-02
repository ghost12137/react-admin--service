const env = process.env;

const db = {
  database: 'react_admin_service',
  username: 'root',
  password: 'mysql',
  hostName: 'localhost'
};

module.exports = {
  env,
  db,
};