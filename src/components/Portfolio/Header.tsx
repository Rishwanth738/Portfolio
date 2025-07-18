import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
// Use public folder image for profile
const profileImage = '/profile-image.jpg';
import Particles from 'react-tsparticles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">Rishwanth J</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            options={{
              fullScreen: { enable: false },
              background: { color: { value: "#0f172a" } },
              particles: {
                number: { value: 120, density: { enable: true, value_area: 800 } },
                color: { value: "#fff" },
                shape: { type: "circle" },
                opacity: { value: 0.8 },
                size: { value: 4 },
                move: { enable: true, speed: 1.5, direction: "none", outModes: { default: "out" } },
                links: { enable: true, color: "#60a5fa", distance: 180, opacity: 0.5, width: 1.5 }
              },
              interactivity: {
                events: { onHover: { enable: true, mode: "repulse" }, resize: true },
                modes: { repulse: { distance: 120, duration: 0.4 } }
              },
              detectRetina: true
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 animate-fade-in">
            {/* Text and Buttons */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 animate-slide-in-left">
                Rishwanth J
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                AI connoisseur & ML fanatic
              </p>
              <p className="text-lg text-text-secondary max-w-3xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Experienced Full Stack Developer with strong foundational skills in data structures, algorithms, machine learning, 
                and web development. Adept at solving complex engineering problems and building scalable solutions.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/rishwanth738', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 mt-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <a
                  href="https://www.linkedin.com/in/rishwanth-j-9516a328a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/rishwanth738"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="mailto:rishwanth738@gmail.com"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="/Resume.pdf"
                  download
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Download className="h-6 w-6" />
                </a>
              </div>
            </div>
            {/* Profile Image Side (Right) */}
            <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-glow animate-glow-pulse">
                <img
                  src={profileImage}
                  alt="Rishwanth J"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full border-4 border-accent opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;