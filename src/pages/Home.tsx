import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Experience } from '../sections/Experience';
import { Projects } from '../sections/Projects';
import { Services } from '../sections/Services';
import { Philosophy } from '../sections/Philosophy';
import { Contact } from '../sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Philosophy />
      <Contact />
    </>
  );
}
