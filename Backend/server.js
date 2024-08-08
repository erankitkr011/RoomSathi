process.env.SUPPRESS_NO_CONFIG_WARNING = 'true';
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.listen(3300,()=>{
    console.log("server started at local host 3300");
})

app.use(express.json());

//! connection of database ---

const connectDatabase = require('./config/database');
connectDatabase();

//! routes -----
const user = require('./Routes/user');
const c = require('config');
app.use(user);

app.get('/',(req,res)=>{
    res.send("home pge")
})

