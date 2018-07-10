require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const apiRoutes = require('./routes/api');
const generalErrorHandler = require('./middleware/generalErrorHandler');
const routeNotFoundHandler = require('./middleware/routeNotFoundHandler');

const app = express();

app.set('env', process.env.APP_ENV);

app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/api', apiRoutes);
app.use(generalErrorHandler);
app.use(routeNotFoundHandler);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Listening at http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
});

module.exports = app;
