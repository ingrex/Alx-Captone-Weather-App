import React from 'react'
import logo from "../assets/logo1.png";
import {useNavigate } from "react-router-dom"; 


const AppLogo = () => {

const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate("/home")}><div   className="rounded-full shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <img
        src={logo}
        alt="App Logo"
        className="w-20 h-15 object-contain drop-shadow-lg"
      />
    </div>
    </button>
  )
}

export default AppLogo
