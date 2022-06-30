/* const express = require('express');
const exphbs = require('express-handlebars');
const expressHbs = require('express-handlebars'); // updated to 6.0.X
const bodyParser = require('body-parser');  // Remove
const mysql = require('mysql'); // Remove
//const handlebars = require('hbs');


const hbs = require ('express-handlebars');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;



// Parsing middleware
// Parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true})); // New

// Parse application/json
app.use(bodyParser.json());
//app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// Templating engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' })); // v5.3.4
 app.set('view engine', '.hbs'); // v5.3.4

// Update to 6.0.X
//const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', expressHbs.engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');

// Connection Pool
// You don't need the connection here as we have it in userController
//var mysql      = require('mysql');
/* const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
password: 'password',
database: 'studenapplication'

});

connection.connect(function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
 });  */
/*  let connection= mysql.createPool({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

});
 pool.getConnection((err,connection)=>{
  if(err) throw err;
  console.log('connected as ID'+connection.threadId);
});   */


/* app.get('',(req,res)=>{
     res.render('home');
}); 
const routes = require('./server/routes/user');
app.use('/', routes); 
  
app.listen(port, () => console.log(`Listening on port ${port}`));  */
const express = require('express');
const exphbs = require('express-handlebars'); // updated to 6.0.X
//const bodyParser = require('body-parser');  // Remove
//const mysql = require('mysql'); // Remove

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true})); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// Templating engine
// app.engine('hbs', exphbs({ extname: '.hbs' })); // v5.3.4
// app.set('view engine', 'hbs'); // v5.3.4

// Update to 6.0.X
const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

// Connection Pool
// You don't need the connection here as we have it in userController
// let connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });
 
const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));