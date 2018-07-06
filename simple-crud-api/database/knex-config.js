// TODO: need to replace hardcoded values with dotenv

const kenxConfig = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'my-blog-admin',
    password: 'password',
    database: 'my-blog',
  },
  debug: true
};

module.exports = kenxConfig;
