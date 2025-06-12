import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Results />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;