"use client";
import Link from "next/link";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div 
      className="flex justify-center items-center px-4">
    
      {/* Forgot Password Card */}
      <div className="shadow-lg rounded-lg p-6 w-full max-w-md"
       style={{
        background: "linear-gradient(to bottom, #FFF8F3, #E4CABF)",
      }}
      >
        <h2 className="text-2xl font-semibold text-[#272727] text-left">Forgot Password</h2>
        <p className="text-gray-600 text-sm text-left mb-6 mt-5">
          No worries, we'll send you reset instructions
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Johny@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C55938] text-[#272727]"
          />
        </div>
        
        <div className="mt-16">
        {/* Reset Password Button */}
        <button className="w-full bg-[#C55938] text-white font-medium py-3 rounded-lg shadow-md hover:bg-[#b34b2f] transition">
          Reset Password
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Remember Password?{" "}
          <Link href="/login">
            <span className="text-[#C55938] cursor-pointer font-medium underline">Login</span>
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;