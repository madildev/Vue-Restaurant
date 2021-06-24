const express = require('express'); // importing express
const db = require('./server'); // Importing Database Connection Script
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const { response } = require('express');
const app = express(); // Initializing express application

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen('5001', // localhost:5000
    () => 
    {
        console.log("Sever Started Successfully on port 5001");
    }
);

//This is the route that handles the login page
app.post('/login',(request,response) => 
{
    db.query('Select * from Users', (err,res) =>{
         if(err)
         {
              console.log(err);
         }
         else
         {
            console.log(res);
            response.send(res);
         }
    })
});

//This is the route that returns the current employees profile information
app.post('/profile/employees',(request,response)=>{
     db.query(`Select * from Employees where E_Id=${request.body.userid}`,(err,res) =>{
         if(err)
         {
             console.log(err);
         }
         else{
             console.log(res);
             response.send(res);
         }
     });
});

//This is the route the updates the current employees profile information
app.post('/profile/employees',(request,response)=>{
    db.query(`Select * from Employees where E_Id=${request.body.userid}`,(err,res) =>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});
/*app.get('/', // Route (home/default)
    (request, response) => {
        response.send({
            message: "This is the response from the Nodejs Server"
        });// Send Message as Response to current route after Get Request to the Server
    }
);*/

/*app.post('/users', // Route (users page)
    (request, response) => {
        db.query('INSERT INTO employ SET ?', request.body, // Database Query to Insert request.body
            (error) => {
                if (error) {
                    throw error;
                }
                else 
                {
                    response.send("User added Successfully!"); // Send Message as Response to the Route after Post Request to the Server
                }
            }
        );   
    }
)

// CRUD Operations:-
/**
 * CREATE
 * RETRIEVE
 * UPDATE
 * DELETE
*/