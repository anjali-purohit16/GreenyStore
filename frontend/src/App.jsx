import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Stores from './stores/Stores';
import Signup from './component/Signup';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider';
import Blog from './component/Blog';


function App() {
  const {user} = useAuth();  
  console.log(user);
  return (
    <> 
    <div className="dark:bg-slate-900 dark:text-white ">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/store" element ={<Stores /> }/>
    <Route path="/blog" element ={user? <Blog />:<Navigate to ="/signup"/>} />
    <Route path="/signup" element ={<Signup />} />
    {/* <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />  */}
    </Routes>
     <Toaster/>
    </div>
    </>
  )
}

export default App;