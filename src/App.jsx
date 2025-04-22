import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Spline ke link se portfolio content kholne ke liye
  useEffect(() => {
    const handleLinkClick = () => {
      if (window.location.pathname === '/portfolio') {
        setIsLoading(false);
      }
    };
    window.addEventListener('popstate', handleLinkClick);
    return () => window.removeEventListener('popstate', handleLinkClick);
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="loading-container">
          <Spline
            scene="https://prod.spline.design/r5ZQ5Aotfkk6f2Gr/scene.splinecode"
            onLoad={() => console.log('New Spline animation loaded!')}
          />
          
        </div>
      ) : (
        <Routes>
          <Route
            path="/portfolio"
            element={
              <>
                <Nav />
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="*" element={<></>} />
        </Routes>
      )}
    </div>
  );
}

export default App;