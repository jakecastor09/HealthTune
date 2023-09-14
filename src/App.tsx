import Care from './components/Care/Care';
import Consult from './components/Consult/Consult';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Questions from './components/Questions/Questions';
import ClientsSatisfaction from './components/Satisfaction/Satisfaction';

const App = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <HeroSection />
      <ClientsSatisfaction />
      <Consult />
      <Features />
      <Care />
      <Questions />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default App;
