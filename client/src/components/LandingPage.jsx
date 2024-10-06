// src/components/LandingPage.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import bg from '../assets/landing.jpg'; 
import bg2 from '../assets/bg2.jpg';
import projectImage from '../assets/projectimg.jpg'; // Ensure this path matches the uploaded image path

const LandingPage = () => {
  // Scroll to the content section when the button is clicked
  const scrollToContent = () => {
    const section = document.getElementById('more-content');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full">
      {/* Hero Section with Background */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-slate-900 opacity-50 z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-slate-900 bg-opacity-70 p-8 rounded-lg shadow-2xl mt-16 md:mt-24 max-w-4xl mx-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Crust Corporation
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Your trusted partner for comprehensive financial services. We offer a range of financial solutions tailored to meet your needs, right at your doorstep.
            </p>
            <motion.button
              onClick={scrollToContent}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 duration-300 shadow-lg"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              Find out how!
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scrollable Section for More Content */}
      <motion.div
        id="more-content"
        className="w-full py-16 text-gray-200 bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          Call Us For
        </motion.h2>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Repeat for each service */}
          {[
            {
              title: 'Personal Loans',
              description: 'Get financial support for your personal needs, whether it’s for education, medical expenses, or a family event. Our personal loans are designed to offer you quick and hassle-free funding.',
            },
            {
              title: 'Home Loans',
              description: 'Achieve your dream of owning a home with our flexible home loan solutions. We provide competitive interest rates and easy repayment options to help you buy or build your dream house.',
            },
            {
              title: 'Mortgage Loans',
              description: 'Leverage the value of your property to secure funds with our mortgage loans. We offer attractive terms and interest rates to help you meet your financial requirements.',
            },
            {
              title: 'Working Capital/OD',
              description: 'Maintain smooth business operations with our working capital and overdraft (OD) facilities. We help you manage cash flow and meet short-term financial obligations efficiently.',
            },
            {
              title: 'Demat & Trading Services',
              description: 'Simplify your investments with our Demat and trading services. We provide secure and efficient solutions for managing and trading your securities.',
            },
            {
              title: 'Mutual Funds',
              description: 'Invest wisely with our range of mutual funds. We offer diverse investment options to help you achieve your financial goals through professional fund management.',
            },
            {
              title: 'Bonds/FDs/CDs',
              description: 'Enhance your investment portfolio with our bonds, fixed deposits (FDs), and certificates of deposit (CDs). We offer secure and reliable options to grow your wealth.',
            },
            {
              title: 'Insurance',
              description: 'Protect yourself and your loved ones with our comprehensive insurance solutions. We offer life, health, and general insurance to cover all your needs.',
            },
            {
              title: 'Portfolio Management Services',
              description: 'Maximize your investment returns with our professional portfolio management services. Our experts tailor your portfolio to meet your financial objectives and risk tolerance.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scrollable Section for About Us */}
      <motion.div
        className="w-full py-16 text-gray-200 bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold mb-4">About Us</h3>
            <p>
              Crust Corporate Services Private Limited is your trusted partner in financial excellence. Based in Hyderabad, India, we have been committed to providing top-tier financial services since our official incorporation on October 10, 2016. As a dynamic and forward-thinking company, we strive to offer innovative financial solutions that cater to the diverse needs of our clients.
            </p>
            <br />
            <h3 className="text-2xl font-semibold mb-2">Mission</h3>
            <p>
              At Crust Corporation, our mission is to deliver comprehensive financial services that exceed our clients’ expectations. Providing a wide range of financial services, including loans and investment advisory, right at your doorstep.
            </p>
            <p>Building and nurturing long-term relationships with our clients through exceptional service. Responding swiftly and effectively to the evolving needs of our clients.</p>
            <p>Ensuring complete customer satisfaction through personalized and professional services.</p>
            <p>Continuously improving our service offerings to maintain the highest standards of performance.</p>
            <p>Promoting financial literacy and awareness among our customers, helping them manage their assets and liabilities effectively.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <img
              src={bg2}
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Project Section - Have a Project in Mind? */}
      <motion.div
        className="w-full py-16 bg-slate-800 text-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto items-center">
          <motion.div
            className="bg-slate-900 p-8 rounded-lg shadow-lg transition transform hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-semibold mb-4">Have a Project in Mind?</h3>
            <p className="mb-6">
              We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
            </p>
            <motion.button
              className="bg-transparent border border-white text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition transform hover:scale-105 duration-300 shadow-md"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              Connect with Us &rarr;
            </motion.button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src={projectImage} // Ensure this path matches your uploaded project image
              alt="Project"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
        <motion.div
          className="text-center mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white bg-slate-900 inline-block p-8 rounded-lg shadow-lg">
            Let us together build a flourishing business
          </h2>
          <p className="text-lg mt-4">
            When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!
          </p>
        </motion.div>
      </motion.div>
      
    </motion.div>
  );
};

export default LandingPage;
