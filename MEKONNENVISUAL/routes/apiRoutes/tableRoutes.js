const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');


//get all customer ID and guest_id
router.get('/serving_tables', (req, res) =>{
    const sql = `SELECT customers.*, dishes.name AS dish_name, COUNT(customer_id) AS count FROM serving_tables
    LEFT JOIN customers ON serving_tables.customer_id = customers.id
    LEFT JOIN dishes ON customers.dish_id = dishes.id
    GROUP BY customer_id ORDER BY count DESC`;
    db.query(sql, (err, rows) =>{
        if(err){
            res.status(500).json({error:err.message});
            return
        }
        res.json({
            message : 'Success',
            data: rows
        });
    });
    });
router.post('/serving_tables', ({body}, res) =>{

    const errors = inputCheck(body, 'guest_id', 'customer_id');

    if (errors){
        res.status(400).json({error: errors})
        return;
    }

    const sql = `INSERT INTO serving_tables(customer_id, guest_id) VALUES (?, ?)`;
    const params = [body.guest_id, body.customer_id];

    db.query(sql, params, (err, result) =>{
        if(err){
            res.status(400).json({error: err.message})
            return ;
        }
        res.json({
            message: 'Success',
            data: body,
            changes: result.affectedRows
        });
    });
});
module.exports =router;