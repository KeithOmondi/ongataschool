import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Curriculum from "./pages/Curriculum";
import Admissions from "./pages/Admissions";
import AdmissionForm from "./AdmForm/AdmissionForm";
import JuniorSecondary from "./pages/JuniorSecondary";
import Preparatory from "./pages/Preparatory";
import Kindergarten from "./pages/Kindergarten";
import Loader from './Routes/Loader';

const AppWrapper = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Correctly use inside BrowserRouter

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/admform" element={<AdmissionForm />} />
        <Route path="/junior" element={<JuniorSecondary />} />
        <Route path="/preparatory" element={<Preparatory />} />
        <Route path="/kindergarten" element={<Kindergarten />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
