import React from "react";
import { useNavigate } from "react-router-dom";
import onboarding2 from "../../assets/onboarding2.png"

const Onboarding2 = () => {

    const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-950 text-white p-6 text-center">
        <img src={onboarding2} alt="weather Icon" className="w-40 h-40 mb-8 rounded-2xl shadow-lg" />


         {/*Text*/}
      <h1 className="flex justify-center items-center gap-2 mt-6">Get Real-time Updates <br /> On Weather Conditions</h1>

        {/*Pagination Dots */}

        <div className="flex justify-center items-center gap-2 mt-6 mb-10">
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
        </div>
      
      {/*Next Button */}
       <button onClick={() => navigate("/onboarding3")}
            className='bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all'>
                Next
        </button>
     
    </div>
  )
}

export default Onboarding2;
