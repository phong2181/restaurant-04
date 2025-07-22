// components/Models.tsx

import { X } from 'lucide-react';
import { Dish } from '../data/menuData';

interface ModelsProps {
  selectedDish: Dish | null;
  setSelectedDish: (dish: Dish | null) => void;
}

export default function Models({ selectedDish, setSelectedDish }: ModelsProps) {
  if (!selectedDish) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={selectedDish.image} 
            alt={selectedDish.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button 
            onClick={() => setSelectedDish(null)}
            className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-bold text-amber-900">{selectedDish.name}</h3>
            <span className="text-2xl font-bold text-red-600">{selectedDish.price}</span>
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{selectedDish.description}</p>
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-xl font-bold text-amber-800 mb-3">Ingredients</h4>
            <p className="text-gray-700 leading-relaxed">{selectedDish.ingredients}</p>
          </div>
          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => setSelectedDish(null)}
              className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
