var express = require('express');
var router = express.Router();
const db = require('../server'); // Importing Database Connection Script


//This route returns the details of the dish selected by the user
router.post('/details',(request,response)=>{
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
  router.post('/reviews',(request,response)=>{
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
  router.post('/add/reviews',(request,response)=>{
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
  router.post('/addorder',(request,response)=>{
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
  router.post('/getorder',(request,response)=>{
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
  

  module.exports = router;