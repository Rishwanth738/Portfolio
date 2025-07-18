import Header from '@/components/Portfolio/Header';
import About from '@/components/Portfolio/About';
import Education from '@/components/Portfolio/Education';
import Experience from '@/components/Portfolio/Experience';
import Projects from '@/components/Portfolio/Projects';
import Skills from '@/components/Portfolio/Skills';
import Contact from '@/components/Portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
