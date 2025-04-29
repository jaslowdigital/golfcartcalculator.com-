import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-flex items-center text-[#00ff9d] hover:text-[#00cc7d] mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Calculator
      </Link>
      
      <h1 className="text-3xl font-bold text-white mb-6 neon-glow">Privacy Policy</h1>
      
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 mb-8 neon-border">
        <div className="prose prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>
            At Golf Cart Calculator, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you visit our website 
            at golfcartcalculator.com.
          </p>
          
          <h2>Information We Collect</h2>
          <p>We may collect several types of information from and about users of our website, including:</p>
          <ul>
            <li>Personal identifiers such as name, email address, phone number, and zip code when you submit information through our "Sell Your Golf Cart" form</li>
            <li>Information about your golf cart including make, model, year, condition, and features</li>
            <li>Usage data such as IP address, browser type, operating system, and pages visited</li>
            <li>Cookies and similar tracking technologies to enhance your experience on our site</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide you with accurate golf cart value calculations</li>
            <li>Connect you with local golf cart dealerships if you express interest in selling your cart</li>
            <li>Improve our website and services</li>
            <li>Communicate with you about our services</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Display targeted advertisements</li>
          </ul>
          
          <h2>Information Sharing</h2>
          <p>
            We may share your personal information with golf cart dealerships in your area when you submit the "Sell Your Golf Cart" form. 
            These dealerships may contact you directly regarding the potential purchase of your golf cart.
          </p>
          <p>
            We may also share aggregated, anonymized data with third parties for market research and analytics purposes.
          </p>
          
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to collect information about your browsing activities. 
            You can set your browser to refuse all or some browser cookies, but this may affect certain features of our website.
          </p>
          
          <h2>Third-Party Services</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google may use cookies to personalize ads based on your browsing history. 
            You can learn more about how Google uses your data by visiting Google's privacy policy at <a href="https://policies.google.com/privacy" className="text-[#00ff9d]">https://policies.google.com/privacy</a>.
          </p>
          
          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. 
            However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to restrict or object to processing</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided below.
          </p>
          
          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 16 years of age, and we do not knowingly collect personal information from children.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. The date at the bottom of this page indicates when it was last revised.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at:
          </p>
          <p>
            Email: support@golfcartcalculator.com<br />
            Phone: (555) 123-4567
          </p>
          
          <p className="text-sm text-gray-400 mt-8">
            Last Updated: April 29, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
