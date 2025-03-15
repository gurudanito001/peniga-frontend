"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center justify-center px-4 md:px-8 max-w-7xl mx-auto gap-6 mt-10">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div className="hidden lg:flex col-span-3 h-full">
        <img
          src="/images/Frame 60.svg"
          alt="Sign Up"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Form (Fixed Height & Centered) */}
      <div className="col-span-2 flex justify-center items-center h-full">
        <div
          className="p-6 rounded-2xl shadow-lg w-full md:max-w-lg flex flex-col justify-center h-full"
          style={{
            background: "linear-gradient(to bottom, #FFF8F3, #E4CABF)",
          }}
        >
          <h2 className="text-2xl font-semibold text-[#272727] mb-2">Peniga</h2>
          <h3 className="text-xl font-medium text-[#272727] mb-4">Create Account</h3>

          {/* Form */}
          <form className="mt-4 space-y-4">
            {/* First & Last Name */}
            <div className="flex flex-row gap-4">
              <div className="w-full">
                <label className="block text-gray-700 text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C55938] text-[#272727]"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C55938] text-[#272727]"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Johny@gmail.com"
                className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C55938] text-[#272727]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Create Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="8-digit password"
                  className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C55938] text-[#272727]"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter 8-digit password"
                  className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C55938] text-[#272727]"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Create Account Button */}
            <button className="w-full bg-[#C55938] text-white font-medium py-3 mt-4 rounded-lg shadow-md hover:bg-[#b34b2f] transition">
              Create Account
            </button>

            {/* Already have an account? Login */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-[#C55938] cursor-pointer font-medium underline">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;