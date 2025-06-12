import React from 'react';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const certifications = [
    "Microsoft Azure Fundamentals",
    "Project Management Professional (PMP)",
    "VMware Certified Professional",
    "Data Science & Machine Learning (MIT)"
  ];

  const expertise = [
    "Active Directory & Azure AD",
    "VMware & Hyper-V Virtualization", 
    "Cloud Infrastructure (Azure, AWS)",
    "Network Security & Optimization",
    "PowerShell & Python Automation",
    "System Performance Tuning"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="h-4 w-4 mr-2" />
            6+ Years IT Transformation Expert
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Meet Ahmad Basyir Azahari
          </h2>

          {/* Centered Professional Photo */}
          <div className="mb-12">
            <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Ahmad Basyir Azahari - Senior Systems Engineer and IT Transformation Expert"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-900">Ahmad Basyir Azahari</p>
              <p className="text-gray-600">Senior Systems Engineer & IT Transformation Expert</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            Senior Systems Engineer with a proven track record of transforming IT infrastructure 
            for 100+ businesses across Kuala Lumpur. Specializing in turning technology costs 
            into competitive advantages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">Led 50+ successful IT transformation projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">Multilingual: English, Bahasa Malaysia, Japanese</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">University of Malaya Engineering Graduate</span>
              </div>
            </div>

            <blockquote className="border-l-4 border-blue-800 pl-6 italic text-gray-700 mb-8">
              "I don't just fix IT problems - I transform them into profit opportunities. 
              Every system I touch becomes a driver of business growth, not just a cost center."
            </blockquote>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 text-blue-800 mr-2" />
                Professional Certifications
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Why Choose Ahmad?</h3>
              <p className="opacity-90 mb-4">
                Unlike generic IT consultants, I focus exclusively on ROI-driven transformations 
                that pay for themselves within 90 days.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Business-first approach, not just technical fixes</li>
                <li>• Local market expertise in KL business landscape</li>
                <li>• Proven methodology with measurable results</li>
                <li>• Personal involvement in every project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;