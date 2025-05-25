// import React from 'react';
import { useMode } from './context/ModeContext';
import ModeOverlay from './components/ModeOverlay';
import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfessionalHero from './components/Hero/ProfessionalHero';
import CinematicPlaceholder from './pages/CinematicPlaceholder';

function App() {
  const { mode } = useMode();

  return (
    <>
      {!mode && <ModeOverlay />}
      {mode === "cinematic" &&  <CinematicPlaceholder />}
      {mode === "professional" && (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProfessionalHero />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
          </Router>
        )}
    </>
  );
}

export default App;