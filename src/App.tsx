import { Movies } from "./pages/Movies"
import {Link, Outlet} from 'react-router-dom'
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import background from "./images/back.jpeg"




function App() {


  return (
    <div className="app" >
     

      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
