import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Brain } from 'lucide-react';

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-primary/20 text-primary";
      case "Full Stack":
        return "bg-accent/20 text-accent";
      case "App Dev":
        return "bg-secondary/40 text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in AI, full-stack development, and system design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-text-primary group-hover:text-primary transition-colors">
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/30 hover:bg-primary hover:text-primary-foreground flex-1"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            onClick={() => window.open('https://github.com/Rishwanth738', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;