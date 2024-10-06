import React from 'react';

const Contact = () => {
  return (
    <div className="w-full py-16 bg-slate-700 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info & Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">We are here to help!</h2>
            <div className="space-y-4">
              <p>
                <span className="block text-lg font-medium">Second Floor, BHUVANA TOWERS, 204, Sarojini Devi Rd, Kalasiguda, Secunderabad, Telangana 500003</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +91 99666 18840
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Follow us</h3>
              <div className="space-x-4">
                <a href="#" className="hover:text-white"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-youtube fa-2x"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 text-gray-400 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full  bg-[#222630] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-[#222630] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full  bg-[#222630] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full  bg-[#222630] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-[#222630]  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-[#222630] bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-80 bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Crust Corporate Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4775622462865!2d78.49032557414515!3d17.44008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb995f82347a45%3A0x2d087891d5d0982b!2sCrust%20Corporate!5e0!3m2!1sen!2sin!4v1616765129348!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
