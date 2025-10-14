import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Onboarding1 from "../components/onboarding/Onboarding1";
import Onboarding2 from "../components/onboarding/Onboarding2";
import Onboarding3 from "../components/onboarding/Onboarding3";



export default function Onboarding() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();



{/* Handles next button */}

function handleNext() {
    if (step < 3) setStep(step + 1);
}

{/* Request Location */}

function handleEnableLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;


                localStorage.setItem(
                    "userLocation", 
                    JSON.stringify({ latitude, longitude })
                );
                localStorage.setItem("hasOnboarded", "true");
                navigate("/home");
            },
            (err) => {
                console.warn("Location access denied:", err.message);
                localStorage.setItem("hasOnboarded", "true");
                navigate("/home");
            }
        );
    } else {
        alert("Geolocation not supported on this browser.");
        navigate("/home");
    }
}
 

    {/*Choose which component to show */}

    const creens = [<Onboarding1 />, <Onboarding2/>, <Onboarding3 onEnableLocation={handleEnableLocation} />
    ];
    const isLast = step ===3

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
            
        </div>
    )
};