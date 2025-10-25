import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import weatherBg from "../assets/ClearNight1.jpg";
import AppLogo from "../services/AppLogo";

const Forecast = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [forecast, setForecast] = useState(null);
  const unit = localStorage.getItem("unit") || "metric";

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
        );
        setForecast(res.data);
      } catch (error) {
        console.error("Error fetching forecast:", error);
      }
    };
    fetchForecast();
  }, [city, unit]);

  if (!forecast) return <p className="text-center mt-20 text-white">Loading...</p>;

  const current = forecast.list[0];
  const hourlyForecasts = forecast.list.slice(0, 5);
  const days = forecast.list.filter((_, index) => index % 8 === 0).slice(0, 5);
  const symbol = unit === "metric" ? "C" : "F";

  return (
    <div
      className="bg-cover bg-no-repeat min-h-screen p-6 text-white"
      style={{ backgroundImage: `url(${weatherBg})` }}
    >
          {/* Logo */}
    <div>
      <AppLogo />
    </div>

          <Link
            to="/settings"
            className="fixed top-5 right-5 text-white text-2xl hover:opacity-80"
          >
            <FiSettings />
          </Link>
        

      <button
        onClick={() => navigate("/Home")}
        className="fixed top-5 left-5 flex items-center gap-1 bg-black/25 px-3 py-1 text-sm rounded hover:bg-black/40 transition"
      >
        <FiArrowLeft className="text-lg" />
        <span>Home</span>
      </button>

      <div className="text-center mt-10">
        <img
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
          alt="weather condition icon"
          className="mx-auto mb-3 w-40 h-40"
        />
        <h1 className="text-6xl font-bold mb-2">
          <h2 className="text-3xl font-semibold mb-1 capitalize">{city}</h2>
          {Math.round(current.main.temp)}°{unit === "metric" ? "C" : "F"}
        </h1>
        <p className="text-xl capitalize">{current.weather[0].description}</p>
      </div>

      {/*3-Hourly Forecast */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-3">3-Hour Forecast</h2>
        <div className="flex overflow-x-scroll space-x-4 pb-2 scrollbar-hide">
          {hourlyForecasts.map((hour, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white/20 backdrop-blur-md p-4 rounded-2xl w-20 text-center"
            >
              <p className="text-sm mb-2">{index === 0 ? "Now" : new Date(hour.dt * 1000).getHours() + ":00"}</p>
              <img
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                alt="icon"
                className="mx-auto w-10 h-10"
              />
              <p className="font-semibold mt-2">{Math.round(hour.main.temp)}°{unit === "metric" ? "C" : "F"}</p>
              <p className="text-xs opacity-80 mt-1">{hour.main.humidity}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-3">5-Day Forecast</h2>
        <div className="space-y-3">
          {days.map((day, index) => {
            const date = new Date(day.dt * 1000);
            const options = { weekday: "short" };
            return (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md p-3 rounded-2xl flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="icon"
                    className="w-10 h-10"
                  />
                  <p>{date.toLocaleDateString("en-US", options)}</p>
                </div>
                <div>
                  <p className="font-semibold">{Math.round(day.main.temp)}°</p>
                  <p className="text-sm capitalize opacity-90">{day.weather[0].description}</p>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
