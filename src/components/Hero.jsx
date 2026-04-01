import { motion } from 'framer-motion';
import { Code, Link, Mail } from 'lucide-react';
import profilePhoto from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-text-content"
        >
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="hero-title">
            Deepak Kumar
          </h1>
          <h2 className="hero-subtitle">
            Software Developer <span className="text-accent">|</span> AI Enthusiast
          </h2>
          <p className="hero-description">
            I'm a passionate developer proficient in Java, JavaScript, Python, C/C++, and building ML-powered applications. I love creating robust, scalable, and efficient software solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-rounded btn-white">
              View My Projects
            </a>
            <a href="mailto:dy402937@gmail.com" className="btn btn-rounded btn-transparent">
              Contact Me
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/Deepakkumar2007" className="social-icon" target="_blank" rel="noopener noreferrer">
              <Code size={20} />
            </a>
            <a href="https://linkedin.com/in/deepakkumar002" className="social-icon" target="_blank" rel="noopener noreferrer">
              <Link size={20} />
            </a>
            <a href="mailto:dy402937@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ position: 'relative', width: '350px', height: '350px' }}>
            {/* Animated rotating ring */}
            <div style={{
              position: 'absolute', inset: '-6px', borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #ef4444, transparent, #ef4444)',
              animation: 'spin 4s linear infinite',
              zIndex: 0
            }} />
            {/* Glow backdrop */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              boxShadow: '0 0 60px rgba(239, 68, 68, 0.35)',
              zIndex: 0
            }} />
            {/* Photo container */}
            <div style={{
              position: 'relative', width: '100%', height: '100%',
              borderRadius: '50%', background: '#1a1a1a',
              border: '4px solid #ef4444', overflow: 'hidden', zIndex: 1
            }}>
              <img
                src={profilePhoto}
                alt="Deepak Kumar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
