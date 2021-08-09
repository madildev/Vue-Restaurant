const express = require('express'); // importing express
const db = require('./server'); // Importing Database Connection Script
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const { request, response } = require('express');
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

//This is the route that returns the current employees profile information
app.post('/profile/view/employees',(request,response)=>{
     db.query(`Select * from Employees where E_Id=${request.body.userid}`,(err,res) =>{
         if(err)
         {
            throw err
         }
         else{
             console.log(res);
             response.send(res);
         }
     });
});

//This is the route that returns the current Customer's profile information
app.post('/profile/view/customer',(request,response)=>{
    db.query(`Select * from Customers where C_Id=${request.body.userid}`,(err,res) =>{
        if(err)
        {
            throw err
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});


//This is the route the updates the current employees profile information
app.post('/profile/update/employees',(request,response)=>{
    db.query(`Select * from Employees where E_Id=${request.body.userid}`,(err,res) =>{
        if(err)
        {
            throw err
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});

//This is the route the updates the current cutomer profile information
app.post('/profile/update/customer',(request,response)=>{
    db.query(`Select * from Employees where E_Id=${request.body.userid}`,(err,res) =>{
        if(err)
        {
            throw err
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});


//This route will return the desserts from the database
app.get('/product/desserts',(request,response)=>{
    db.query(`Select * from Dishes where D_Type = 'Desserts'`,(err,res)=>{
        if(err)
        {
          throw err;
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});

//This route will return the chinese from the database
app.get('/product/chinese',(request,response)=>{
    db.query(`Select * from Dishes where D_Type = 'Chinese'`,(err,res)=>{
        if(err)
        {
          throw err;
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});

//This route will return the desi items from the database
app.get('/product/desi',(request,response)=>{
    db.query(`Select * from Dishes where D_Type = 'Desi'`,(err,res)=>{
        if(err)
        {
          throw err;
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});

//This route returns the drinks from the database
app.get('/product/drinks',(request,response)=>{
    db.query(`Select * from Dishes where D_Type = 'Drinks'`,(err,res)=>{
        if(err)
        {
          throw err;
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});

//This route returns the fast foods from the database
app.get('/product/fastfood',(request,response)=>{
    db.query(`Select * from Dishes where D_Type = 'FastFood'`,(err,res)=>{
        if(err)
        {
          throw err;
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});

//This will return tandoori items from the database
app.get('/product/tandoor',(request,response)=>{
    db.query(`Select * from Dishes where D_Type = 'Tandoor'`,(err,res)=>{
        if(err)
        {
          throw err;
        }
        else{
            console.log(res);
            response.send(res);
        }
    });
});


//This route returns the details of the dish selected by the user
app.post('/dish/details',(request,response)=>{
  db.query(`Select * from Dishes where D_Id = ${request.body.dishid}`,(err,res)=>{
      if(err)
      {
        throw err;
      }
      else
      {
          console.log(res);
          response.send(res);
      }
  });
});

//This route returns the reviews about the dish selected by the user
app.post('/dish/reviews',(request,response)=>{
    db.query(`Select * from Reviews where D_Id = ${request.body.dishid}`,(err,res)=>{
        if(err){
            throw err
        }
        else
        {
            console.log(res);
            response.send(res);
        }
    });
});

//This route adds the new review abou the dish selected by the user
app.post('/dish/add/reviews',(request,response)=>{
    db.query(`Insert Into Reviews Values ('${request.body.cusid}','${request.body.remarks}','${request.body.rating}', '${request.body.dishid}')`,(err,res)=>{
        if(err)
        {
            throw err
        }
        else
        {
            console.log(res);
            response.send("Review Submitted Successfully!!!!");
        }
    });
});

//This Route will add food order to database
app.post('/dish/addorder',(request,response)=>{
    db.query(`Insert Into FoodOrder Values ('${request.body.dishid}','${request.body.cusid}','${request.body.quantity}','${request.body.date}')`,(err,res)=>{
       if(err)
       {
           throw err
       }
       else{
           console.log(res);
           response.send("Dish Added to the cart!!!!");
       }
    })
});

//This route will retrive food order from the database
app.post('/dish/getorder',(request,response)=>{
    db.query(`Select Customers.C_FirstName,Customers.C_LastName,Dishes.D_Name, Dishes.D_Price,FoodOrder.Quantity, FoodOrder.O_Date
    from ((FoodOrder
    Inner Join Customers on FoodOrder.Cus_Id = Customers.C_Id And Customers.C_Id = '${request.body.cusid}')
    Inner Join Dishes on FoodOrder.Dish_Id = Dishes.D_Id)`,(err,res)=>{
       if(err)
       {
           throw err
       }
       else{
           console.log(res);
           response.send(res);
       }
    })
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
