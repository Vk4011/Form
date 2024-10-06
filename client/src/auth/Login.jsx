import React from "react";
import { Link } from "react-router-dom"; 
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
        <form className="flex flex-col">
          <input
            placeholder="Email"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
          />
          <input
            placeholder="Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
          />
          <p className="text-white mt-4">
            Don't have an account?{" "}
            <Link to="/signup" 
              className="text-sm text-blue-500 hover:underline"
              href="#"
            >
              Sign Up
            </Link>
          </p>
         
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Login
          </button>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
