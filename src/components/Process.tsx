import React from 'react';
import { Search, Wrench, Rocket, BarChart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Deep IT Assessment",
      duration: "Week 1-2",
      description: "Comprehensive audit of your current IT infrastructure, identifying cost leaks and performance bottlenecks.",
      deliverables: ["Complete system inventory", "Cost analysis report", "Risk assessment", "Performance benchmarks"]
    },
    {
      icon: Wrench,
      title: "Custom Solution Design",
      duration: "Week 3-4",
      description: "Design tailored automation and optimization solutions based on your specific business needs and budget.",
      deliverables: ["Implementation roadmap", "ROI projections", "Timeline milestones", "Resource requirements"]
    },
    {
      icon: Rocket,
      title: "Rapid Implementation",
      duration: "Week 5-10",
      description: "Execute the transformation with minimal business disruption using proven methodologies and best practices.",
      deliverables: ["System deployment", "Automation setup", "Team training", "Documentation"]
    },
    {
      icon: BarChart,
      title: "Results & Optimization",
      duration: "Week 11-12",
      description: "Monitor performance, measure ROI, and fine-tune systems to ensure maximum efficiency and cost savings.",
      deliverables: ["Performance reports", "ROI validation", "Optimization recommendations", "Ongoing support plan"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The IT Profit Accelerator Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 12-week transformation that delivers measurable results
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-blue-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow pt-8">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-blue-800" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {step.title}
                  </h3>
                  
                  <div className="text-center mb-4">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-center mb-6">
                    {step.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">90-Day ROI Guarantee</h3>
          <p className="text-xl mb-6 opacity-90">
            If you don't see measurable cost savings and performance improvements within 90 days, 
            I'll work for free until you do.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors font-semibold"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;