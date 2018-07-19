require('dotenv').config({ path: `${__dirname}/../../.env` });

let connection;
if (process.env.DATABASE_URL) {
  connection = process.env.DATABASE_URL;
} else {
  connection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
}

module.exports = {
  client: process.env.DB_CLIENT,
  connection,
  searchPath: [process.env.DB_SCHEMA],
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
  debug: process.env.APP_ENV === 'development',
};
