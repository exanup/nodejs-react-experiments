require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const apiRoutes = require('./routes/api');

const app = express();

app.set('env', process.env.APP_ENV);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use('/api', apiRoutes);

// error handling
app.use('*', (err, req, res) => {
  res.status(500);
  res.json({
    error: err,
  });
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Listening at http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
});

module.exports = app;
