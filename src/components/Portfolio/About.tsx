import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Lightbulb } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Professional Summary
            </h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              Highly motivated and detail-oriented Full Stack Developer with strong foundational skills in data structures, 
              algorithms, machine learning, and web development. Demonstrated proficiency in programming languages, 
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

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-left">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {highlight.icon}
                    <h4 className="text-lg font-semibold text-text-primary ml-3">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-text-secondary">
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