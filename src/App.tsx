import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import Toolkit from './components/Toolkit';
import Journey from './components/Journey';
import Education from './components/Education';
import WhatDrivesMe from './components/WhatDrivesMe';
import FocusAreas from './components/FocusAreas';
import WhyDevOps from './components/WhyDevOps';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Competencies />
      <Toolkit />
      <Journey />
      <Education />
      <WhatDrivesMe />
      <FocusAreas />
      <WhyDevOps />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
