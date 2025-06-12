import React from 'react';
import { BarChart3, DollarSign, Clock, Users } from 'lucide-react';

const Results = () => {
  const caseStudies = [
    {
      company: "Manufacturing Corp KL",
      industry: "Manufacturing",
      employees: 250,
      challenge: "Legacy systems causing 40% downtime",
      solution: "Cloud migration + automation",
      results: {
        costSaving: "RM280,000/year",
        performance: "99.8% uptime",
        efficiency: "60% faster processes"
      }
    },
    {
      company: "Legal Partners Sdn Bhd",
      industry: "Legal Services",
      employees: 80,
      challenge: "Manual data backup & security risks",
      solution: "Automated backup + security upgrade",
      results: {
        costSaving: "RM120,000/year",
        performance: "Zero data loss",
        efficiency: "80% time savings"
      }
    },
    {
      company: "E-commerce Hub",
      industry: "Retail",
      employees: 150,
      challenge: "Scalability issues during peak seasons",
      solution: "Cloud infrastructure optimization",
      results: {
        costSaving: "RM200,000/year",
        performance: "3x faster loading",
        efficiency: "Handle 5x traffic"
      }
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results for KL Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations. Real savings. Real growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-blue-800" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">RM12.5M+</div>
            <div className="text-gray-600">Total Client Savings</div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-green-800" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">156%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-amber-800" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">67 Days</div>
            <div className="text-gray-600">Average to ROI</div>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-800" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600">Businesses Transformed</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{study.company}</h3>
                  <p className="text-sm text-gray-600">{study.industry} • {study.employees} employees</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                <p className="text-sm text-gray-600 mb-3">{study.challenge}</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                <p className="text-sm text-gray-600 mb-4">{study.solution}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Cost Savings:</span>
                    <span className="text-sm font-semibold text-green-600">{study.results.costSaving}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Performance:</span>
                    <span className="text-sm font-semibold text-blue-600">{study.results.performance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Efficiency:</span>
                    <span className="text-sm font-semibold text-amber-600">{study.results.efficiency}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;