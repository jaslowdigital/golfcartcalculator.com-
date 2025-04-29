import React, { useState } from 'react';
import { DollarSign, Share2, Calculator as CalcIcon, ArrowRight, DollarSign as SellIcon } from 'lucide-react';
import { calculateValue } from '../utils/calculatorUtils';
import ValueDisplay from './ValueDisplay';
import SellForm from './SellForm';

const Calculator = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    condition: 'good',
    upgrades: [],
    mileage: 0,
    batteryAge: 0
  });

  const [valueRange, setValueRange] = useState({ low: 0, high: 0 });
  const [isCalculated, setIsCalculated] = useState(false);
  const [animateCalculate, setAnimateCalculate] = useState(false);
  const [showSellForm, setShowSellForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const { checked } = checkbox;
      setFormData(prev => ({
        ...prev,
        upgrades: checked 
          ? [...prev.upgrades, value] 
          : prev.upgrades.filter(upgrade => upgrade !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'number' ? Number(value) : value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnimateCalculate(true);
    
    setTimeout(() => {
      const result = calculateValue(formData);
      setValueRange(result);
      setIsCalculated(true);
      setAnimateCalculate(false);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      make: '',
      model: '',
      year: new Date().getFullYear(),
      condition: 'good',
      upgrades: [],
      mileage: 0,
      batteryAge: 0
    });
    setIsCalculated(false);
  };

  const populateMakes = () => [
    'Active EV', 'Advanced EV', 'Aetric EV', 'AGT Cars', 'Alset EV', 'Altra Car', 'Alwayz',
    'Aoxiang', 'Aquila EV', 'Atlas', 'BC Companies LLC', 'Beast', 'Bensel', 'Bigcart',
    'Bintelli', 'Birdie Car', 'Biro', 'Borcart', 'Bremark EV', 'Breezy EV', 'Bugs',
    'Club Car', 'Crown Carts', 'Cushman', 'Dachi', 'Denago EV', 'Dongguan RuiDa',
    'Drake', 'Dynamic Carts', 'DV-Golf', 'E-Z-GO', 'Eagle EV', 'Ecar Golf', 'ECO Carts',
    'Eco Planeta', 'Eda Car EV', 'Ellwee', 'Emart Car', 'Envy Golf Cart', 'EV Titan',
    'Evolution', 'Excar', 'Freedom Carts', 'Garia', 'GEM', 'Getgo', 'Gorilla Rides EV',
    'Green Car', 'Honor LSV', 'Hopper', 'Huntve', 'ICO Car', 'Imperial', 'Ironbull Cart',
    'Italcar', 'Jiangsu Longhui', 'K K Carts', 'Kandi', 'Kawasaki', 'Kodiak EV',
    'Landmaster', 'Lannmarker', 'Legion EV', 'Lento Golf Car', 'Lexsong', 'Lvtong',
    'MAC EV', 'Madjax', 'Maini', 'Mammoth EV', 'Mantis', 'Marshell', 'Massimo Motor',
    'Matgr', 'Melex', 'Minghong', 'MMC', 'Moke America', 'Moto EV', 'Nevo EV',
    'Olympus LSV', 'Ongolf', 'Pilotcar EV', 'Royal EV', 'SC Carts', 'Sierra LSV',
    'Spartan EV', 'Spree EV', 'STAR EV', 'Suncart', 'Sunday Carts', 'Supermach',
    'Tao Motor', 'Teycars', 'Tomberlin', 'Top New Energy', 'Toro', 'Trojan EV',
    'United Smart EV', 'V Carts', 'Vantage', 'Venom EV', 'Viking EV', 'Viper Cart USA',
    'Vitacci', 'Vivid EV', 'Volcon', 'Voyager EV', 'Vtech', 'Whanlong', 'Wintao', 'WSM',
    'WUXI HIO', 'Xmoto', 'Yamaha', 'Yatian', 'Zycar', 'Zrox EV', 'Other'
  ].sort();

  return (
    <div className="w-full flex justify-center">
      {/* Left AdSense Container */}
      <div className="hidden lg:block w-40 mr-8">
        {/* AdSense code placeholder */}
        <div className="bg-gray-700 h-96 rounded flex items-center justify-center text-gray-400">Ad Space (Left)</div>
      </div>

      <div className="w-full max-w-5xl">
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 neon-border">
          <div className="flex flex-col lg:flex-row">
            <div className={`p-6 lg:p-8 ${isCalculated ? 'lg:w-1/2' : 'w-full'} transition-all duration-500`}>
              <div className="flex items-center mb-6">
                <CalcIcon className="h-6 w-6 text-[#9d00ff] mr-2" />
                <h2 className="text-2xl font-bold text-white neon-glow">Calculate Your Golf Cart Value</h2> {/* Changed title */}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields remain the same */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Make</label>
                    <select 
                      name="make"
                      value={formData.make}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                      required
                    >
                      <option value="">Select Make</option>
                      {populateMakes().map(make => (
                        <option key={make} value={make}>{make}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Model</label>
                    <input 
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                      placeholder="e.g. Precedent, RXV"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Year</label>
                    <input 
                      type="number"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      min={1980}
                      max={new Date().getFullYear()}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Condition</label>
                    <select 
                      name="condition"
                      value={formData.condition}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                      required
                    >
                      <option value="excellent">Excellent - Like New</option>
                      <option value="good">Good - Minor Wear</option>
                      <option value="fair">Fair - Visible Wear</option>
                      <option value="poor">Poor - Significant Issues</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Mileage (hours)</label>
                    <input 
                      type="number"
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleInputChange}
                      min={0}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Battery Age (years)</label>
                    <input 
                      type="number"
                      name="batteryAge"
                      value={formData.batteryAge}
                      onChange={handleInputChange}
                      min={0}
                      max={10}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                    />
                  </div>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-300 mb-2">Upgrades & Accessories</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Custom Wheels', 'Lift Kit', 'Premium Seats', 'Custom Body', 
                      'LED Lights', 'Sound System', 'Rear Seat Kit', 'Street Legal Kit'
                    ].map(upgrade => (
                      <label key={upgrade} className="flex items-center">
                        <input 
                          type="checkbox"
                          name="upgrades"
                          value={upgrade}
                          checked={formData.upgrades.includes(upgrade)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-[#9d00ff] bg-gray-800 border-gray-700 rounded focus:ring-[#9d00ff]"
                        />
                        <span className="ml-2 text-sm text-gray-300">{upgrade}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button 
                    type="submit"
                    className={`w-full flex items-center justify-center px-6 py-3 bg-[#ff6b00] text-white rounded-md hover:bg-[#e66000] transition-all transform ${animateCalculate ? 'scale-95' : 'scale-100'}`}
                  >
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span className="font-medium">Calculate</span> {/* Changed button text */}
                    {animateCalculate && (
                      <svg className="animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                  </button>

                  <button 
                    type="button"
                    onClick={() => setShowSellForm(true)}
                    className="w-full flex items-center justify-center px-6 py-3 bg-[#ff6b00] text-white rounded-md hover:bg-[#e66000] transition-all"
                  >
                    <SellIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Sell Your Golf Cart Now</span>
                  </button>
                </div>
              </form>
            </div>
            
            {isCalculated && (
              <ValueDisplay 
                valueRange={valueRange} 
                formData={formData} 
                onReset={handleReset} 
              />
            )}
          </div>
        </div>
        
        {/* Bottom AdSense Banner */}
        <div className="mt-8">
          {/* AdSense code placeholder */}
          <div className="bg-gray-700 h-24 rounded flex items-center justify-center text-gray-400">Ad Banner (Bottom)</div>
        </div>

        <div className="mt-8 bg-gray-900 rounded-xl shadow-lg p-6 neon-border">
          <h3 className="text-xl font-semibold text-white mb-4 neon-glow">How We Calculate</h3> {/* Changed title */}
          <p className="text-gray-300 mb-4">
            Our calculator uses market data from thousands of golf cart sales to provide an accurate value range. We consider factors like:
          </p>
          <ul className="space-y-2 text-gray-300 mb-4">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-[#9d00ff] mr-2 mt-0.5 flex-shrink-0" />
              <span>Make, model, and year - Base value adjusted for popularity and availability</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-[#9d00ff] mr-2 mt-0.5 flex-shrink-0" />
              <span>Condition - Significant impact on final value (up to 40% difference between poor and excellent)</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-[#9d00ff] mr-2 mt-0.5 flex-shrink-0" />
              <span>Upgrades and accessories - Custom features can add 10-30% to base value</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-[#9d00ff] mr-2 mt-0.5 flex-shrink-0" />
              <span>Battery age and usage - Critical for electric carts, significantly affects resale value</span>
            </li>
          </ul>
          <p className="text-gray-300">
            For the most accurate calculation, we recommend getting an in-person appraisal from an authorized dealer. {/* Changed text */}
          </p>
        </div>

        {showSellForm && <SellForm onClose={() => setShowSellForm(false)} />}
      </div>

      {/* Right AdSense Container */}
      <div className="hidden lg:block w-40 ml-8">
        {/* AdSense code placeholder */}
        <div className="bg-gray-700 h-96 rounded flex items-center justify-center text-gray-400">Ad Space (Right)</div>
      </div>
    </div>
  );
};

export default Calculator;
