import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 3-second delay for loading animation

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="loading-container">
          <Spline
            scene="https://prod.spline.design/lfSLfCyqdslvvLSE/scene.splinecode"
            className="spline-canvas"
          />
         
        </div>
      ) : (
        <>
          <Nav />
          <Home />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;