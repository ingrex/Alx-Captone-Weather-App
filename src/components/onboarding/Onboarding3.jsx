import React from "react";
import { useNavigate } from "react-router-dom";
import locationIcon from "../../assets/onboarding3.png"

const Onboarding3 = () => {

    const navigate = useNavigate();


    const handleEnableLocation = () => {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        navigate("/Home");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          localStorage.setItem("user_lat, latitude");
          localStorage.setItem("user_lon", longitude);
          navigate("/Home");
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to access your location.Please enable it via Settings.");
          navigate("/Home");
        }
      );
    };
    

  return (
 <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-500 to-blue-600 text-center p-6">
         <img src={locationIcon} alt="weather Icon" className="w-40 h-40 mb-8 rounded-2xl shadow-lg" />
 
 
          {/*Text*/}
       <h1 className="flex justify-center items-center gap-2 mt-6">Allow Location Access <br /> for Local Weather Updates</h1>
 
         {/*Pagination Dots */}
 
         <div className="flex justify-center items-center gap-2 mt-6 mb-10">
             <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
             <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
             <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
         </div>
       
       {/*Next Button */}
        <button onClick={() => navigate("/Home")}
             className='bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all'>
                 Enable Location
         </button>
      
     </div>
  )
}

export default Onboarding3
