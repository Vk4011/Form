import React from 'react';

const Services = () => {
  return (
    <div className="w-full py-16 bg-slate-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12">Services</h2>
        <h3 className="text-3xl font-semibold text-center mb-8">How can we help you?</h3>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Personal Loans</h3>
            <p className="mb-6">
              We offer quick and easy personal loans to help you meet your financial needs with minimal hassle.
            </p>
            <button className="bg-transparent border border-gray-100 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-slate-700 transition duration-300">
              Get In Touch
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Home Loans</h3>
            <p className="mb-6">
              Finance your dream home with our flexible and affordable home loan solutions, designed to make home ownership easy.
            </p>
            <button className="bg-transparent border border-gray-100 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-slate-700 transition duration-300">
              Get In Touch
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Business Loans</h3>
            <p className="mb-6">
              Empower your business with our tailored loan solutions, providing the capital you need to grow and succeed.
            </p>
            <button className="bg-transparent border border-gray-100 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-slate-700 transition duration-300">
              Get In Touch
            </button>
          </div>

          {/* Service 4 */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Project Funding</h3>
            <p className="mb-6">
              Bring your projects to life with our dedicated funding options, designed to support your ambitions and ensure success.
            </p>
            <button className="bg-transparent border border-gray-100 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-slate-700 transition duration-300">
              Get In Touch
            </button>
          </div>

          {/* Service 5 */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Mortgage Loans</h3>
            <p className="mb-6">
              Unlock the value of your property with our mortgage loans, offering you the funds you need for various financial needs.
            </p>
            <button className="bg-transparent border border-gray-100 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-slate-700 transition duration-300">
              Get In Touch
            </button>
          </div>

          {/* Service 6 */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Business Loans</h3>
            <p className="mb-6">
              Empower your business with our tailored loan solutions, providing the capital you need to grow and succeed.
            </p>
            <button className="bg-transparent border border-gray-100 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-slate-700 transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
