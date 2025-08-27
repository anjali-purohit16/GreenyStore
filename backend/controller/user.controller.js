import user from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup =async(req,res)=>{
  try{
    const{fullname,email,password}=req.body;
    const users=await user.findOne({email})
    if(users){
      return res.status(400).json({message:"User already exists"})
    }
  
  const hashPassword =await bcryptjs.hash(password,10);
  const createduser=new user({
   fullname: fullname,
   email: email,
   password: hashPassword,
  })
  await createduser.save()
  res.status(201).json({message:"User created successfully",users:{
    fullname:createduser.fullname,
    email:createduser.email,
  },
});
}
  catch(error){
   console.log("Error:"+error.message);
    res.status(500).json({message:"Internal server error"})
  }
}

export const login=async(req,res)=>{
  try{
    const{email,password}=req.body;
    const users =await user.findOne({email});
    const ismatch =await bcryptjs.compare(password, users.password);
    if(!user||!ismatch){
     return res.status(404).json({message:"Invalid username and password"});
    }
    else{
      res.status(200).json({message:"login successful",user:{
        fullname:users.fullname,
        email:users.email
      }})
    }
  }
  catch(error){
   console.log("Error:"+error.message)
   res.status(500).json({message:"Internal server error"})
  }
}