'use strict';

const express = require('express');


const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {

  var page = 'A'; //(Math.random() < 0.5) ? 'A' : 'B';

  res.render(page,
    {
      title: 'A/B testing'
    }
  );
});

app.get('/a', function (req, res) {
  res.render('A',
    {
      title: 'A/B testing'
    }
  );
});


app.get('/analytics', function (req, res) {
  res.render('A',
    {
      title: 'A/B testing',
      analytics: true
    }
  );
});

app.get('/continua', function (req, res) {
  res.render('continua',
    {
      title: 'A/B testing',
      tracking: 'analytics'
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
