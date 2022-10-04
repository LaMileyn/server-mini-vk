const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser")
const router = require("./routes/index")
const db = require("./settings/db")
const cors = require("cors")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/api",router)


const start = async () => {
    db.connect(err => {
        if (err) console.log(err)
        else console.log("connected")
    })
    const server = app.listen(port, () => console.log('success'))
}
start()