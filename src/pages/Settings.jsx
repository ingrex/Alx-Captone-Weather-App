import React, { useEffect, useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiSun, FiMoon } from "react-icons/fi";

const Settings = () => {
    const navigate = useNavigate();

    const [unit, setUnit] = useState(localStorage.getItem ("unit") || "metric");

    {/* Toggle temperture unit */}

    const toggleUnit = () => {
        const newUnit = unit === "metric" ? "imperial" : "metric";
        setUnit(newUnit);
        localStorage.setItem("unit", newUnit);
    }






  return (
    <div className="min-h-creen flex flex-col items-center ">
        
    </div>
  )
}

export default Settings
