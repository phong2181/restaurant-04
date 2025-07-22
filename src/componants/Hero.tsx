import { useState } from "react";

export default function Hero(){
    const [activeSection, setActiveSection] = useState('home');
        const scrollToSection = (sectionId: string) => {
            setActiveSection(sectionId);
            const element = document.getElementById(sectionId);
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    return(
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">Maple & Stone</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Modern Canadian Cuisine celebrating the rich, diverse flavours of Canada
          </p>
          <p className="text-lg mb-8 opacity-90">
            From coastal seafood to prairie meats and fresh local produce
          </p>
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Our Menu
          </button>
        </div>
      </section>
    )
}