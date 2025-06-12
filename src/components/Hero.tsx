import React from 'react';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Proven Results for 100+ KL Businesses
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Slash IT Costs by <span className="text-amber-500">40%</span> While 
              <span className="text-blue-800"> Doubling</span> Performance
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business technology from a cost center into a profit driver. 
              Our IT Profit Accelerator System delivers measurable ROI in 90 days or less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 flex items-center justify-center font-semibold text-lg group"
              >
                Get Free IT Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-800 hover:text-blue-800 transition-all duration-300 font-semibold text-lg"
              >
                See Results
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800 mb-1">40%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800 mb-1">2x</div>
                <div className="text-sm text-gray-600">Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800 mb-1">90</div>
                <div className="text-sm text-gray-600">Days to ROI</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete IT Infrastructure Audit</h4>
                    <p className="text-gray-600 text-sm">Identify hidden costs and performance bottlenecks</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Automation Solutions</h4>
                    <p className="text-gray-600 text-sm">Eliminate manual tasks and reduce human error</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-1 rounded-full mt-1">
                    <TrendingUp className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI-Guaranteed Results</h4>
                    <p className="text-gray-600 text-sm">Measurable improvements within 90 days</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 italic">
                  "Ahmad transformed our IT infrastructure and saved us RM180,000 annually while improving our system uptime to 99.9%"
                </p>
                <p className="text-sm font-medium text-gray-900 mt-2">
                  - Sarah Lim, CEO of TechFlow Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;