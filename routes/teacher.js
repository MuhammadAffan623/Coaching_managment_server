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

module.exports = router;