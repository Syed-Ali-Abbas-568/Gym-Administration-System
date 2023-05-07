import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT =8000

const app=express()

dotenv.config()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors()) 
app.use('/',router)
const userName=process.env.DB_USER_NAME
const password=process.env.DB_USER_PASSWORD

Connection(userName,password)

app.listen(PORT,()=>console.log(`Express Server created successfully on port ${PORT}`))

