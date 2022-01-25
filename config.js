const env = process.env.NODE_ENV || 'development';

const db = {
  database: env === 'development' ? 'react_admin_service' : 'admin_service',
  username: 'root',
  password: env === 'development' ? 'mysql' : 'jcl20000804',
  hostName: 'localhost'
};

module.exports = {
  env,
  db,
};