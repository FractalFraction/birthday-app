const express = require('express');
const ManipulateDate = require('manipulateDate');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/message', (req, res) => {
  // Get the current date 
  const monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const today = new Date();
  const currentMonth = monthsArray[today.getMonth()];
  const currentDay = today.getDate().toString();

  console.log(today);
  console.log(`Month: ${currentMonth}`);
  console.log(`Day: ${currentDay}`);
  console.log(`Returned Day: ${req.body.day}`);
  console.log(`Returned Month: ${req.body.month}`);

  // Return the correct day difference

  if (req.body.day === currentDay && req.body.month === currentMonth) {
    res.render('birthday.ejs');
  } else {
    res.render('await.ejs',{
      name: req.body.name,
      day: req.body.day, 
      month: req.body.month
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
