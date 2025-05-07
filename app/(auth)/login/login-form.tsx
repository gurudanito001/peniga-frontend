/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";


const LoginForm = () => {
  const router = useRouter();
  //const {showNotification} = useNotificationContext();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Email and Password are required")
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Email is not valid")
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/login", { email, password });
      
      toast.success(res.data.message)
      router.push(redirectTo);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Login failed.")
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
