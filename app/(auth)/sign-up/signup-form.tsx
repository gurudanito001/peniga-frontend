/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";

const SignUpForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [currentStage, setCurrentStage] = useState("register");

  const validateForm = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return false;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const res = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      setSuccess("A verification code was sent to your email");
      setCurrentStage("verifyAccount")
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !verificationCode) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const res = await axios.post("/api/auth/verifyAccount", {
        email,
        verificationCode,
      });

      setSuccess("Account verified successfully!");
      router.push(redirectTo);
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center justify-center px-4 md:px-12 max-w-7xl mx-auto gap-4 mt-10 mb-20">
      <div className="hidden lg:flex col-span-3 h-full">
        <Image width={700} height={700} src="/images/Signup.svg" alt="Sign Up" className="object-cover rounded-lg" />
      </div>


      {/* Create Account */}
      {currentStage === "register" &&
        <div className="col-span-2 flex justify-center items-center h-full">
          <div className="p-6 rounded-2xl shadow-lg w-full md:max-w-lg flex flex-col justify-center h-full" style={{ background: "linear-gradient(to bottom, #FFF8F3, #E4CABF)" }}>
            {error && (
              <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-error rounded-md max-w-80 flex justify-between">
                <span>{error}</span>
                <svg onClick={() => setError(null)} className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
            {success && (
              <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-success rounded-md max-w-80 flex justify-between">
                <span>{success}</span>
                <svg onClick={() => setSuccess(null)} className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}

            <h2 className="text-2xl font-semibold text-[#272727] mb-2">Create Account</h2>

            <form onSubmit={handleRegister} className="mt-4 space-y-4">
              <div className="flex flex-row gap-4">
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Johny@gmail.com"
                  className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Create Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="8-digit password"
                    className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter 8-digit password"
                    className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C55938] text-white font-medium py-3 mt-16 rounded-lg shadow-md hover:bg-[#b34b2f] transition disabled:opacity-70"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link href="/login">
                  <span className="text-[#C55938] cursor-pointer font-medium underline">Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      }



      {/* Verify Account */}

      {currentStage === "verifyAccount" &&
        <div className="col-span-2 flex justify-center items-center h-full">
          <div className="p-6 rounded-2xl shadow-lg w-full md:max-w-lg flex flex-col justify-center h-full" style={{ background: "linear-gradient(to bottom, #FFF8F3, #E4CABF)" }}>
            {error && (
              <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-error rounded-md max-w-80 flex justify-between">
                <span>{error}</span>
                <svg onClick={() => setError(null)} className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
            {success && (
              <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-success rounded-md max-w-80 flex justify-between">
                <span>{success}</span>
                <svg onClick={() => setSuccess(null)} className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}

            <h2 className="text-2xl font-semibold text-[#272727] mb-2">Verify Account</h2>

            <form onSubmit={handleVerifyAccount} className="mt-4 space-y-4">
              

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Johny@gmail.com"
                  className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>


              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Verification Code</label>
                <input
                  type="text"
                  placeholder="XXXX"
                  className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C55938] text-white font-medium py-3 mt-16 rounded-lg shadow-md hover:bg-[#b34b2f] transition disabled:opacity-70"
              >
                {loading ? "Verifying..." : "Verify Account"}
              </button>

            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default SignUpForm;
