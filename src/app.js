require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const apiRoutes = require('./routes/api');
const generalErrorHandler = require('./middleware/generalErrorHandler');
const routeNotFoundHandler = require('./middleware/routeNotFoundHandler');

const PORT = process.env.PORT || 8080;

const app = express();

app.set('env', process.env.APP_ENV);

app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());

app.use('/api', apiRoutes);
app.use(generalErrorHandler);
app.use(routeNotFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

module.exports = app;
