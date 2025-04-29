import React from 'react';
import { ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BuyingGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-flex items-center text-[#00ff9d] hover:text-[#00cc7d] mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Calculator
      </Link>
      
      <h1 className="text-3xl font-bold text-white mb-6 neon-glow">Golf Cart Buying Guide</h1>
      
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 mb-8 neon-border">
        <div className="prose prose-invert max-w-none">
          <h2>Introduction to Golf Cart Purchasing</h2>
          <p>
            Buying a golf cart is a significant investment, whether you're using it for golf, neighborhood transportation, 
            or property maintenance. This guide will help you navigate the key considerations to make an informed purchase.
          </p>
          
          <h2>New vs. Used: Making the Right Choice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-[#00ff9d] mb-2">New Golf Carts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Latest features and technology</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full manufacturer warranty</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customization options</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Higher initial cost ($5,000-$15,000+)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Immediate depreciation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-[#00ff9d] mb-2">Used Golf Carts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Lower initial cost ($2,000-$8,000)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Less depreciation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Potentially better value</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unknown history/potential issues</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limited or no warranty</span>
                </li>
              </ul>
            </div>
          </div>
          
          <h2>Electric vs. Gas: Choosing Your Power Source</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-[#00ff9d] mb-2">Electric Golf Carts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quiet operation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Lower maintenance costs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No emissions</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limited range (20-30 miles per charge)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Battery replacement cost ($800-$1,500 every 4-6 years)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-[#00ff9d] mb-2">Gas Golf Carts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Greater range (100+ miles per tank)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>More power for hills and rough terrain</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quick refueling</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Noisier operation</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Higher maintenance costs</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Emissions and fuel costs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <h2>Top Brands to Consider</h2>
          <p>
            While there are many golf cart manufacturers, these brands consistently receive high ratings for quality, 
            reliability, and resale value:
          </p>
          <ul>
            <li><strong>Club Car</strong> - Known for durability and aluminum frames that resist rust</li>
            <li><strong>E-Z-GO</strong> - Excellent value and widespread dealer network</li>
            <li><strong>Yamaha</strong> - Renowned for reliability and performance</li>
            <li><strong>Garia</strong> - Luxury carts with automotive-grade components</li>
            <li><strong>Star EV</strong> - Growing reputation for quality at competitive prices</li>
          </ul>
          
          <h2>Essential Features to Look For</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-[#00ff9d] mb-1">Battery System (Electric Carts)</h3>
              <p>Look for 48-volt systems for better performance than 36-volt. Check battery age - they typically last 4-6 years.</p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-1">Frame Construction</h3>
              <p>Aluminum frames offer better rust resistance than steel, especially in humid or coastal areas.</p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-1">Suspension</h3>
              <p>Independent suspension provides a smoother ride, especially important for neighborhood use.</p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-1">Braking System</h3>
              <p>Four-wheel brakes offer better stopping power than rear-wheel only systems.</p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-1">Seating Capacity</h3>
              <p>Standard carts seat 2 people, but 4-6 passenger models are available for families.</p>
            </div>
          </div>
          
          <h2>Inspecting a Used Golf Cart</h2>
          <p>When buying used, be sure to check:</p>
          <ul>
            <li><strong>Battery condition</strong> - Test voltage under load, check for corrosion</li>
            <li><strong>Frame integrity</strong> - Look for rust, cracks, or signs of accidents</li>
            <li><strong>Tire condition</strong> - Check tread depth and look for uneven wear</li>
            <li><strong>Controller function</strong> - Test all speeds and directional controls</li>
            <li><strong>Charger operation</strong> - Ensure it charges properly</li>
            <li><strong>Serial numbers</strong> - Verify they match and haven't been altered</li>
          </ul>
          
          <h2>Understanding Pricing</h2>
          <p>
            Golf cart prices vary widely based on age, condition, brand, and features. Use our calculator to get a baseline 
            value, but expect these general ranges:
          </p>
          <ul>
            <li>New standard 2-passenger: $5,000-$10,000</li>
            <li>New 4-passenger: $10,000-$15,000</li>
            <li>Used 2-passenger (3-5 years old): $3,000-$6,000</li>
            <li>Used 4-passenger (3-5 years old): $4,500-$8,000</li>
            <li>Luxury or specialty models: $15,000-$25,000+</li>
          </ul>
          
          <h2>Where to Buy</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-[#00ff9d] mb-1">Authorized Dealers</h3>
              <p>Offer warranties, service, and financing but typically higher prices.</p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-1">Private Sellers</h3>
              <p>Often lower prices but no warranty or support. Always test drive and inspect thoroughly.</p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-1">Online Marketplaces</h3>
              <p>Wide selection but inspect before purchasing and be wary of shipping costs.</p>
            </div>
            
            <div>
              <h3 className="text-[#00ff9d] mb-1">Golf Courses</h3>
              <p>Often sell their fleet carts every few years. Well-maintained but high usage.</p>
            </div>
          </div>
          
          <h2>Final Tips</h2>
          <ul>
            <li>Test drive before buying</li>
            <li>Consider your primary usage (golf, neighborhood, property)</li>
            <li>Factor in ongoing maintenance costs</li>
            <li>Check local regulations regarding street-legal requirements</li>
            <li>Consider storage space and charging access</li>
            <li>Get documentation of service history when buying used</li>
          </ul>
          
          <p className="text-sm text-gray-400 mt-8">
            Last Updated: April 29, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuide;
