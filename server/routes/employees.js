var express = require('express');
var router = express.Router();
const db = require('../server'); // Importing Database Connection Script


//This is the route that returns the current employees profile information
router.post('/view/employees',(request,response)=>{
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

//This is the route the updates the current employees profile information
router.post('/update/employees',(request,response)=>{
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

module.exports = router;