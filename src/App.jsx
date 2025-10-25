import { Routes, Route } from "react-router-dom";
import Onboarding1 from "./components/onboarding/Onboarding1";
import Onboarding2 from "./components/onboarding/Onboarding2";
import Onboarding3 from "./components/onboarding/Onboarding3";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Forecast from "./pages/Forecast";
import Settings from "./pages/Settings";
import Footer from "./services/Footer";
import { useLocation } from "react-router-dom";


const App = () => {

  const location = useLocation();
  const hideFooter = ["/", "/onboarding2", "/onboarding3"].includes(location.pathname);

  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div>
        <Routes>
          {/* Onboarding screens */}
          <Route path="/" element={<Onboarding1 />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />

          <Route path="/home" element={<Home />} />
          <Route path="/details/:city" element={<Details />} />
          <Route path="/forecast/:city" element={<Forecast />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
