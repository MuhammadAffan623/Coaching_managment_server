const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors")
const sql = require('mssql');

const app = express();  
const port = 5000;
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

 
 
const config = {
    server: 'DESKTOP-HG757M4',
    port: 1433,
    user: "affan",
    password: 'affan123',
    database: 'Sales',
    options: {
        trustServerCertificate: true,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    },
}
 
var con = sql.connect(config, (err) => {
    if (err) console.log("error==>", err)
    else {
        console.log("DB connected")

    }
    
})

app.get('/login', (req,res)=> {
    res.status(200).send("ok")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});