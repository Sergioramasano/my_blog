const express = require('express');
const hbsexp = require('express-handlebars');

const app = express();
const port = process.env.PORT || 9000;

const hbs = hbsexp.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Main Page',
    isHome: true
  })
});

// app.get('/', (req, res) => {
//   res.render('add', {
//     title: 'Add course',
//     isAdd: true
//   })
// });

// app.get('/', (req, res) => {
//   res.render('courses', {
//     title: 'Courses',
//     isAdd: true
//   })
// });

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});