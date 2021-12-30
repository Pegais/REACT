let express = require("express");
let app = express();
let mysql = require("mysql");
let cors = require("cors");



// creating the mysql pool or database for sql connection

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "learn",


})

app.use(cors());
app.use(express.json());



app.get('/', function (req, res) {
    const sqlSelect = "SELECT * FROM learning";
    db.query(sqlSelect, (err, result) => {
        // console.log(result)//to see if query works right
        res.send(result)
    })
})

app.listen(5000, () => [

    console.log("server running on port 5000")
])