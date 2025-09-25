import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Target, Timer, Award, Star } from 'lucide-react';

const SportsTimer = () => {
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timerRef.current) {
      try {
        // Create timeline for sports achievements
        const timeline = anime.timeline({
          easing: 'easeOutExpo',
          duration: 1000
        });

        // Animate the container entrance
        timeline.add({
          targets: timerRef.current.querySelectorAll('.sports-animate'),
          opacity: [0, 1],
          translateY: [40, 0],
          delay: anime.stagger(150)
        });

        // Create timer animations for different sports achievements
        const achievements = [
          { id: 'timer01', value: 1500, label: 'Marathon Time', icon: Timer },
          { id: 'timer02', value: 500, label: 'Sprint Record', icon: Target },
          { id: 'timer03', value: 1000, label: 'Training Session', icon: Trophy }
        ];

        achievements.forEach((achievement, index) => {
          const element = timerRef.current?.querySelector(`#${achievement.id}`);
          if (element) {
            // Animate the timer value
            anime({
              targets: element,
              innerHTML: [0, achievement.value],
              round: 1,
              duration: 2000 + (index * 500),
              easing: 'easeOutExpo',
              delay: 1000 + (index * 200)
            });
          }
        });

      } catch (error) {
        console.warn('Sports timer animation failed:', error);
      }
    }
  }, []);

  const sportsAchievements = [
    {
      title: "Marathon Runner",
      description: "Completed multiple marathons with personal best times",
      time: "2:45:30",
      icon: Trophy,
      category: "Endurance"
    },
    {
      title: "Sprint Champion", 
      description: "Regional sprint champion with record-breaking times",
      time: "10.2s",
      icon: Target,
      category: "Speed"
    },
    {
      title: "Team Captain",
      description: "Led university sports teams to championship victories",
      time: "3 seasons",
      icon: Medal,
      category: "Leadership"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sports-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Athletic Achievements
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Beyond code, I'm passionate about sports and fitness. Here are some of my athletic milestones.
          </p>
        </div>

        <div ref={timerRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {sportsAchievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="sports-animate hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    {achievement.title}
                  </CardTitle>
                  <Badge variant="secondary" className="mt-2">
                    {achievement.category}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-text-secondary mb-4">
                    {achievement.description}
                  </p>
                  <div className="text-3xl font-bold text-accent">
                    {achievement.time}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Animated Timer Section */}
        <div className="grid md:grid-cols-3 gap-8 sports-animate">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Timer className="w-8 h-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Marathon Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-accent mb-2">
                <span id="timer01">0</span>s
              </div>
              <p className="text-sm text-text-secondary">Personal Best</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Target className="w-8 h-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Sprint Record</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-accent mb-2">
                <span id="timer02">0</span>s
              </div>
              <p className="text-sm text-text-secondary">100m Dash</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Training Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-accent mb-2">
                <span id="timer03">0</span>s
              </div>
              <p className="text-sm text-text-secondary">Daily Workout</p>
            </CardContent>
          </Card>
        </div>

        {/* Sports Philosophy */}
        <div className="mt-16 text-center sports-animate">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="py-8">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Sports Philosophy
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                "Just as in sports, success in software development requires discipline, 
                continuous improvement, and the ability to perform under pressure. 
                My athletic background has taught me resilience, teamwork, and the 
                importance of setting and achieving ambitious goals."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SportsTimer; 