const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const employees = [
    { id: 1, name: "Liam ", age: "34" },
    { id: 2, name: "Richard ", age: "48" },
    { id: 3, name: "Sam ", age: "69" },
    { id: 4, name: "Felix ", age: "29" },
    { id: 5, name: "Jonathan ", age: "21" },
    { id: 6, name: "Richard ", age: "38" }
];
let ids = employees.length;

// the get command for root url
app.get('/', function (req, res) {
    res.send("Hello This is ShubhVashisht's Restful Api for Employee Database");
});

// the get command in order to fullfill http get requests for all employees
app.get('/api/employees', function (req, res) {
    res.send(employees);
});

//the post command for http post requests, to create a new employee
app.post('/api/employees', function (req, res) {
    const { error } = empvalidate(req.body); //
    if (error) return res.status(400).send(error.details[0].message);

    const emp = {
        id: ++ids,
        name: req.body.name,
        age: parseInt(req.body.age)
    }
    employees.push(emp);
    res.send(emp);
});

//get command for specific employee
app.get('/api/employees/:id', function (req, res) {
    let emp = employees.find(e => { return e.id === parseInt(req.params.id) });
    if (!emp) res.status('404').send('The employee with the given id does not exist');
    res.send(emp);
});

// http put request for updating a certain employees data
app.put('/api/employees/:id', function (req, res) {
    const emp = employees.find(e => e.id === parseInt(req.params.id));
    if (!emp) return res.status(404).send("No such employee existssss");

    const { error } = empvalidate(req.body); //
    if (error) return res.status(400).send(error.details[0].message);

    emp.name = req.body.name;
    emp.age = parseInt(req.body.age);
    res.send(emp);
});

//in order to get the validation logic seperate from put and post requests
function empvalidate(e) {
    const schema = {
        name: Joi.string().min(4).required(),
        age: Joi.number().min(18)
    };
    return Joi.validate(e, schema);
}

// http delete command in order to delete an employees data
app.delete('/api/employees/:id', function (req, res) {
    const emp = employees.find(e => e.id === parseInt(req.params.id));
    if (!emp) return res.status(404).send("No such employee existssss");
    res.send(deleter(employees, parseInt(req.params.id)));
});

// helper function used
function deleter(arr, ele) {
    let temp = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].id === ele) {
            temp = arr[i];
            arr.splice(i, 1);
            break;
        }
    }
    return temp;
}


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`listening on port ${port}...`);

})


