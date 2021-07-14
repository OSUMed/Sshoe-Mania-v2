let mysql = require("mysql");
// let pool = mysql.createPool({
//     connectionLimit: 10,
//     host: "localhost",
//     user: "root",
//     password: "123456789",
//     database: "sshoe_mania"
// });

const db = mysql.createPool({
    host: "us-cdbr-east-04.cleardb.com",
    user: "b4a7f6d20a82ee",
    password: "83d718e6",
    database: "heroku_0982de18366080c"
})

module.exports.pool = db;


// mysql://b4a7f6d20a82ee:83d718e6@us-cdbr-east-04.cleardb.com/heroku_0982de18366080c?reconnect=true
