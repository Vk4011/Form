import React from 'react';
import aboutimg from "../assets/team.jpg";

const About = () => {
  return (
    <div className="w-full py-16 bg-slate-700 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12">About Us</h2>
        
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={aboutimg} 
              alt="Office workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Text Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Welcome to Crust Corporation</h3>
            <p className="mb-6">
              Crust Corporate Services was incorporated on 10 October 2016. Crust Corporate Services PVT LTD is a one-stop financial stop for all kinds of financial services.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provides all kinds of financial services like loans & investment advisory at your door step.</li>
              <li>Create and cultivate long-term relationships with clients.</li>
              <li>Respond immediately to the changing needs of our clients.</li>
              <li>Achieve complete customer satisfaction.</li>
              <li>Improves our services continuously.</li>
              <li>Bring financial awareness to customers by handling their assets & liabilities.</li>
            </ul>

            {/* Core Values Section */}
            <h3 className="text-2xl font-bold mt-8 mb-4">Our Core Values</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">➖</span> Committed to delivering the best
              </li>
              <li className="flex items-center">
                <span className="mr-2">➖</span> Honest and transparent services
              </li>
              <li className="flex items-center">
                <span className="mr-2">➖</span> We care for your business just like ours
              </li>
              <li className="flex items-center">
                <span className="mr-2">➖</span> Keep learning and adapting to new technologies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
