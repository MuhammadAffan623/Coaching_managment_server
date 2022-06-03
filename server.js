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


app.use(require("./routes/students"));
app.use(require("./routes/teacher"));

app.get('/login', (req, res) => {
    let {username,password} = req.body;
    let statement = `SELECT * FROM Managment WHERE username = '${username}' and password='${password}'`;
    console.log(statement);
    con.query(statement, function (error, results ) {
        console.log(results);
    //   if (error) throw error;
      if(!results.recordset) {
        return res.status(400).send("error occured")
      } else {
        return res.status(200).send("ok")
      }
    });
});




app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});