const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

// error handling
app.use('*', (err, req, res, next) => {
  res.status(500);
  res.json({
    message: 'something went wrong!'
  })
});

app.listen(8080, 'localhost', () => {
  console.log(`Listening at http://localhost:8080`);
});

module.exports = app;
