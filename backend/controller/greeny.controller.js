import Greeny from "../model/greeny.model.js";

export const getGreeny =async(req,res)=>{
  try{
    const greeny =await Greeny.find();
    res.status(200).json(greeny);

  }catch(error){
    console.log("Error:",error);
    res.status(500).json(error);
  }
}