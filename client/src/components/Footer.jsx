import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top: Logo and Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Crust Corporate</h2>
            <p className="text-gray-400">
              Crust Corporate Services Private Limited, your trusted partner in financial solutions. We offer personalized and professional financial services to help you achieve your goals.
            </p>
            <p className="mt-4">
              © {new Date().getFullYear()} Crust Corporate. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p>Stay connected through our social media channels.</p>
            <div className="mt-4 space-x-4">
              {/* Replace # with actual social media links */}
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Terms and Privacy */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <a href="#" className="hover:text-white mx-4">Privacy Policy</a>
          <a href="#" className="hover:text-white mx-4">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
