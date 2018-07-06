const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

// error handling
// app.use('*', (err, req, res, next) => {
//   res.status(500);
//   res.json({
//     message: 'something went wrong!'
//   })
// });

app.listen(8080, 'localhost', () => {
  console.log(`Listening at http://localhost:8080`);
});

module.exports = app;
