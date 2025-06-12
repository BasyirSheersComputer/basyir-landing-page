import React from 'react';
import { Server, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-800 p-2 rounded-lg">
                <Server className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">IT Profit Accelerator</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming IT infrastructure for growing businesses in Kuala Lumpur. 
              Turn your technology costs into competitive advantages with proven results.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ahmad-basyir-azahari/" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:a.basyir94@gmail.com" 
                 className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+60189165223" 
                 className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>IT Infrastructure Audit</li>
              <li>System Automation</li>
              <li>Cloud Migration</li>
              <li>Performance Optimization</li>
              <li>Cost Reduction Strategy</li>
              <li>Ongoing Support</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>+60 18-916 5223</p>
              <p>a.basyir94@gmail.com</p>
              <p>Kuala Lumpur, Malaysia</p>
              <p className="text-sm">Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ahmad Basyir Azahari. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;