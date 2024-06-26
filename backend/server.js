const express = require('express');
const path = require('path');
const hbsexp = require('express-handlebars');
require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');
const cartRoutes = require('./routes/cart');

const app = express();
const port = process.env.PORT || 9000;

const hbs = hbsexp.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

//routes
app.use('/', homeRoutes);
app.use('/add',addRoutes);
app.use('/courses', coursesRoutes);
app.use('/cart', cartRoutes);

//database
async function start() {
  try {
    await mongoose.connect(uri);
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (e) {
    console.log('db error:', e);
  }
}

start()