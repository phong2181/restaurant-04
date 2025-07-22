import { Leaf } from "lucide-react";

export default function Footer(){
    return(
      <footer className="bg-amber-950 text-amber-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-6 w-6 text-red-400" />
            <span className="text-xl font-bold">Maple & Stone</span>
          </div>
          <p className="opacity-75">© 2025 Maple & Stone Restaurant. Celebrating Canadian cuisine with pride.</p>
        </div>
      </footer>
    )
}