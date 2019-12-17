let bodyParser = require('body-parser');
let mongoose = require('mongoose');


//Connect to database
mongoose.connect('mongodb+srv://{username}:{password}@cluster0-9ztz0.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });

//Create schema
let todoSchema = new mongoose.Schema({
    item: String
});

let todo = mongoose.model('Todo', todoSchema);


//let data = [{item: 'get milk'}, {item: 'get haircut'}, {item: 'complete project'}, {item: 'get cake'}];
let urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app) {
    app.get('/todo', function (request, response) {
        //get data from mongoDB
        todo.find({}, function (err, data) {
            if (err) throw err;
            response.render('todo', {todo_data: data});
        });
    });
    app.post('/todo', urlencodedParser , function(request, response){
        //get data from view and add it to database
        let newTodo = todo(request.body).save(function (err, data) {
            if(err) throw err;
            response.json(data);
        });
    });

    app.delete('/todo/:item', function (request, response) {
        //delete the requested item from mongodb
        todo.find({item: request.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
            if(err) throw err;
            response.json(data);
        });
    });
};