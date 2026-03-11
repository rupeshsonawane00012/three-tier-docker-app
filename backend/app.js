const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "RDS-ENDPOINT",
  user: "admin",
  password: "password",
  database: "testdb"
});

db.connect(err => {
  if(err){
    console.log("Database connection failed");
  } else {
    console.log("Connected to RDS");
  }
});

app.get("/", (req,res)=>{
  res.send("Backend working and connected to database");
});

app.listen(8080, ()=>{
  console.log("Server running on port 8080");
});