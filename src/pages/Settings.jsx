import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
"react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Settings = () => {
    const navigate = useNavigate();

    const [unit, setUnit] = useState(localStorage.getItem ("unit") || "metric");

    {/* Toggle temperture unit */}

   const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    localStorage.setItem("unit", newUnit);
    window.location.reload();
   };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-4 transition-all duration-500">

        <div className="w-full flex item-center justify-between mb-6 max-w-md">
            <button onClick={() => navigate("/home")} className="text-2x1 text-gray-800 dark:text-white flex items-center gap-2 hover:opacity-70" >
                <FiArrowLeft/> Back
            </button>
            <h1 className="text-2xl font-semibold">Setting</h1>
        </div>

        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-6 transition-all duration-300">

            <div className="flex item-center justify-between">
                <span className="text-lg font-medium">Temperature Unit</span>
                <button onClick={toggleUnit} className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all">
                    {unit === "metric" ? "°C" : "°F"}
                </button>
            </div>
        </div>


        {/* Footer */}
      <footer className="mt-10 text-center text-sm opacity-70">
        Powered by <span className="font-medium">OpenWeather</span>
      </footer>
        
    </div>
  )
}

export default Settings
