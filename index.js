const express = require('express');
const ejs = require('ejs');

// const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log('Rendering ejs to the page!');
  res.render('index.ejs');
});

app.post('/message', (req, res) => {
  console.log('Made a post request!');
 // console.log(res);
  console.log(req.body.name);
  console.log(req.body.day);
  console.log(req.body.month);
  // Get today's date and compare with incoming data

  // If date is today render birthday.ejs

  // Else render await.ejs
  res.render('await.ejs',{name: 'Harry',
                          day: 30, 
                          month: 'June'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
