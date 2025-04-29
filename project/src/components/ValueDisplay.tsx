import React, { useState } from 'react';
import { DollarSign, Share2, RotateCcw, Printer } from 'lucide-react';

interface ValueDisplayProps {
  valueRange: {
    low: number;
    high: number;
  };
  formData: {
    make: string;
    model: string;
    year: number;
    condition: string;
    upgrades: string[];
    mileage: number;
    batteryAge: number;
  };
  onReset: () => void;
}

const ValueDisplay: React.FC<ValueDisplayProps> = ({ valueRange, formData, onReset }) => {
  const [copied, setCopied] = useState(false);
  
  const averageValue = Math.round((valueRange.low + valueRange.high) / 2);
  
  const getConditionText = (condition: string) => {
    switch(condition) {
      case 'excellent': return 'Excellent - Like New';
      case 'good': return 'Good - Minor Wear';
      case 'fair': return 'Fair - Visible Wear';
      case 'poor': return 'Poor - Significant Issues';
      default: return condition;
    }
  };
  
  const handleShare = () => {
    const shareText = `My ${formData.year} ${formData.make} ${formData.model} golf cart is valued between $${valueRange.low.toLocaleString()} - $${valueRange.high.toLocaleString()}!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Golf Cart Calculation',
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div className="lg:w-1/2 bg-gradient-to-br from-[#2D5937]/10 to-[#D4AF37]/10 p-6 lg:p-8 animate-fadeIn">
      {/* Changed text to "Estimated Value", added text-white and yellow glow style */}
      <h3 
        className="text-2xl font-bold text-white mb-6"
        style={{ textShadow: '0 0 8px #ffff00' }} // Yellow glow effect
      >
        Estimated Value
      </h3>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 transform transition hover:scale-[1.01] duration-300">
        <div className="text-center mb-4">
          <span className="text-gray-500 text-sm">Estimated Value Range</span>
          <div className="flex items-center justify-center mt-1">
            <DollarSign className="h-6 w-6 text-[#2D5937]" />
            <span className="text-3xl font-bold text-gray-800">
              {valueRange.low.toLocaleString()} - {valueRange.high.toLocaleString()}
            </span>
          </div>
          <div className="mt-1 text-[#D4AF37] font-medium">
            Average: ${averageValue.toLocaleString()}
          </div>
        </div>
        
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#2D5937] to-[#D4AF37]"
            style={{ width: '100%' }}
          ></div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>${valueRange.low.toLocaleString()}</span>
          <span>${valueRange.high.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h4 className="font-semibold text-gray-700 mb-4">Cart Details</h4>
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="text-gray-500">Make:</span>
            <span className="font-medium text-gray-800">{formData.make}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">Model:</span>
            <span className="font-medium text-gray-800">{formData.model || 'Not specified'}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">Year:</span>
            <span className="font-medium text-gray-800">{formData.year}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">Condition:</span>
            <span className="font-medium text-gray-800">{getConditionText(formData.condition)}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">Mileage (hours):</span>
            <span className="font-medium text-gray-800">{formData.mileage}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">Battery Age:</span>
            <span className="font-medium text-gray-800">{formData.batteryAge} years</span>
          </li>
        </ul>
        
        {formData.upgrades.length > 0 && (
          <>
            <h4 className="font-semibold text-gray-700 mt-4 mb-2">Upgrades & Accessories</h4>
            <div className="flex flex-wrap gap-2">
              {formData.upgrades.map(upgrade => (
                <span key={upgrade} className="bg-[#2D5937]/10 text-[#2D5937] text-sm px-3 py-1 rounded-full">
                  {upgrade}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Changed Share button color to blue */}
        <button 
          onClick={handleShare}
          className="flex-1 flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {copied ? 'Copied!' : (
            <>
              <Share2 className="h-5 w-5 mr-2" />
              <span>Share</span>
            </>
          )}
        </button>
        
        <button 
          onClick={handlePrint}
          className="flex-1 flex items-center justify-center py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <Printer className="h-5 w-5 mr-2" />
          <span>Print</span>
        </button>
        
        {/* Changed New Estimate button color to orange */}
        <button 
          onClick={onReset}
          className="flex-1 flex items-center justify-center py-2 px-4 bg-[#ff6b00] text-white rounded-md hover:bg-[#e66000] transition-colors"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          <span>New Estimate</span>
        </button>
      </div>
    </div>
  );
};

export default ValueDisplay;
