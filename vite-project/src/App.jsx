import React from 'react';
import Login from "./pages/login_signup/login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./pages/login_signup/Signup";
import Homepage from "./pages/Homepage/Homepage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/Homepage' element={<Homepage/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
