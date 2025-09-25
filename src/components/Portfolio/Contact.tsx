import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, MapPin, Phone, Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import { useRef, useEffect } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contactRef.current) {
      try {
        anime({
          targets: contactRef.current.querySelectorAll('.contact-animate'),
          opacity: [0, 1],
          translateY: [40, 0],
          easing: 'easeOutExpo',
          duration: 1000,
          delay: anime.stagger(120)
        });
      } catch (error) {
        console.warn('Animation failed to load:', error);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('EmailJS ENV:',
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      import.meta.env.VITE_EMAILJS_USER_ID
    );
    console.log('EmailJS Data:', {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID!
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "rishwanth738@gmail.com",
      action: "mailto:rishwanth738@gmail.com"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      details: "Connect with me on LinkedIn",
      action: "https://www.linkedin.com/in/rishwanth-j-9516a328a/"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Chennai, Tamil Nadu, India",
      action: null
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Available",
      details: "Open to opportunities",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card" ref={contactRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 contact-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 section-web-frame">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 contact-animate">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm currently pursuing my degrees in Computer Science and Data Science, 
                and I'm actively looking for internship and full-time opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105 contact-animate"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-1">
                          {info.title}
                        </h4>
                        {info.action ? (
                          <a
                            href={info.action}
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-text-secondary hover:text-primary transition-colors text-sm"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-text-secondary text-sm">
                            {info.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-primary">
                Quick Actions
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow flex-1"
                  onClick={() => window.open('https://www.linkedin.com/in/rishwanth-j-9516a328a/', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
                <a
                  href="/Resume.pdf"
                  download
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 flex items-center justify-center px-4 py-2 rounded-md border transition-colors"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border shadow-glow contact-animate">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background border-border focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-background border-border focus:ring-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-text-secondary">
            © 2024 Rishwanth J. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;