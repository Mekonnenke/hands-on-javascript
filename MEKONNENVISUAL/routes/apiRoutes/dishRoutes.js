const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

//get ALL queries
router.get('/dishes', (req, res) => {

    const sql = `SELECT * FROM dishes`;
   
   db.query(sql, (err, rows) =>{
       if(err){
           res.status(500).json({error: err.message});
           return
       }
   
       res.json({
           message : 'Success',
           data: rows
       })
   });
   });
   
   //get ONE query
   router.get('/dish/:id', (req, res) =>{
      
       const sql = `SELECT * FROM dishes WHERE id = ?`
   
       const params = [req.params.id];
   
       db.query(sql, params, (err, row) => {
           if(err){
               res.status(400).json({error:err.message});
               return
           }
       
           res.json({
               message : 'Success',
               data: row
           })
       })
   })
   
//    //delete ONE dish
   router.delete('/dish/:id', (req, res) =>{
       const sql = `DELETE FROM dishes WHERE id = ?`;
   
       const params = [req.params.id];
       db.query(sql,params, (err, result)=>{
           if (err){
               res.statusMessage(400).json({error: err.message});
           }
           else if(!result.affectdRows){
               res.json({
                   message:'Dish not found'
               });
           }
           else{
               res.json({
               message:  'Deleted',
               data:result
           });
           }
   
       });
   });
   
//    //CREATE a customer
//    router.post('/customer', ({body}, res) =>{
//        const errors = inputCheck(
//            body, 
//            'id', 
//            'first_name', 
//            'last_name', 
//            'email', 
//            'phone_number', 
//            'birth_date');
//        if(errors){
//            res.status(400).json({error:errors});
//            return;
//        }
   
//        const sql = `INSERT INTO customers (id, first_name, last_name, email, phone_number, birth_date)
//        VALUES (?,?,?,?,?,?)`;
//        const params = [body.id, body.first_name, body.last_name, body.email, body.phone_number, body.birth_date];
   
//        db.query(sql, params, (err, result)=> {
//            if (err){
//                res.status(400).json({error: err.message});
//                return;
//            }
      
//        res.json({
//            message: 'success',
//            data: body
//        });
//        });
//      }); 

     module.exports = router;