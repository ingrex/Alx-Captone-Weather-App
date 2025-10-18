import React from 'react'
import logo from "../assets/logo1.png"; 

const AppLogo = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <img
        src={logo}
        alt="App Logo"
        className="w-20 h-15 object-contain drop-shadow-lg"
      />
    </div>
  )
}

export default AppLogo
