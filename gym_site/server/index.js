import express from "express";

const PORT =8000

const app=express()

app.listen(PORT,()=>console.log(`Express Server created successfully on port ${PORT}`))

