import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import greenyRoute from "./route/greeny.route.js";
import userRoute from "./route/user.route.js"  
dotenv.config();
const app = express();
//allow frontened requests
app.use(cors());
// origin:"http://localhost:5173/store",
// methods: ["GET","POST","PUT","DELETE"],
// credentials:true
// }));
app.use(express.json());
const PORT =process.env.PORT || 4000;
const URI = process.env.MongoDBURL;

//connect to mongodb
try{
 mongoose.connect(URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
 })
 console.log("Connected to mongoDB")
}catch(error){
    console.log("Error:" ,error);
}

//define routes
app.use("/greeny",greenyRoute);
app.use("/user",userRoute);

//server start
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})