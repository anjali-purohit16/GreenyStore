import React from 'react' ;
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Stores from './stores/Stores';
import Signup from './component/Signup';
function App() {
  return (
    <> 
    <div className="dark:bg-slate-900 dark:text-white ">
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/store" element ={<Stores />} />
    <Route path="/signup" element ={<Signup/>} />
  </Routes>
    </div>
    </>
  )
}

export default App;