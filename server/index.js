const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

require('./routes/yelp')(app);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');

  app.use(express.static('/'));
  app.get('*', (request, result) => {
    result.sendFile(path.resolve(__dirname, 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
