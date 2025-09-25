import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';
import { useRef, useEffect } from 'react';

const Experience = () => {
  const workExperience = [
    {
      company: "Zoho Corporation",
      position: "Artificial Intelligence Intern",
      location: "Chennai, Tamil Nadu",
      duration: "Jun 2023 - July 2023",
      type: "Internship",
      responsibilities: [
        "Automated postman script conversion from old format to the newer format via fine tuning LLMs",
        "Built a Streamlit frontend for Axolotl inference, fine tuning and evaluation of LLMs",
        "Developed a MCP server and also used prompt engineering to streamline QEngine script generation from a fine tuned model on OpenUI web"
      ]
    },
    {
      company: "Finari Private Services Limited", 
      position: "Artificial Intelligence & Machine Learning Intern",
      location: "Chennai, Tamil Nadu",
      duration: "May 2023 - Jun 2023",
      type: "Internship",
      responsibilities: [
        "Helped automate Email services and alerts at the company using AWS Polly and GMail API connection to AWS",
        "Streamlined company database enabled acceptance criteria generation by fine tuning LLMs"
      ]
    }
  ];

  const leadershipExperience = [
    {
      organization: "Nilgiri House, IIT Madras",
      position: "Student Coordinator", 
      duration: "Nov 2023 - July 2024",
      responsibilities: [
        "Organized house events and coordinated student activities",
        "Developed leadership and communication skills"
      ]
    }
  ];

  const experienceRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (experienceRef.current) {
      const loadAnime = async () => {
        try {
          const anime = (await import('animejs')).default;
          anime({
            targets: experienceRef.current?.querySelectorAll('.experience-animate'),
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
    <section id="experience" className="py-20 bg-background" ref={experienceRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 experience-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 section-web-frame">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            Professional journey in AI, machine learning, and leadership roles
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center gap-3 experience-animate">
            <Briefcase className="h-6 w-6 text-primary" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-[1.02] experience-animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-primary/20 text-primary">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-text-secondary text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-text-primary mb-2">
                        {exp.position}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-lg text-text-secondary mb-4">
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-text-secondary flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center gap-3 experience-animate">
            <Users className="h-6 w-6 text-primary" />
            Leadership Experience
          </h3>
          
          <div className="space-y-8">
            {leadershipExperience.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 experience-animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-accent/20 text-accent">
                          Leadership
                        </Badge>
                        <div className="flex items-center gap-2 text-text-secondary text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-text-primary mb-2">
                        {exp.position}
                      </h4>
                      
                      <div className="text-lg text-text-secondary mb-4 font-semibold">
                        {exp.organization}
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-text-secondary flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            Experience Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border p-6 text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-3">
                  AI/ML
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  Specialization
                </h4>
                <p className="text-text-secondary">
                  Focused experience in artificial intelligence and machine learning
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border p-6 text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-3">
                  2+
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  Years Experience
                </h4>
                <p className="text-text-secondary">
                  Progressive experience in tech industry and leadership roles
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border p-6 text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-3">
                  IIT
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  Leadership
                </h4>
                <p className="text-text-secondary">
                  Student leadership experience at prestigious IIT Madras
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;