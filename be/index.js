const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json("starter");
});

app.listen(3333);