import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SellFormProps {
  onClose: () => void;
}

const SellForm: React.FC<SellFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone1: '',
    email: '',
    zip_code: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send to email
      const emailData = {
        to: 'jaslowdigital@gmail.com',
        subject: 'New Golf Cart Seller Lead',
        ...formData
      };

      // Webhook URL can be configured here
      const webhookUrl = process.env.WEBHOOK_URL;
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      alert('Thank you! We will contact you soon about selling your golf cart.');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your information. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="bg-gray-900 rounded-xl shadow-xl p-6 relative neon-border">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          
          <h2 className="text-2xl font-bold text-white mb-6 neon-glow">Sell Your Golf Cart</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone1"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                value={formData.phone1}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                name="zip_code"
                required
                pattern="[0-9]{5}"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#9d00ff] focus:border-transparent transition"
                value={formData.zip_code}
                onChange={handleChange}
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-[#ff6b00] text-white rounded-md hover:bg-[#e66000] transition-all mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SellForm;