import React from 'react';
import { ArrowLeft, TrendingUp, BatteryCharging, MapPin, Users, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketTrends = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-flex items-center text-[#00ff9d] hover:text-[#00cc7d] mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Calculator
      </Link>
      
      <h1 className="text-3xl font-bold text-white mb-6 neon-glow">Golf Cart Market Trends</h1>
      
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 mb-8 neon-border">
        <div className="prose prose-invert max-w-none">
          <h2>Current State of the Golf Cart Market</h2>
          <p>
            The golf cart market is experiencing significant growth, driven by factors beyond traditional golf course use. 
            Neighborhood Electric Vehicles (NEVs) and Personal Transportation Vehicles (PTVs) are becoming increasingly popular 
            for short-distance travel in communities, resorts, and campuses. Understanding current trends can help you make 
            smarter buying and selling decisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-800 p-5 rounded-lg">
              <TrendingUp className="h-8 w-8 text-[#00ff9d] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Market Growth</h3>
              <p className="text-sm">The global golf cart market is projected to grow significantly, with estimates reaching over $3 billion by 2028, driven by NEV adoption and recreational use.</p>
            </div>
            
            <div className="bg-gray-800 p-5 rounded-lg">
              <BatteryCharging className="h-8 w-8 text-[#00ff9d] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Electric Dominance</h3>
              <p className="text-sm">Electric carts dominate the market due to lower noise, reduced maintenance, and environmental benefits. Lithium-ion batteries are gaining traction over traditional lead-acid.</p>
            </div>
          </div>
          
          <h2>Key Trends Shaping the Market</h2>
          <div className="space-y-6 mb-6">
            <div>
              <h3 className="text-[#00ff9d] mb-2 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Rise of Neighborhood Electric Vehicles (NEVs)
              </h3>
              <p>
                Many communities are embracing golf carts as street-legal NEVs for local transportation. This trend is boosting demand for carts with safety features like lights, mirrors, seatbelts, and higher speeds (up to 25 mph).
              </p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-2 flex items-center">
                <BatteryCharging className="h-5 w-5 mr-2" />
                Lithium-Ion Battery Adoption
              </h3>
              <p>
                While more expensive upfront, lithium-ion batteries offer longer lifespans (8-10 years vs. 4-6 for lead-acid), faster charging, lighter weight, and require less maintenance. This is becoming a major selling point for new and used carts.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-2 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Increased Customization
              </h3>
              <p>
                Buyers are increasingly seeking personalized carts with custom paint jobs, premium seats, upgraded sound systems, lift kits, and unique wheels. Customization significantly impacts resale value.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-2 flex items-center">
                <Sun className="h-5 w-5 mr-2" />
                Solar Power Integration
              </h3>
              <p>
                Solar panels integrated into cart roofs are emerging as a way to extend range and reduce reliance on grid charging, particularly appealing in sunny climates.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-2 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Strong Used Market
              </h3>
              <p>
                The demand for affordable transportation keeps the used golf cart market robust. Well-maintained carts, especially from top brands like Club Car, E-Z-GO, and Yamaha, hold their value well.
              </p>
            </div>
          </div>
          
          <h2>Factors Influencing Golf Cart Prices</h2>
          <ul>
            <li><strong>Brand Reputation:</strong> Established brands command higher prices due to perceived reliability and parts availability.</li>
            <li><strong>Age and Condition:</strong> Depreciation is steepest in the first few years. Condition (excellent, good, fair, poor) heavily influences value.</li>
            <li><strong>Battery Type and Age (Electric):</strong> Lithium-ion adds significant value. Battery age is a critical factor for lead-acid carts.</li>
            <li><strong>Features and Upgrades:</strong> Street-legal kits, premium seats, lift kits, custom wheels, and sound systems increase value.</li>
            <li><strong>Location:</strong> Prices can vary regionally based on demand, local regulations, and proximity to golf communities or coastal areas.</li>
            <li><strong>Seasonality:</strong> Demand and prices tend to be higher in spring and summer.</li>
          </ul>
          
          <h2>Future Outlook</h2>
          <p>
            The golf cart market is expected to continue evolving with advancements in battery technology, autonomous features, and connectivity. 
            As urban mobility needs change, golf carts and NEVs will likely play an increasingly important role in short-distance transportation.
          </p>
          
          <div className="bg-[#00ff9d]/10 border border-[#00ff9d]/30 rounded-lg p-4 my-6">
            <h3 className="text-[#00ff9d] font-semibold mb-2">Stay Informed</h3>
            <p>
              Use our Golf Cart Calculator regularly to stay updated on how market trends affect the value of your specific cart. 
              Understanding these dynamics helps you buy smart and sell high.
            </p>
          </div>
          
          <p className="text-sm text-gray-400 mt-8">
            Last Updated: April 29, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;
