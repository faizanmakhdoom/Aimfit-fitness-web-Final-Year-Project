import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Blog from './pages/Blog';
import HolidayWorkout from './pages/HolidayWorkout';
import WinterMotivation from './pages/WinterMotivation';
import ResetFitness from './pages/ResetFitness';
import HealthyEating from './pages/HealthyEating';
import RoleWater from './pages/RoleWater';
import PrePostWorkout from './pages/PrePostWorkout';
import ResetRecover from './pages/ResetRecover';
import RestDays from './pages/RestDays';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import JoinUs from "./pages/JoinUs";
import Community from "./pages/Community";
import Admin from "./pages/Admin";
import BMICalculator from './pages/BMICalculator';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/winter-motivation" element={<WinterMotivation />} />
        <Route path="/reset-fitness" element={<ResetFitness />} />
        <Route path="/healthy-eating" element={<HealthyEating />} />
        <Route path="/role-water" element={<RoleWater />} />
        <Route path="/prepsot-workout" element={<PrePostWorkout />} />
        <Route path="/reset-recover" element={<ResetRecover />} />
        <Route path="/rest-days" element={<RestDays />} />
        <Route path="/holiday-workout" element={<HolidayWorkout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
