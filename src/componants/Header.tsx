import { Leaf } from "lucide-react";
import { useState } from "react";


export default function Header(){

    const [activeSection, setActiveSection] = useState('home');
    const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return(
      <header className="bg-amber-900 text-amber-50 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-red-400" />
              <h1 className="text-2xl font-bold">Maple & Stone</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`hover:text-red-300 transition-colors ${activeSection === 'home' ? 'text-red-300' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`hover:text-red-300 transition-colors ${activeSection === 'about' ? 'text-red-300' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className={`hover:text-red-300 transition-colors ${activeSection === 'menu' ? 'text-red-300' : ''}`}
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`hover:text-red-300 transition-colors ${activeSection === 'contact' ? 'text-red-300' : ''}`}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>
    )
}