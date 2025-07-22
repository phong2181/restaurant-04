import { useState } from "react";
import { Dish,Beverage } from "../data/menuData";

interface MenuProps {
  menuItems: Dish[];
  beverages: Beverage[];
}

export default function Menu({ menuItems, beverages }: MenuProps){
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
    return(
      <section id="menu" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Menu</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover the authentic tastes of Canada with our carefully crafted dishes, 
              featuring the finest local ingredients and traditional cooking methods.
            </p>
          </div>

          {/* Main Dishes */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">Signature Dishes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {menuItems.map((dish) => (
                <div 
                  key={dish.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-amber-900">{dish.name}</h4>
                      <span className="text-lg font-bold text-red-600">{dish.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{dish.description}</p>
                    <button 
                      onClick={() => setSelectedDish(dish)}
                      className="w-full bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beverages */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">Beverages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beverages.map((beverage, index) => (
                <div key={index} className="text-center p-4 border border-amber-200 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">{beverage.name}</h4>
                  <p className="text-red-600 font-bold">{beverage.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}