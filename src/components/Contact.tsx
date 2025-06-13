import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config'; // Adjust the import path as necessary
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    currentITBudget: '',
    mainChallenge: '',
    preferredTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    try {
    const docRef = await addDoc(collection(db, 'contactSubmissions'), formData);
    console.log('Document written with ID:', docRef.id);

    alert("Thank you! I'll contact you within 24 hours to schedule your free IT assessment.");
    
    // Optional: Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      employees: '',
      currentITBudget: '',
      mainChallenge: '',
      preferredTime: '',
    });

  } catch (error) {
    console.error('Error adding document:', error);
    alert('Oops! Something went wrong. Please try again.');
  }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your free IT assessment and discover exactly how much you could save
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get Your Free IT Assessment
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="10-50">10-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="101-250">101-250 employees</option>
                    <option value="251-500">251-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="currentITBudget" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Monthly IT Budget
                </label>
                <select
                  id="currentITBudget"
                  name="currentITBudget"
                  value={formData.currentITBudget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select range</option>
                  <option value="5000-15000">RM5,000 - RM15,000</option>
                  <option value="15000-30000">RM15,000 - RM30,000</option>
                  <option value="30000-50000">RM30,000 - RM50,000</option>
                  <option value="50000+">RM50,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="mainChallenge" className="block text-sm font-medium text-gray-700 mb-2">
                  Main IT Challenge *
                </label>
                <textarea
                  id="mainChallenge"
                  name="mainChallenge"
                  required
                  rows={4}
                  value={formData.mainChallenge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your biggest IT challenge or what you'd like to improve..."
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Call Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (1PM - 5PM)</option>
                  <option value="evening">Evening (6PM - 8PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors font-semibold text-lg flex items-center justify-center group"
              >
                Get My Free Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              No obligation. I'll analyze your situation and provide actionable insights within 48 hours.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+60 18-916 5223</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">a.basyir94@gmail.com</p>
                    <p className="text-sm text-gray-500">Response within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Kuala Lumpur, Malaysia</p>
                    <p className="text-sm text-gray-500">Serving KL & Selangor</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Schedule a Call</h4>
                    <p className="text-gray-600">Free 30-minute consultation</p>
                    <p className="text-sm text-gray-500">Discuss your IT transformation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Limited Time Offer</h3>
              <p className="text-lg mb-4 opacity-90">
                Book your assessment this month and receive:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Free IT Security Audit (Worth RM2,500)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Custom ROI Calculator Report
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  30-Day Implementation Support
                </li>
              </ul>
              <p className="text-sm opacity-80">
                Only 5 spots available this month. Don't miss out on potential savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;