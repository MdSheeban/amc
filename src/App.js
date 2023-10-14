import './App.css';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import Clients from './Components/Clients';
import About from './Components/About';
import Features from './Components/Features';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SocialMedia from './Components/SocialMedia';

function App() {

  return (
    <>
      <Navbar />
      <Carousal />
      <Clients />
      <About />
      <Features />
      <Services /> 
      <Contact />
      <Footer />
      <SocialMedia />
   </>
  );
}

export default App;
