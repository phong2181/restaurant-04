// pages/index.tsx

import About from '../componants/About';
import Footer from '../componants/Footer';
import Header from '../componants/Header';
import Hero from '../componants/Hero';
import MenuSection from '../componants/Menu';
import { menuItems, beverages } from '../data/menuData';

export default function HomePage() {
  return (
    <main>
        <Header />
        <About />
        <Footer/>
        <Hero/>
      <MenuSection menuItems={menuItems} beverages={beverages} />
    </main>
  );
}
