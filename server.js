const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors")
const sql = require('mssql');
const config = require('./config/db')
const app = express();  
const port = 5000;
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

 
var con = sql.connect(config, (err) => {
    if (err) console.log("error==>", err)
    else {
        console.log("DB connected")

    }
    
})

 

app.get('/login',async (req, res) => {

    try {
        // let pool = `select * from Managment WHERE ( username = ${req.username} AND password = ${req.password} ) ;`
        let pool = `select * from Managment;`
        sql.query(pool, (err,res) => { 
            if (err) {
                console.log("error occured")
                res.status(400).send("error occured")
            } 
            else {
                console.log(res)
                if (res.recordset.username == req.username && res.recordset.username == req.username) {
                    console.log(res.recordset.username)
                }
            }
        })
    }
    catch (error) {
        console.log(error);

    }
    res.status(200).send("ok")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});