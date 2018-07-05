const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  // connect to the database
  const {
    Client
  } = require('pg');
  const client = new Client({
    user: 'my-blog-admin',
    host: '127.0.0.1',
    database: 'my-blog',
    password: 'password',
    port: 5432
  });

  client.connect();

  // check for url route
  const re = /^\/posts\/(\d*)/;
  const matches = req.url.match(re);


  if (req.method === 'GET' && matches !== null) {
    // there is route to /posts/
    let errMsg = {
      status: 'Error',
      msg: 'No posts found',
    };
    let jsonResponse = '';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');

    const postId = matches[1];
    if (postId === '') {
      // no id means query all posts
      client.query('SELECT * FROM "my-blog".posts', (error, result) => {
        console.log(error);
        if (!error && result.rows.length > 0) {
          jsonResponse = JSON.stringify(result.rows);
        } else {
          jsonResponse = JSON.stringify(errMsg);
          res.statusCode = 404;
        }
        // console.log(11, jsonResponse);
        client.end();
        res.end(jsonResponse);
      });
    } else {
      // query database for post with id=postId
      client.query('SELECT * FROM "my-blog".posts WHERE id = ' + postId + '', (error, result) => {
        console.log(error);
        if (!error && result.rows.length > 0) {
          jsonResponse = JSON.stringify(result.rows[0]);
        } else {
          jsonResponse = JSON.stringify(errMsg);
          res.statusCode = 404;
        }
        // console.log(22, jsonResponse);
        client.end();
        res.end(jsonResponse);
      });
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text-plain');
    res.end('Not found\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
