import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Creative Assets...",
    "Preparing AI Showcase...",
    "Finalizing Experience..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1200);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
        isComplete ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at center, hsl(225 40% 8%), hsl(212 80% 5%), hsl(225 40% 3%))',
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="flex flex-col items-center space-y-8 relative z-10">
        {/* Logo/Name with glow effect */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-gradient animate-gradient-shift">
              {'Rishwanth J'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-bounce"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: '1s'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h1>
          <p className="text-xl text-text-secondary animate-pulse">
            Portfolio Loading...
          </p>
        </div>

        {/* Loading Progress */}
        <div className="w-80 space-y-4">
          {/* Progress Bar Container */}
          <div className="relative h-2 bg-muted rounded-full overflow-hidden glass-card">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-accent rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
          
          {/* Progress Percentage */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-text-secondary animate-pulse">
              {loadingTexts[currentText]}
            </span>
            <span className="text-primary font-mono font-bold">
              {progress}%
            </span>
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-accent rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>

        {/* Rotating Ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin" />
          <div className="absolute inset-2 border border-accent/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/30 animate-pulse" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-accent/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-accent/30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Center Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full opacity-10 animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingScreen;