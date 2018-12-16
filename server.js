const express = require('express');
const app = express();

const data = require('./data/gifs.json');

app.use(express.static('public'));

app.get('/api/gacha', (req, res) => {
  const index = Math.floor(Math.random() * Math.floor(data.length - 1));
  res.send(data[index]);
});

const port = process.env.PORT || 8008;
app.listen(port, () => console.log(`App listening on port ${port}`));
