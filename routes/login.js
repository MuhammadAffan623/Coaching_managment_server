const express = require("express");
const router = express.Router();
const { con } = require("../config/db")

router.get('/login', (req, res) => {
    let {username,password} = req.body;
    let statement = `SELECT * FROM Managment WHERE username = '${username}' and password='${password}'`;
    console.log(statement);
    con.query(statement, function (error, results ) {
        console.log(results);
      if (error) throw error;
      if(results.recordset.length === 0) {
        return res.status(400).send("error occured")
      } else {
        return res.status(200).send("ok")
      }
    });
});

module.exports = router;