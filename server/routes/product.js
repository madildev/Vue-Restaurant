var express = require('express');
var router = express.Router();
const db = require('../server'); // Importing Database Connection Script


//This route will return the chinese from the database
router.get('/chinese',(request,response)=>{
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

//This route will return the desserts from the database
router.get('/desserts',(request,response)=>{
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

//This route will return the desi items from the database
router.get('/desi',(request,response)=>{
    db.query(`Select * from Dishes where D_Type = 'Desi'`,(err,res)=>{
        if(err)
        {
          throw err;
        }
        else {
            console.log(res);
            response.send(res);
        }
    });
});

//This route returns the drinks from the database
router.get('/drinks',(request,response)=>{
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
router.get('/fastfood',(request,response)=>{
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
router.get('/tandoor',(request,response)=>{
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


module.exports = router;