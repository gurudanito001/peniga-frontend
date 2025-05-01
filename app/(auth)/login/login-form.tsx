/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
  
      const res = await axios.post("/api/auth/login", { email, password });
      
      setError("");
      setSuccess(res.data.message);
      router.push(redirectTo);
    } catch (error: any) {
      setSuccess("");
      setError(error?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch min-h-[80vh] lg:min-h-[500px] justify-center sm:px-4 md:px-12 lg:mt-10 mt-4 max-w-7xl mx-auto gap-6 mb-20">
      {/* Left Side - Image */}
      <div className="hidden lg:block col-span-3">
        <Image
          width={700}
          height={700}
          src="/images/Login.svg"
          alt="Login Illustration"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Form */}
      <div
        className="col-span-2 px-5 sm:px-8 py-10 lg:py-4 sm:rounded-2xl shadow-lg h-full flex flex-col justify-center w-full max-w-lg mx-auto"
        style={{ background: "linear-gradient(to bottom, #FFF8F3, #E4CABF)" }}
      >
        {error && <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-error rounded-md max-w-80 flex justify-between">
          <span>{error}</span>
          <svg onClick={() => setError("")} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>}

        {success && <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-success rounded-md max-w-80 flex justify-between">
          <span>{success}</span>
          <svg onClick={() => setSuccess("")} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>}


        <h2 className="text-2xl font-semibold text-[#272727] mb-2">Login to Account</h2>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-[#C55938] text-white font-medium py-3 mt-4 rounded-lg shadow-md hover:bg-[#b34b2f] transition disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Sign Up Redirect */}
            <p className="text-center text-sm text-gray-600 mt-4 font-normal">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up">
                <span className="text-[#C55938] cursor-pointer font-medium underline">
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
