import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Vellore Institute of Technology, Chennai",
      degree: "B.Tech Computer Science and Engineering",
      cgpa: "9.61/10",
      duration: "2023 - 2027",
      status: "Current",
      color: "bg-primary/20 text-primary",
      keyAchievements: [
        "Dean's List 2023",
        "Top 5% in Algorithms coursework",
        "AI Club Core Member"
      ]
    },
    {
      institution: "Indian Institute of Technology Madras",
      degree: "Bachelor of Science Data Science and Applications",
      cgpa: "3.02/4",
      duration: "2023 - 2028",
      status: "Current",
      color: "bg-accent/20 text-accent",
      keyAchievements: [
        "Completed Data Science Foundations with Distinction",
        "Hackathon Finalist 2024",
        "Student Mentor"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            Strong academic foundation in Computer Science and Data Science from premier institutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={edu.color}>
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {edu.institution}
                    </h3>
                    
                    <p className="text-lg text-text-secondary mb-3">
                      {edu.degree}
                    </p>
                    
                    <div className="flex items-center gap-4 text-text-secondary">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span className="font-semibold text-primary">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    </div>
                    {/* Key Achievements */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-text-primary mb-2 text-base">Key Achievements</h4>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-text-secondary">
                        {edu.keyAchievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;