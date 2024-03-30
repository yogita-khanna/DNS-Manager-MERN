const  express  =  require("express");
const  cors  =  require("cors");
const app = express();
const mongoose = require('mongoose');
const dns = require('./routes/Dns');
const user = require('./routes/Users')
const dotenv = require('dotenv').config();
// import dotenv from 'dotenv';
// import databaseConnection from "./config/database.js";
// import cookieParser from "cookie-parser";
// import dns from './controller/Dns.js'

// import cors from 'cors';

app.use(cors())

// dotenv.config({
//     path : ".env"
// })
// databaseConnection();

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/getData', (req, res) =>{
    res.json([1,2,3,4,5])
})

app.use('/api', dns);
app.use('/user', user);

const PORT = 4545 || process.env.PORT;
mongoose.connect('mongodb+srv://yogita:yogita@cluster0.p7flf.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
   console.log('server started')
})

app.listen(PORT, ()=>{
    console.log("Server starting at port: "+PORT);
})


// const corsOption = {
//     origin:"http://localhost:3000",
//     credentials:true
// }
// app.use(cors(corsOption));

// route
// app.use('/hello', dns);
