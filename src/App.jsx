import { Routes, Route } from "react-router-dom";
import Onboarding1 from "./components/onboarding/Onboarding1";
import Onboarding2 from "./components/onboarding/Onboarding2";
import Onboarding3 from "./components/onboarding/Onboarding3";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div>
        <Routes>
          {/* Onboarding screens */}
          <Route path="/" element={<Onboarding1 />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
