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

 
 
// const config = {
//     server: 'DESKTOP-HG757M4',
//     port: 1433,
//     user: "affan",
//     password: 'affan123',
//     database: 'Sales',
//     options: {
//         trustServerCertificate: true,
//         cryptoCredentialsDetails: {
//             minVersion: 'TLSv1'
//         }
//     },
// }
 
var con = sql.connect(config, (err) => {
    if (err) console.log("error==>", err)
    else {
        console.log("DB connected")

    }
    
})

// async function getOrders() {
//     try {
//         let pool = await sql.connect(config);
//         let products = await pool.request().query("select * from Managment");
//         console.log (products)
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

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