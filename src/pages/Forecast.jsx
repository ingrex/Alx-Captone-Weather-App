import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import weatherBg from "../assets/ClearNight.gif";



const Forecast = () => {
    const { city } = useParams();
    const navigate = useNavigate();
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const [Forecast, setForecast] = useState(null);
    const unit = localStorage.getItem("unit") || "metric";


    useEffect(() => {
        const fetchForecast = async () => {
            const res = await axios.get(
                 `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
            );
            setForecast(res.data);
        };
        fetchForecast();
    }, [city, unit]);

    if (!Forecast) return <p className="text-center mt-20">Loading...</p>;

    const current = Forecast.list[0];
    const hours = Forecast.list.slice(0,10);
    const days = Forecast.list.filter((_, index) => index % 10 === 0).slice(0,10);


  return (
    <div className="bg-cover min-h-screen text-whitemo" style={{ background: `url(${weatherBg})`}}>
        
    </div>
  )
}

export default Forecast
