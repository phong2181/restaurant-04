import { Leaf } from "lucide-react";

export default function About(){
    return(
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Located in beautiful Vancouver, British Columbia, Maple & Stone celebrates the 
                incredible diversity of Canadian cuisine. We focus on sustainability and highlight 
                seasonal, locally sourced ingredients in a warm, modern rustic setting.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our West Coast rustic atmosphere features reclaimed wood walls, a stone fireplace, 
                cozy leather booths, and large windows with stunning forest views. Every table is 
                crafted from Canadian maple wood, creating an authentic connection to our heritage.
              </p>
              <div className="flex items-center space-x-4 text-amber-800">
                <Leaf className="h-6 w-6" />
                <span className="font-semibold">Sustainably Sourced • Locally Inspired</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    )
}