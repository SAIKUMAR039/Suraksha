import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FeaturesPage from "./components/FeaturesPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 text-gray-800">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
