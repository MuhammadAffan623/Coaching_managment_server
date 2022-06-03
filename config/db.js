const sql = require('mssql');
const config = {
    server: 'DESKTOP-HG757M4',
    port: 1433,
    user: "affan",
    password: 'affan123',
    database: 'Coaching',
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

module.exports = {config,con};