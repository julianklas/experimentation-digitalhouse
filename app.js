'use strict';

const express = require('express');


const app = express();

app.set('view engine', 'pug');  

app.get('/', function (req, res) {
  res.render('baseline',
    {
      title: 'A/B testing'
    }
  );
});

app.get('/continua', function (req, res) {
  res.render('continua',
    {
      title: 'A/B testing'
    }
  );
});

app.get('/abandona', function (req, res) {
  res.render('abandona',
    {
      title: 'A/B testing'
    }
  );
});

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
