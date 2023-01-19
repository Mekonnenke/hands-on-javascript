const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/api', apiRoutes);

// app.get('/', (req, res) => {

//     res.json({
//         message : 'Hello Mark !'
//     })
// });

// //get all queries
// db.query(`SELECT * FROM customers`, (err, rows) =>{
//     console.log(rows);
// });

//get a single queries
// db.query(`SELECT * FROM customers WHERE id = 7`, (err, row)=>{
//     console.log(row);
// });

// db.query(`DELETE FROM customers WHERE id  = ?`,  1, (err, result) =>{
//  if (err){
//     console.log(err)
//  }
//     console.log(result);
// });

// const sql = `INSERT INTO customers (id, first_name, last_name, email, phone_number, birth_date)
// VALUES (?,?,?, ?,?,?)`;
// const params = [ 1, 'Virginia', 'Woolf', 'woolf@yahoo.com', '225-875-8171', '1976-1-24']

//  db.query(sql, params, (err, result) =>{
//     if (err){
//         console.log(err)
//     }
//     console.log(result);
//  })






 


app.use((req, res) => {
    res.status(404).end();
});


db.connect(err => {
    if(err) throw err;
    
    console.log('Database connected.')
    app.listen(PORT, () =>{
    console.log(`Server running on ${PORT} http://localhost:3001`)
});
})




//to access sql from insominia

