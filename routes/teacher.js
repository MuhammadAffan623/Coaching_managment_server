const express = require("express");
const router = express.Router();
const {con} = require("../config/db")



router.get('/teachers', (req, res) => {
    let statement = `SELECT * FROM Teacher`;
    console.log(statement);
    con.query(statement, function (error, results, fields) {
        // console.log(results);
      if (error) throw error;
      else {
        return res.json({
          data: results.recordset
        })
      };
    });
});

router.post('/addTeaches', (req, res) => {
    const { FirstName,LastName,Age,Address,Email } = req.body;
    let statement = `insert into Teacher (FirstName,LastName,Age,Address,Email) 
    values 
    ('${FirstName}' , '${LastName}' ,${Age},'${Address}','${Email}');`;
    console.log(statement);
    con.query(statement, function (error, results, fields) {
        console.log(results);
      if (error) throw error;
        
       res.status(200).send("inserted")
    });
});

module.exports = router;