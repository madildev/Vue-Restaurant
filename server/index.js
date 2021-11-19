const express = require('express'); // importing express
const db = require('./server'); // Importing Database Connection Script
const morgan = require('morgan');
const cors = require('cors');
const app = express(); // Initializing express application
const customers = require('./routes/customers');  //routes for the customers
const employess = require('./routes/employees');  //routes for employees
const products = require('./routes/product');  //routes for products
const dishes = require('./routes/dishes');  //routes for dishes


app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use('/product',products);
app.use('/dish',dishes);
app.use('/profile',customers);
app.use('/profile',employess);


app.listen('5001',() => 
    {
        console.log("Server Started Successfully on port 5001");
    }
);

//This is the default route
app.get('/',(req,res)=>{
 res.send("Welcome to the food website server!!!");
});


//This is the route that handles the login page
app.post('/login',(request,response) => 
{
    db.query(`Select * from Users where U_email = '${request.body.email}' And U_password = '${request.body.password}'`, (err,res) =>{
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

//This is the route that creates the new user for the registered users
app.post('/register/user', (request, response) => {
    db.query(`EXEC RegisterUser @fname = '${request.body.firstname}', @lname = '${request.body.lastname}' ,@email = '${request.body.email}',@password = '${request.body.password}'`,(err,res) =>{
    if(err)
    {
        throw err
    }
    else
    { 
          console.log(res);
          response.send(res);
    }
});     
});

//This route will send data to the admin dashboard
app.get('/admin/dashboard',(request,response)=>{
    db.query('EXEC AdminDashboard'),(err,res) =>{
        if(err)
        {
            throw err
        }
        else 
        {
            console.log(res);
            response.send(res);
        }
    }
});
