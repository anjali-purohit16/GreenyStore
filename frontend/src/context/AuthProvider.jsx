import React ,{createContext, useState, useContext} from 'react'


export const AuthContext =createContext()
export default function AuthProvider({children}) {
  const initialAuthUser=localStorage.getItem("users")
  const[user, setUser]=useState(
    initialAuthUser?JSON.parse(initialAuthUser):undefined
  );
  return(
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth=()=>useContext(AuthContext);
