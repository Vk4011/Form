import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
import { fetchData } from "../api/api";

const Data = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setFormData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleDownload = () => {
    const dataWithSerial = formData.map((item, index) => ({
      "SI No.": index + 1,
      "RM Name": item.rmName,
      "Full Name": item.customerFullName,
      Email: item.email,
      Phone: item.phoneNumber,
      "Type Of Income": item.typeOfIncome,
      Business: item.business || "N/A", // Corrected property name
      Income: item.income || "N/A", // Corrected property name
      Unit: item.unit || "N/A", // Added Unit field
      "Existing Loans": item.existingLoans || "N/A",
      "Loan Requirement": item.loanRequirement || "N/A",
      "Type Of Loan": item.typeOfLoan || "N/A",
      "Other Loan Type": item.otherLoanType || "N/A",
      "Follow Up Required": item.followUpRequired || "N/A",
      Location: item.location || "N/A",
      Remarks: item.remarks || "N/A",
    }));

    const ws = XLSX.utils.json_to_sheet(dataWithSerial);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Submitted Data");

    XLSX.writeFile(wb, "submitted_data.xlsx");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
        <p className="text-white text-xl animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-800 to-yellow-900">
        <p className="text-red-500 text-xl animate-pulse">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-2xl border border-gray-700 border-opacity-50 p-6 md:p-8 rounded-xl shadow-2xl max-w-full w-full"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-8 drop-shadow-lg">
          Submitted Form Data
        </h1>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-gray-200">
            <thead>
              <tr className="bg-gray-700 bg-opacity-50 text-gray-200">
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">SI No.</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">RM Name</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Full Name</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Email</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Phone</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Type Of Income</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Business</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Income</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Unit</th> {/* Added Unit column */}
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Existing Loans</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Loan Requirement</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Type Of Loan</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Other Loan Type</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Follow Up Required</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Location</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((form, index) => (
                <motion.tr
                  key={form._id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-800 bg-opacity-50"
                      : "bg-gray-700 bg-opacity-50"
                  } hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-indigo-200/20 transition-colors duration-700`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.05,
                    ease: "easeInOut",
                  }}
                >
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2">
                    {index + 1}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2">
                    {form.rmName}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2">
                    {form.customerFullName}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-blue-300">
                    {form.email}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-green-300">
                    {form.phoneNumber}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-yellow-300">
                    {form.typeOfIncome}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-yellow-300">
                    {form.business || "N/A"} {/* Corrected property name */}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-purple-300">
                    {form.income !== null && form.income !== undefined ? form.income : "N/A"} {/* Corrected property name */}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-purple-300">
                    {form.unit || "N/A"} {/* Added Unit field */}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-purple-300">
                    {form.existingLoans || "N/A"}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-purple-300">
                    {form.loanRequirement || "N/A"}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-purple-300">
                    {form.typeOfLoan || "N/A"}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-purple-300">
                    {form.otherLoanType || "N/A"}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2 text-pink-300">
                    {form.followUpRequired || "N/A"}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2">
                    {form.location || "N/A"}
                  </td>
                  <td className="border-t border-gray-600 px-2 md:px-4 py-1 md:py-2">
                    {form.remarks || "N/A"}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <center>
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg hover:from-teal-500 hover:to-blue-600 transition-all duration-700"
          >
            Download Excel
          </button>
        </center>
      </motion.div>
    </div>
  );
};

export default Data;
