const kenxConfig = {
  client: process.env.DB_TYPE,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  searchPath: [process.env.DB_SCHEMA],
  debug: (process.env.NODE_ENV === 'development'),
};

module.exports = kenxConfig;
