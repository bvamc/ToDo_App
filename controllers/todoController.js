let bodyparser = require('body-parser');
let data = [{item: 'get milk'}, {item: 'get haircut'}, {item: 'complete project'}, {item: 'get cake'}];
let urlencodedParser = bodyparser.urlencoded({extended: false});
module.exports = function (app) {
    app.get('/todo', function (request, response) {
        debugger;
        response.render('todo', {todo_data: data});
    });
    app.post('/todo', urlencodedParser, function (request, response) {
        debugger;
        data.push(request.data);
        response.json(data);
    });
    app.delete('/todo', function (request, response) {
        debugger;
    });
};