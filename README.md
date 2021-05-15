Date Created: 
# RESTful-API-Node

## Details: 

This is a RESTful Application programming interface implementation using NODE.js
It maintains a data of employees in a company in form of an array and processes HTTP CRUD requests using Representational state transfer
software architectural style.

Frameworks used in this Implementation: 
1. Express
2. Nodemon
3. Joi

Joi is used for input validation and making sure no input causes an error at the backend.
Nodemon is used to update the localhost server everytime there is a change in the code
Express is used to structure the code into structured blocks therefore helping in organising the code into a clean readable format.

4 Different Request types:

 1. Get: Client can ask for all employee data with url '/api/employees' or the data of a specific employee using '/api/employees/:id' and sending a 
 http get request at the specified url.
 
 2. Post: Client can add a new employee to the list of employees using url '/api/employees' and sending a http post request to the 
 server and adding a json body with the employee information in the form:
 {
    "name" : "Shubh Vashisht",
    "age" : 20
}


3. Put: Client can update the information of an existing employee using url:  '/api/employees/:id' with a json body for the employees new information. 
The client needs to send a HTTP put request to the specified url.

4. Delete: Client can delete the information of an existing employee using url: 'api/employees/:id' and send a HTTP delete request to the url.

* if the name is below 4 characters long, the client gets a 400 warning notifying them that the name is too short
* if the age is below 18, the client gets a warning that the age of the new employee is not at least 18
* if any of the fields is missing is the JSON body, the client gets a 404 error notifying that the field is required 
* Joi takes care of these input validations

