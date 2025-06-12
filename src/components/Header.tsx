import React, { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-800 p-2 rounded-lg">
              <Server className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">IT Profit Accelerator</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('results')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-800 transition-colors">
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium"
            >
              Get Assessment
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-800 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('results')} className="text-gray-700 hover:text-blue-800 transition-colors text-left">
                Results
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-800 transition-colors text-left">
                Process
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-800 transition-colors text-left">
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium w-fit"
              >
                Get Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;