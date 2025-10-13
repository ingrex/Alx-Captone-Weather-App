import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";



const Home = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim() !== "") {
            fetchWeather(city);
        }
    };

    useEffect(() => {
        const lastCity = localStorage.getItem("lastCity"); 
        if (lastCity) {
            setCity(lastCity);
            fetchWeather(lastCity);
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (poition) => {
                        const { latitude, longitude } = poition.coords;
                        try {
                            const res = await axios.get(
                               `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric` 
                            );
                            setWeather(res.data);
                            setCity(res.data.name);
                            localStorage.setItem("lastCity", res.data.name);
                        } catch {
                            setError("Unable to fetch weather for your Location.");
                        }
                    },
                    () => {
                        setError("Location access denied. Please search manually.");
                    }
                );
            } else {
                setError("Geolocation not supported on this device.");
            }
        }
    },

    []);



  return (
    <div>
      <h1>My name</h1>
    </div>
  )
}

export default Home
