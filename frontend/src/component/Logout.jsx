import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


// function Logout() {
//   const{user, setUser}=useAuth()
//   const handleLogout = () => {
//     try {
//       // Perform logout logic here
//       setUser({
//         ...user,
//         users:null
//       })
//       localStorage.removeItem("users");
//       toast.success("logout successfully");
      
//         setTimeout(()=>{
//         window.location.reload();
//       }, 2000);
//   }
//   catch(error){
//    toast.error("Error:"+error.message); 
//    setTimeout(()=>{},3000);
//   }
// }


function Logout() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
       if (!user) {
        toast.error("You are not logged in!");
        return;
      }
      setUser(null);  
      localStorage.removeItem("users");
      toast.success("Logout successful");

      // Redirect user
      navigate("/signup"); 
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
       onClick ={handleLogout}>
        Logout</button>
      </div>
  )
}

export default Logout