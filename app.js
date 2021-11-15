const express = require("express")
const bodyParser = require("body-parser")
 
const router = require("./routes/api")

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.use('/',router);

app.listen(port, ()=>{
    console.log(`listen to port ${port}`)
})