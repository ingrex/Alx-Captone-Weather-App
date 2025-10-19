import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import weatherBg from "../assets/cloudy.gif";
import AppLogo from "../services/AppLogo";



const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "metric");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  {/*Load saved city or default to Lagos*/}
  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    const initialCity = lastCity || "";
    setCity(initialCity);
    fetchWeather(initialCity);
  }, []);

   {/*Fetch weather data*/}
  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`
      );
      setWeather(res.data);
      setLoading(false);
      localStorage.setItem("lastCity", cityName);
    } catch (err) {
      setLoading(false);
      setError("City not found. Please try again.");
    }
  };

  {/*Handle city search*/}
  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  {/*Use My Location*/} 
  
  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`
          );
          setWeather(res.data);
          setCity(res.data.name);
          localStorage.setItem("lastCity", res.data.name);
        } catch (error) {
          setError("Unable to fetch weather for your location.");
        }
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative bg-cover bg-center"
  style={{ backgroundImage: `url(${weatherBg})` }}>

    {/* Logo */}
    <div className="">
      <AppLogo />
    </div>

      {/* Settings icon */}
      <Link
        to="/settings"
        className="absolute top-5 right-5 text-white text-2xl hover:opacity-80"
      >
        <FiSettings />
      </Link>

      <h1 className="text-5xl font-black mb-10">SkyCast</h1>

      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 mb-4 px-10 w-full max-w-md"
      >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="  Search for a city..."
        className="w-full pl-4 pr-4 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white/70 outline focus:ring-2 focus:ring-blue-400"
      />
        <button
          type="submit"
          className="flex items-center outline focus:ring-blue-400 rounded-lg pl-2 pr-2 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Use My Location button */}
      <button
        onClick={handleUseMyLocation}
        className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6"
      >
        <FiMapPin /> Use My Location
      </button>

      {/* Weather card */}
      {loading ? (
        <p>Loading weather...</p>
      ) : error ? (
        <p className="text-red-300">{error}</p>
      ) : weather ? (
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="text-lg mt-2 capitalize">
            {weather.weather[0].description}
          </p>
          <p className="text-5xl font-bold mt-4">
            {Math.round(weather.main.temp)}° {unit === "metric" ? "C" : "F"}
          </p>
          <div className="flex justify-center gap-8 mt-4">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
          <button
            onClick={() => navigate(`/details/${weather.name}`)}
            className="mt-6 bg-black/40 text-blue-100 px-4 py-2 rounded-lg font-semibold hover:bg-blue-800"
          >
            View Details
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
