import mongoose from "mongoose";
const greenySchema =mongoose.Schema({
  name:String,
  title:String,
  category:String,
  image:String,
  writer:String,
})
const Greeny = mongoose.model("Greeny", greenySchema);
export default Greeny;