import ClientsSatisfaction from './components/Satisfaction/Satisfaction';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Consult from './components/Consult/Consult';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientsSatisfaction />
      <Consult />
    </>
  );
};

export default App;
