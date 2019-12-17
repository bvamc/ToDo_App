const express = require('express');
let todoController = require('./controllers/todoController');

const port = 3000;
let app = express();

//setting up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//call controllers
todoController(app);

//listen to port
app.listen(port);
console.log(`App Listening to port ${port}`);

