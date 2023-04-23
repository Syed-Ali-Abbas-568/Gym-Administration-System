import mongoose from "mongoose";

const Connection=async(userName,password)=>{
    const URL=`mongodb+srv://${userName}:${password}@gym-site.3prjtqn.mongodb.net/?retryWrites=true&w=majority`
    try{
    await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
    console.log("DataBase connected successfully.")
    }
    catch(error){

console.log("Error while connecting to mongoDB",error)

    }

}
export default  Connection
