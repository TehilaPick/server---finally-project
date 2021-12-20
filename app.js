const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const router = require("./routes/api");
const { request } = require("express");


const app = express();

app.use(bodyParser.json());

const port = 3001;


// const con = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'miriandtehila',
//     database: 'mydb',
//     port: '3306',
//     insecureAuth: true
// });

// con.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Connection established');
// });


// con.end((err) => {
//     // The connection is terminated gracefully
//     // Ensures all remaining queries are executed
//     // Then sends a quit packet to the MySQL server.
// });

app.use(cors());

app.use('/',router);

app.listen(port, () => {
    console.log(`listen to port ${port}`)
})