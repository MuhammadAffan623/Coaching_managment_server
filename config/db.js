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

module.exports = config;