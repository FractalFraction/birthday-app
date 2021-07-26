const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //  res.send('Hello!')
  console.log('Rendering ejs to the page!');
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
