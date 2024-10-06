import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaSpinner } from "react-icons/fa";

const UserForm = () => {
  const [formData, setFormData] = useState({
    rmName: "", // Relationship Manager Name
    fullName: "",
    email: "",
    phone: "",
    typeOfIncome: "Business",
    business: "",
    income: "",
    existingLoans: "",
    loanRequirement: "",
    typeOfLoan: "Personal Loan", // Changed from loanType to typeOfLoan
    remarks: "",
    followUpRequired: "Yes",
    location: "",
    unit: "Lakhs",
    otherLoanType: "", // Added to match backend schema
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the loan type is changed to "Other", we need to handle "otherLoanType"
    if (name === "typeOfLoan" && value !== "Other") {
      setFormData({
        ...formData,
        [name]: value,
        otherLoanType: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData({
            ...formData,
            location: `Lat: ${latitude}, Long: ${longitude}`,
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Geolocation Error:", error);
          alert("Unable to retrieve location.");
          setIsLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Map frontend field names to backend expected field names
    const submissionData = {
      rmName: formData.rmName,
      customerFullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phone,
      typeOfIncome: formData.typeOfIncome,
      business: formData.business || null,
      income: formData.income ? parseFloat(formData.income) : null,
      existingLoans: formData.existingLoans || null,
      loanRequirement: formData.loanRequirement ? parseFloat(formData.loanRequirement) : null,
      typeOfLoan: formData.typeOfLoan === "Other" ? formData.otherLoanType : formData.typeOfLoan,
      otherLoanType: formData.typeOfLoan === "Other" ? formData.otherLoanType : null,
      remarks: formData.remarks || null,
      followUpRequired: formData.followUpRequired,
      location: formData.location,
      unit: formData.unit,
    };

    // Validate required fields (if needed)
    // You can add additional validation here

    try {
      const response = await fetch("http://localhost:8080/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        // Optionally reset the form here
        setFormData({
          rmName: "",
          fullName: "",
          email: "",
          phone: "",
          typeOfIncome: "Business",
          business: "",
          income: "",
          existingLoans: "",
          loanRequirement: "",
          typeOfLoan: "Personal Loan",
          remarks: "",
          followUpRequired: "Yes",
          location: "",
          unit: "Lakhs",
          otherLoanType: "",
        });
      } else {
        alert(`Error: ${data.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 backdrop-blur-md border border-white/30 p-8 rounded-lg shadow-lg w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">User Information Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* RM Name */}
          <div>
            <label className="block text-sm text-gray-400">Relationship Manager Name</label>
            <input
              type="text"
              name="rmName"
              value={formData.rmName}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              placeholder="Enter RM Name"
              required
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-400">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Type of Income */}
          <div>
            <label className="block text-sm text-gray-400">Type of Income</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="typeOfIncome"
                  value="Business"
                  checked={formData.typeOfIncome === "Business"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Business
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="typeOfIncome"
                  value="Employee"
                  checked={formData.typeOfIncome === "Employee"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Employee
              </label>
            </div>
          </div>

          {/* Business Name */}
          {formData.typeOfIncome === "Business" && (
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400">Business Name</label>
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleInputChange}
                className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
                placeholder="Enter business name"
                required
              />
            </div>
          )}

          {/* Income */}
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-400">Income</label>
            <input
              type="number" // Changed to number input
              name="income"
              value={formData.income}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              placeholder="Enter income"
              required
            />
          </div>

          {/* Unit Selection */}
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-400">Select Unit</label>
            <select
              name="unit"
              value={formData.unit}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              required
            >
              <option value="Lakhs">Lakhs</option>
              <option value="Crores">Crores</option>
            </select>
          </div>

          {/* Existing Loans */}
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-400">Existing Loans</label>
            <input
              type="text"
              name="existingLoans"
              value={formData.existingLoans}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              placeholder="Enter existing loans"
            />
          </div>

          {/* Loan Requirement */}
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-400">Loan Requirement</label>
            <input
              type="number" // Changed to number input
              name="loanRequirement"
              value={formData.loanRequirement}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              placeholder="Enter loan requirement"
              required
            />
          </div>

          {/* Type of Loan */}
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-400">Type of Loan</label>
            <select
              name="typeOfLoan"
              value={formData.typeOfLoan}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              required
            >
              <option value="Personal Loan">Personal Loan</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Mortgage">Mortgage</option>
              <option value="Auto Loan">Auto Loan</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Other Loan Type */}
          {formData.typeOfLoan === "Other" && (
            <div className="md:col-span-1">
              <label className="block text-sm text-gray-400">Specify Other Loan Type</label>
              <input
                type="text"
                name="otherLoanType"
                value={formData.otherLoanType}
                onChange={handleInputChange}
                className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
                placeholder="Enter loan type"
                required
              />
            </div>
          )}

          {/* Remarks */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-400">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              placeholder="Enter remarks"
              rows="3"
            />
          </div>

          {/* Follow Up Required */}
          <div className="md:col-span-1">
            <label className="block text-sm text-gray-400">Follow Up Required</label>
            <select
              name="followUpRequired"
              value={formData.followUpRequired}
              onChange={handleInputChange}
              className="bg-gray-800 px-4 py-2 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700"
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-400">Location</label>
            <div className="flex flex-col md:flex-row md:items-center">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="bg-gray-800 px-4 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 focus:border-blue-500 border-gray-700 w-full"
                placeholder="Enter your location or get coordinates"
                required
              />
              <button
                type="button"
                onClick={handleLocationClick}
                className="mt-2 md:mt-0 md:ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                {isLoading ? <FaSpinner className="animate-spin" /> : <FaLocationArrow />}
                <span className="ml-2">Get Coordinates</span>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded-lg w-full ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UserForm;
