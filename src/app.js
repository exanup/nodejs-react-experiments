require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const errorhandler = require('errorhandler');

const apiRoutes = require('./routes/api');
const generalErrorHandler = require('./middleware/generalErrorHandler');
const routeNotFoundHandler = require('./middleware/routeNotFoundHandler');
const authenticate = require('./middleware/auth');

const PORT = process.env.PORT || 8080;

const app = express();

app.set('env', process.env.APP_ENV);

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler());
}

app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use(compression({ level: 9 }));

app.use('/api', authenticate({ soft: true }), apiRoutes);
app.use(generalErrorHandler);

app.use(routeNotFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

module.exports = app;
