import ClientsSatisfaction from './components/Satisfaction/Satisfaction';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Consult from './components/Consult/Consult';
import Features from './components/Features/Features';
import Care from './components/Care/Care';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientsSatisfaction />
      <Consult />
      <Features />
      <Care />
    </>
  );
};

export default App;
