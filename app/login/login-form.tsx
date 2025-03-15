"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch min-h-[80vh] lg:min-h-[500px] justify-center px-4 md:px-8  lg:mt-10 mt-4 max-w-7xl mx-auto gap-6">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div className="hidden lg:block col-span-3">
        <img
          src="/images/Frame 62.svg"
          alt="Login Illustration"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Form */}
      <div
        className="col-span-2 px-8  py-10 lg:py-4 rounded-2xl shadow-lg h-full flex flex-col justify-center w-full max-w-lg mx-auto"
        style={{
          background: "linear-gradient(to bottom, #FFF8F3, #E4CABF)",
        }}
      >
        <h2 className="text-2xl font-semibold text-[#272727] mb-2">Peniga</h2>
        <h3 className="text-xl font-medium text-[#272727] mb-4">Login to Account</h3>

        {/* Form */}
        <form className="mt-4 space-y-4">
          {/* Email Address */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Johny@gmail.com"
              className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C55938] text-[#272727]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link href="/forgotPassword">
              <span className="text-[#C55938] cursor-pointer text-sm font-medium underline">
                Forgot Password?
              </span>
            </Link>
          </div>

          {/* Login Button */}
          <div className="">
          <button className="w-full bg-[#C55938] text-white font-medium py-3 mt-4 rounded-lg shadow-md hover:bg-[#b34b2f] transition">
            Login
          </button>

          {/* Sign Up Redirect */}
          <p className="text-center text-sm text-gray-600 mt-4" style={{fontWeight:"400"}}>
            Don't have an account?{" "}
            <Link href="/sign-up">
              <span className="text-[#C55938] cursor-pointer font-medium underline" style={{fontWeight:"500"}}>
                Create Account
              </span>
            </Link>
          </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;