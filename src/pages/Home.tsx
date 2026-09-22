import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Work from '../components/Work';
// import CaseStudy from '../components/CaseStudy';
import Skills from '../components/Skills';
import Education from '../components/Education';

/**
 * Order is deliberate: professional experience sits directly under the hero,
 * above any personal project.
 */
const Home = () => (
  <>
    <Hero />
    <Experience />
    <Work />
    {/* Case study hidden for now. To bring it back: uncomment the import above,
        this line, and the 'case-study' entry in Navigation.tsx. */}
    {/* <CaseStudy /> */}
    <Skills />
    <Education />
  </>
);

export default Home;
