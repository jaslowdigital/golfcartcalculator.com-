import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-flex items-center text-[#00ff9d] hover:text-[#00cc7d] mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Calculator
      </Link>
      
      <h1 className="text-3xl font-bold text-white mb-6 neon-glow">Terms of Service</h1>
      
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 mb-8 neon-border">
        <div className="prose prose-invert max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using Golf Cart Calculator at golfcartcalculator.com, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our website.
          </p>
          
          <h2>Description of Service</h2>
          <p>
            Golf Cart Calculator provides an online tool for estimating the value of golf carts based on make, model, year, condition, 
            and other factors. Our calculator uses market data to provide an estimated value range, but these estimates should not be 
            considered as official appraisals or guaranteed values.
          </p>
          
          <h2>User Submissions</h2>
          <p>
            When you submit information through our "Sell Your Golf Cart" form, you understand and agree that we pass your information 
            to local Golf Cart dealerships who may contact you about purchasing your golf cart. We may receive a small finder's fee from 
            these dealerships, which helps keep this site up and running.
          </p>
          
          <h2>Accuracy of Information</h2>
          <p>
            While we strive to provide accurate value estimates, we make no guarantees regarding the accuracy, completeness, or reliability 
            of any calculations, estimates, or other information provided on our website. The actual value of a golf cart may vary based on 
            factors not captured by our calculator.
          </p>
          
          <h2>Intellectual Property</h2>
          <p>
            All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, 
            audio clips, and software, are owned by Golf Cart Calculator and are protected by United States and international copyright, 
            trademark, and other intellectual property laws.
          </p>
          
          <h2>User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our website in any way that violates applicable laws or regulations</li>
            <li>Attempt to interfere with the proper functioning of the website</li>
            <li>Engage in any automated use of the system, such as scraping</li>
            <li>Attempt to gain unauthorized access to any portion of the website</li>
            <li>Use the website for any commercial purpose without our express consent</li>
          </ul>
          
          <h2>Third-Party Links and Content</h2>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by Golf Cart Calculator. 
            We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party 
            websites or services.
          </p>
          
          <h2>Advertisements</h2>
          <p>
            Our website displays advertisements, including Google AdSense ads. These advertisements may collect and use information about 
            your visits to this and other websites to provide relevant advertisements. This information does not include personally 
            identifiable information such as your name, address, email address, or telephone number.
          </p>
          
          <h2>Disclaimer of Warranties</h2>
          <p>
            Our website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. 
            We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, 
            and non-infringement.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall Golf Cart Calculator, its officers, directors, employees, or agents be liable for any indirect, incidental, 
            special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
            intangible losses, resulting from your access to or use of or inability to access or use the website.
          </p>
          
          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Golf Cart Calculator and its officers, directors, employees, and agents from 
            and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' 
            fees) arising out of or relating to your violation of these Terms of Service or your use of the website.
          </p>
          
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will provide notice of any material changes by posting the 
            new Terms of Service on this page. Your continued use of the website after any such changes constitutes your acceptance of the 
            new Terms of Service.
          </p>
          
          <h2>Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to 
            its conflict of law provisions.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
