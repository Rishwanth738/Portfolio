import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Brain, Server, Globe, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 80 },
        { name: "R", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React JS", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "HTML & CSS", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "Frontend Frameworks", level: 88 }
      ]
    },
    {
      title: "Databases & Backend",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Database Design", level: 82 },
        { name: ".NET Framework", level: 75 },
        { name: "Backend Systems", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "Data Structures", level: 92 },
        { name: "Algorithms", level: 90 },
        { name: "AI Development", level: 85 },
        { name: "Data Analysis", level: 82 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Git Version Control", level: 88 },
        { name: "Linux Systems", level: 82 },
        { name: "Development Tools", level: 85 },
        { name: "System Design", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Hackathons & Competitions",
      items: [
        "Flipkart GRID 6.0 Robotics Challenge - Semifinalist", 
        "Innovate-4.0 - Runner Up",
        "SCOPE Champ Expo - Winners"
      ]
    },
    {
      title: "Professional Certifications",
      items: [
        "IITM Data Science BS Degree Foundational Level - Issued by IIT Madras in 2024",
        "Generative AI - Issued by Oracle in 2024",
        "Intro to Gen AI with AWS - Issued by Udemy in 2024",
        "Machine Learning and Deep Learning - Issued by Udemy in 2024",
        "Python - Issued by IIT Bombay Spoken Tutorial in 2024",
        "C and C++ - Issued by IIT Bombay Spoken Tutorial in 2024"
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-primary";
    if (level >= 80) return "bg-accent";
    if (level >= 70) return "bg-secondary";
    return "bg-muted";
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            Comprehensive technical skills spanning full-stack development, AI/ML, and system design
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary font-semibold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Certifications & Achievements
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-text-primary mb-4">
                    {cert.title}
                  </h4>
                  <div className="space-y-3">
                    {cert.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;