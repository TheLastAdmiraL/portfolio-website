import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FieldTraining from './components/FieldTraining';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 holo-bg circuit-pattern">
      <Navbar />
      <main>
        <Hero />
        <FieldTraining />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
