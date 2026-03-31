import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ResumeViewer from './components/ResumeViewer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('portfolio');

  useEffect(() => {
    // Basic hash router
    const handleHashChange = () => {
      if (window.location.hash === '#resume') {
        setCurrentView('resume');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToPortfolio = () => {
    window.location.hash = '#home';
  };

  return (
    <>
      <ParticleBackground />
      <Header />
      
      {currentView === 'resume' ? (
        <main>
          <ResumeViewer onBack={handleBackToPortfolio} />
        </main>
      ) : (
        <>
          <main>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
          </main>
          
          <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)' }}>
            <p>&copy; {new Date().getFullYear()} Deepak Kumar. All rights reserved.</p>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
