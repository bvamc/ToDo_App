let bodyParser = require('body-parser');
let data = [{item: 'get milk'}, {item: 'get haircut'}, {item: 'complete project'}, {item: 'get cake'}];
let urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app) {
    app.get('/todo', function (request, response) {
        response.render('todo', {todo_data: data});
    });
    app.post('/todo', urlencodedParser , function(request, response){
        data.push(request.body);
        response.json(data);
    });

    app.delete('/todo', function (request, response) {
        debugger;
    });
};