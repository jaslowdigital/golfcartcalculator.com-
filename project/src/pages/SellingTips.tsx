import React from 'react';
import { ArrowLeft, DollarSign, Camera, Wrench, Clock, Users, CheckCircle } from 'lucide-react'; // Replaced Tool with Wrench
import { Link } from 'react-router-dom';

const SellingTips = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-flex items-center text-[#00ff9d] hover:text-[#00cc7d] mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Calculator
      </Link>
      
      <h1 className="text-3xl font-bold text-white mb-6 neon-glow">Golf Cart Selling Tips</h1>
      
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 mb-8 neon-border">
        <div className="prose prose-invert max-w-none">
          <h2>Maximizing Your Golf Cart's Value</h2>
          <p>
            Selling your golf cart doesn't have to be complicated. With the right preparation and approach, 
            you can maximize your return and ensure a smooth transaction. Follow these expert tips to get 
            the best possible price for your golf cart.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-gray-800 p-5 rounded-lg flex flex-col items-center text-center">
              <DollarSign className="h-10 w-10 text-[#00ff9d] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Know Your Value</h3>
              <p className="text-sm">Use our calculator to get an accurate baseline for your cart's worth before listing</p>
            </div>
            
            <div className="bg-gray-800 p-5 rounded-lg flex flex-col items-center text-center">
              <Camera className="h-10 w-10 text-[#00ff9d] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Quality Photos</h3>
              <p className="text-sm">Clear, well-lit photos from multiple angles significantly increase buyer interest</p>
            </div>
            
            <div className="bg-gray-800 p-5 rounded-lg flex flex-col items-center text-center">
              <Wrench className="h-10 w-10 text-[#00ff9d] mb-3" /> {/* Replaced Tool with Wrench */}
              <h3 className="text-lg font-semibold mb-2">Pre-Sale Prep</h3>
              <p className="text-sm">Simple repairs and cleaning can increase your cart's value by 10-15%</p>
            </div>
          </div>
          
          <h2>Before You List: Preparation Checklist</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#00ff9d] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Clean Thoroughly</h3>
                <p>
                  Wash the exterior, clean the seats, vacuum the floorboards, and remove any personal items. 
                  A detailed cleaning can add hundreds to your selling price.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#00ff9d] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Make Minor Repairs</h3>
                <p>
                  Fix small issues like torn seats, cracked windshields, or worn tires. These relatively 
                  inexpensive repairs can significantly increase buyer confidence and your asking price.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#00ff9d] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Battery Maintenance</h3>
                <p>
                  For electric carts, ensure batteries are fully charged and terminals are clean. Consider a 
                  battery load test to verify condition - buyers often focus on battery health.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#00ff9d] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Gather Documentation</h3>
                <p>
                  Collect maintenance records, original purchase documents, owner's manuals, and warranty 
                  information. Documented history increases buyer confidence and justifies a higher price.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#00ff9d] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Take Quality Photos</h3>
                <p>
                  Shoot in good lighting, capture all angles (front, back, sides, interior), and highlight 
                  special features. Include close-ups of the dashboard, tires, and any upgrades.
                </p>
              </div>
            </div>
          </div>
          
          <h2>Creating an Effective Listing</h2>
          <p>
            A detailed, honest listing attracts serious buyers and reduces time-wasting inquiries. Include:
          </p>
          <ul>
            <li><strong>Complete specifications</strong> - Make, model, year, gas/electric</li>
            <li><strong>Accurate condition description</strong> - Be honest about wear and tear</li>
            <li><strong>Maintenance history</strong> - Recent services, battery replacements, upgrades</li>
            <li><strong>Feature list</strong> - Highlight premium features and accessories</li>
            <li><strong>Reason for selling</strong> - Builds trust with potential buyers</li>
            <li><strong>Clear pricing</strong> - Set a realistic price based on our calculator</li>
          </ul>
          
          <h2>Where to Sell Your Golf Cart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-[#00ff9d] mb-2 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Sell to a Dealer
              </h3>
              <p className="text-sm mb-2">
                The fastest and most convenient option, though typically offers 10-20% less than private sales.
              </p>
              <div className="text-sm">
                <div className="font-semibold text-gray-300">Pros:</div>
                <ul className="list-disc pl-5 mb-2">
                  <li>Quick, often same-day payment</li>
                  <li>No need to deal with multiple buyers</li>
                  <li>They handle paperwork and potential issues</li>
                </ul>
                <div className="font-semibold text-gray-300">Cons:</div>
                <ul className="list-disc pl-5">
                  <li>Lower payment than private sale</li>
                  <li>Limited negotiation power</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-[#00ff9d] mb-2 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Private Sale
              </h3>
              <p className="text-sm mb-2">
                Maximizes your return but requires more time and effort to find the right buyer.
              </p>
              <div className="text-sm">
                <div className="font-semibold text-gray-300">Pros:</div>
                <ul className="list-disc pl-5 mb-2">
                  <li>Higher selling price (10-20% more)</li>
                  <li>Ability to negotiate terms</li>
                  <li>Direct communication with buyer</li>
                </ul>
                <div className="font-semibold text-gray-300">Cons:</div>
                <ul className="list-disc pl-5">
                  <li>More time-consuming process</li>
                  <li>Dealing with inquiries and showings</li>
                  <li>Potential security concerns</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="text-[#00ff9d] mb-2 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Best Time to Sell
            </h3>
            <p>
              Golf cart prices typically peak in spring and early summer when demand is highest. 
              In warmer climates, the selling season extends longer. Consider timing your sale to 
              maximize your return.
            </p>
          </div>
          
          <h2>Negotiation Tips</h2>
          <ul>
            <li><strong>Set your price slightly higher</strong> than your minimum acceptable amount to allow room for negotiation</li>
            <li><strong>Know your bottom line</strong> and be prepared to walk away if offers fall below it</li>
            <li><strong>Highlight value-adding features</strong> when discussing price (new batteries, recent upgrades, etc.)</li>
            <li><strong>Be prepared for common objections</strong> about age, condition, or comparable listings</li>
            <li><strong>Consider accepting alternative payment methods</strong> like PayPal or Venmo for convenience</li>
            <li><strong>Get payment in full</strong> before releasing the cart to the buyer</li>
          </ul>
          
          <h2>Completing the Sale</h2>
          <p>
            Once you've found a buyer, follow these steps to ensure a smooth transaction:
          </p>
          <ol>
            <li>Create a simple bill of sale documenting the transaction</li>
            <li>Include both parties' contact information, cart details, and sale price</li>
            <li>Specify the cart is sold "as-is" with no warranties unless otherwise stated</li>
            <li>Both parties should sign and keep a copy of the bill of sale</li>
            <li>Transfer any remaining warranty information to the new owner</li>
            <li>Remove the cart from your insurance policy if applicable</li>
          </ol>
          
          <div className="bg-[#00ff9d]/10 border border-[#00ff9d]/30 rounded-lg p-4 my-6">
            <h3 className="text-[#00ff9d] font-semibold mb-2">Let Us Help You Sell</h3>
            <p>
              For a hassle-free selling experience, use our "Sell Your Golf Cart Now" feature. We'll connect you 
              with local dealers interested in purchasing your cart, often with same-day offers. There's no 
              obligation, and you might be surprised by how competitive the offers can be.
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

export default SellingTips;
