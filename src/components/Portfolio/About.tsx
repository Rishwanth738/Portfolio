import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Lightbulb } from 'lucide-react';
import { useRef, useEffect } from 'react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies and frameworks"
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Machine Learning",
      description: "Strong foundation in AI and ML algorithms"
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Science",
      description: "Experience with data analysis and visualization"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Problem Solving",
      description: "Adept at solving complex engineering challenges"
    }
  ];
  const aboutRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (aboutRef.current) {
      const loadAnime = async () => {
        try {
          const anime = (await import('animejs')).default;
          anime({
            targets: aboutRef.current?.querySelectorAll('.about-animate'),
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

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden" ref={aboutRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dynamic opacity-30"></div>
      <div className="absolute top-10 right-10 w-32 h-32 border border-accent/20 animate-float-reverse animate-morph"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary/10 rounded-full animate-float animate-glow-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 about-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-gradient-shift text-focus section-web-frame">
            <span className="text-shimmer">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto animate-gradient-shift"></div>
          <p className="mt-6 text-lg text-text-secondary max-w-md mx-auto">
            Passionate about AI & Innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6 about-animate">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Professional Summary
            </h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              Highly motivated and detail-oriented AI Engineer and Full Stack Developer with strong foundational skills in data structures, 
              algorithms, machine learning, AI pipelines and web development. Demonstrated proficiency in programming languages, 
              software engineering principles, and building scalable solutions and scalable backend systems.
            </p>
            <p className="text-text-secondary leading-relaxed text-lg">
              Demonstrated ability to build production-grade tools, fine-tune language models, and work across Linux-based 
              environments. Adept at solving complex engineering problems and building distributed systems, and information retrieval.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Full Stack Developer
              </Badge>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                AI Enthusiast
              </Badge>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Problem Solver
              </Badge>
            </div>
          </div>

          
          <div className="grid sm:grid-cols-2 gap-6 about-animate">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="glass-card-intense hover-glow hover-lift parallax-element interactive-hover group animate-zoom-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-colors duration-300">
                      {highlight.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary ml-3 group-hover:text-gradient transition-colors duration-300">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-text-secondary group-hover:text-text-accent transition-colors duration-300">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;