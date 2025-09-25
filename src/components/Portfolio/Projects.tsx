import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Brain } from 'lucide-react';
import { useRef, useEffect } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "SmartLogix: An AI-Powered Logistics Platform",
      description: "Developed an AI-powered Logistics Optimization Platform integrating RL-based routing, predictive forecasting, and automated dispatch systems, achieving a 24% reduction in operational costs",
      technologies: ["Python", "AI/ML", "Deep Learning", "Algorithm Design"],
      category: "AI/ML",
      icon: <Brain className="h-6 w-6" />,
      githubLink: "https://github.com/Rishwanth738/SmartLogiX-An-AI-Powered-Logistics-Optimization-Platform",
    },
    {
      title: "Freshness-and-OCR-detection-Factory-oriented",
      description: "Achieved real-time brand recognition with bulk shipment detection in <1000ms and 95%+ accuracy and implemented expiry date extraction using regex, ensuring 98%+ precision across diverse formats.",
      technologies: ["Deep Learning","Object Detection", "OCR"],
      category: "AI/ML",
      icon: <Code className="h-6 w-6" />,
      githubLink: "https://github.com/Rishwanth738/Freshness-and-ocr-detection-Factory-oriented",
    },
    {
      title: "Suicide Prevention Hotline App",
      description: "Developed an AI-powered mobile prevention hotline system for real-time user intervention using socket programming. Implemented text and realtime guidance and support for 99% accuracy and designed a multi-threaded relational model based on real-time and external API supporting over 15,000+ participants.",
      technologies: ["Flutter", "Socket Programming", "AI", "Real-time Systems", "LLMS"],
      category: "App Dev",
      icon: <Database className="h-6 w-6" />,
      githubLink: "https://github.com/Rishwanth738/HopeLine---Suicide-Prevention-Hotline-app",
    }
  ];

  const projectsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (projectsRef.current) {
      const loadAnime = async () => {
        try {
          const anime = (await import('animejs')).default;
          anime({
            targets: projectsRef.current?.querySelectorAll('.projects-animate'),
            opacity: [0, 1],
            translateY: [40, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(120)
          });
        } catch (error) {
          console.warn('Animation failed to load:', error);
        }
      };
      loadAnime();
    }
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-primary/20 text-primary";
      case "Full Stack":
        return "bg-accent/20 text-accent";
      case "App Dev":
        return "bg-accent/40 text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-card relative overflow-hidden" ref={projectsRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dynamic opacity-20"></div>
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-primary/20 animate-float animate-morph"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-accent/10 rounded-full animate-float-reverse animate-glow-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 projects-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-gradient-shift text-focus section-web-frame">
            <span className="text-shimmer">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto animate-gradient-shift"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto text-slide-in">
            <span className="text-glitch" data-text="Innovative solutions showcasing expertise">
              Innovative solutions showcasing expertise
            </span>
            <br />
            <span className="text-wave">in AI, full-stack development, and system design</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-premium hover-glow hover-lift parallax-element interactive-hover projects-animate group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-300 animate-glow-pulse">
                    {project.icon}
                  </div>
                  <Badge className={`${getCategoryColor(project.category)} animate-float`}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-text-primary group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-text-secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button 
                    className="btn-base btn-outline btn-sm flex-1"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="btn-base btn-primary btn-xl"
            onClick={() => window.open('https://github.com/Rishwanth738', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;