import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: 'mailto:dy402937@gmail.com' }
  ];

  const getInitials = () => "Awadh Kishor"; // Per user constraint "same iske jaisa no any changes", we might keep "Awadh Kishor" logo if they want exact, wait "Deepak Kumar CV.docx... iske hisab se karo aur website same hona chahiye" means data is Deepak Kumar, interface is Awadh's. So "Deepak Kumar". The logo will just be "Deepak Kumar".

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#home" className="logo">
          Deepak <span className="text-accent">Kumar</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="nav-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Mobile Nav Toggle */}
          <button 
            className="mobile-toggle" style={{ marginLeft: '1rem' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
