import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
// Use public folder image for profile
const profileImage = '/profile-image.jpg';
import Particles from 'react-tsparticles';
import { useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      const loadAnime = async () => {
        try {
          const anime = (await import('animejs')).default;
          anime({
            targets: heroRef.current?.querySelectorAll('.hero-animate'),
            opacity: [0, 1],
            translateY: [40, 0],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: anime.stagger(120)
          });
        } catch (error) {
          console.warn('Animation failed to load:', error);
        }
      };
      loadAnime();
    }
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
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card-intense border-b border-primary/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gradient animate-gradient-shift hover:scale-105 transition-transform cursor-pointer">Rishwanth J</div>
            
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110 hover:text-neon relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            
            <button
              className="btn-base btn-ghost btn-icon md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden glass-card-intense border-b border-primary/20 animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-text-secondary hover:text-primary transition-all duration-300 w-full text-left hover:bg-primary/10 rounded-lg transform hover:translate-x-2 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-dynamic relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            options={{
              fullScreen: { enable: false },
              background: { 
                color: { value: "transparent" },
                image: "radial-gradient(circle, rgba(120,0,0,0.12) 0%, rgba(0,0,0,0) 70%)"
              },
              particles: {
                number: { 
                  value: 200, 
                  density: { enable: true, value_area: 800 } 
                },
                color: { 
                  value: ["#FF1A1A", "#FFFFFF", "#F2F2F2", "#B3001B"],
                  animation: {
                    enable: true,
                    speed: 15,
                    sync: false
                  }
                },
                shape: { 
                  type: ["circle", "triangle", "polygon", "star", "edge"],
                  polygon: { sides: { min: 3, max: 8 } },
                  star: { sides: { min: 5, max: 8 } }
                },
                opacity: { 
                  value: { min: 0.2, max: 1 },
                  animation: { 
                    enable: true, 
                    speed: { min: 0.5, max: 3 }, 
                    sync: false,
                    startValue: "random",
                    destroy: "none"
                  }
                },
                size: { 
                  value: { min: 1, max: 12 },
                  animation: { 
                    enable: true, 
                    speed: { min: 1, max: 5 }, 
                    sync: false,
                    startValue: "random",
                    destroy: "none"
                  }
                },
                rotate: {
                  value: { min: 0, max: 360 },
                  direction: "random",
                  animation: {
                    enable: true,
                    speed: { min: 1, max: 10 },
                    sync: false
                  }
                },
                move: { 
                  enable: true, 
                  speed: { min: 0.3, max: 3 }, 
                  direction: "none", 
                  random: true,
                  straight: false,
                  outModes: { default: "bounce" },
                  attract: { enable: true, rotateX: 800, rotateY: 1600 },
                  trail: {
                    enable: true,
                    length: 10,
                    fillColor: "#000"
                  }
                },
                links: { 
                  enable: true, 
                  color: { value: ["#FF1A1A", "#FFFFFF", "#E6E6E6"] }, 
                  distance: 250, 
                  opacity: { min: 0.1, max: 0.6 }, 
                  width: { min: 0.5, max: 2 },
                  triangles: { 
                    enable: true, 
                    color: { value: ["#FF1A1A", "#FFFFFF"] }, 
                    opacity: { min: 0.02, max: 0.15 }
                  },
                  shadow: {
                    enable: true,
                    color: "#FF1A1A",
                    blur: 10
                  }
                },
                life: {
                  count: 0,
                  delay: { value: 0, sync: false },
                  duration: { value: 0, sync: false }
                },
                zIndex: {
                  value: { min: -10, max: 10 },
                  opacityRate: 0.5,
                  sizeRate: 1,
                  velocityRate: 1
                }
              },
              interactivity: {
                detectsOn: "canvas",
                events: { 
                  onHover: { 
                    enable: true, 
                    mode: ["repulse", "grab", "bubble"], 
                    parallax: { enable: true, force: 2, smooth: 10 }
                  }, 
                  onClick: { 
                    enable: true, 
                    mode: ["push", "bubble"] 
                  },
                  resize: true 
                },
                modes: { 
                  repulse: { 
                    distance: 200, 
                    duration: 0.6,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad"
                  },
                  grab: { 
                    distance: 250, 
                    links: { opacity: 1, color: "#60a5fa" } 
                  },
                  push: { 
                    quantity: 5,
                    groups: ["z5000", "z7500", "z2500", "z1000"]
                  },
                  bubble: {
                    distance: 250,
                    size: 15,
                    duration: 2,
                    opacity: 1,
                    speed: 3,
                    color: { value: ["#4fc3f7", "#9575cd", "#ba68c8"] }
                  }
                }
              },
              detectRetina: true,
              smooth: true,
              motion: {
                disable: false,
                reduce: { factor: 4, value: true }
              }
            }}
          />
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 animate-float animate-morph"></div>
          <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/10 rounded-full animate-float-reverse animate-glow-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-accent rounded-lg animate-rotate-scale"></div>
          <div className="absolute top-1/2 right-1/3 w-6 h-20 bg-primary/15 transform rotate-45 animate-float"></div>
        </div>

        {/* Spider Web Overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none web-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={heroRef}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Text and Buttons */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-animate text-gradient animate-gradient-shift text-focus">
                <span className="floating-letters">
                  {'Rishwanth J'.split('').map((letter, index) => (
                    <span key={index} style={{ '--i': index } as React.CSSProperties}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 hero-animate text-glitch text-glow-animate" data-text="ML Connoisseur">
                ML Connoisseur
              </p>
              <p className="text-lg text-text-secondary max-w-3xl mb-10 leading-relaxed hero-animate hover:text-text-accent transition-colors duration-500">
                Experienced Full Stack Developer with strong foundational skills in data structures, algorithms, machine learning, 
                and web development. Adept at solving complex engineering problems and building scalable solutions.
              </p>
              {/* CTA Buttons */}
              <div className="btn-group flex-col sm:flex-row justify-center md:justify-start items-center hero-animate">
                <button 
                  className="btn-base btn-primary btn-lg"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </button>
                <button 
                  className="btn-base btn-outline btn-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </button>
                <button
                  className="btn-base btn-outline btn-lg"
                  onClick={() => window.open('https://github.com/rishwanth738', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </button>
              </div>
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 mt-8 hero-animate">
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
            <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0 hero-animate">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden glass-card-intense hover-lift group">
                <img
                  src={profileImage}
                  alt="Rishwanth J"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500"></div>
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