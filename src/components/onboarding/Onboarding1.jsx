import React from "react";
import { useNavigate } from "react-router-dom";
import onboarding1 from "../../assets/logo1.png"



const Onboarding1 = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white p-6 text-center'>
        <div>
          <img src={onboarding1} alt="weather illustration" className='text-3xl w-50 font-black mb-8 shadow-lg' />
        </div>
        <h1 className="text-3xl font-bold mb-4">Welcome to SkyCast</h1>
        <p className='text-white/90 font-semibold mb-6 text-2x1'>Your ultimate weather companion <br /> stay informed anytime, anywhere.</p>


        <div className='flex justify-center items-center gap-2 mt-6 mb-10'>
            <span className='w-2.5 h-2.5 bg-white rounded-full'></span>
            <span className='w-2.5 h-2.5 bg-gray-400 rounded-full'></span>
            <span className='w-2.5 h-2.5 bg-gray-400 rounded-full'></span>
        </div>

        <button onClick={() => navigate("/onboarding2")}
            className='bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all'>
                Next
        </button>
      
    </div>
  )
}

export default Onboarding1
