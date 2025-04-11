/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const ForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [currentStage, setCurrentStage] = useState("sendVerificationCode");


  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return false;
    }
    return true;
  };

  const validateResetPassword = () => {
    if (!email || !verificationCode || !newPassword) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return false;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }

    return true;
  };

  const handleSendVerificationCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const res = await axios.post("/api/auth/forgotPassword", {
        email
      });

      setSuccess("A verification code was sent to your email");
      setCurrentStage("resetPassword")
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateResetPassword()) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const res = await axios.post("/api/auth/resetPassword", {
        email,
        verificationCode,
        newPassword,
      });

      setSuccess("Password reset successfully!");
      router.push("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center px-4 mt-20 mb-20 lg:mb-32">


      {currentStage === "sendVerificationCode" && 
        <div
          className="shadow-lg rounded-lg p-6 w-full max-w-md"
          style={{
            background: "linear-gradient(to bottom, #FFF8F3, #E4CABF)",
          }}
        >
          <h2 className="text-2xl font-semibold text-[#272727] text-left">Forgot Password</h2>
          <p className="text-gray-600 text-sm text-left mb-6 mt-5">
            No worries, we&apos;ll send you reset instructions
          </p>

          {error && (
            <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-error rounded-md max-w-80 flex justify-between">
              <span>{error}</span>
              <svg
                onClick={() => setError(null)}
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}

          {success && (
            <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-success rounded-md max-w-80 flex justify-between">
              <span>{success}</span>
              <svg
                onClick={() => setSuccess(null)}
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}

          <form onSubmit={handleSendVerificationCode}>
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


            {/* Send Verification Code Button */}
            <div className="mt-16">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C55938] text-white font-medium py-3 rounded-lg shadow-md hover:bg-[#b34b2f] transition disabled:opacity-70"
              >
                {loading ? "Sending Code..." : "Send Verification Code"}
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Remember Password?{" "}
            <Link href="/login">
              <span className="text-[#C55938] cursor-pointer font-medium underline">Login</span>
            </Link>
          </p>
        </div>
      }


      {currentStage === "resetPassword" &&
        <div
          className="shadow-lg rounded-lg p-6 w-full max-w-md"
          style={{
            background: "linear-gradient(to bottom, #FFF8F3, #E4CABF)",
          }}
        >
          <h2 className="text-2xl font-semibold text-[#272727] text-left">Reset Password</h2>
          <p className="text-gray-600 text-sm text-left mb-6 mt-5">
            Input verification code and new password
          </p>

          {error && (
            <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-error rounded-md max-w-80 flex justify-between">
              <span>{error}</span>
              <svg
                onClick={() => setError(null)}
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}

          {success && (
            <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-success rounded-md max-w-80 flex justify-between">
              <span>{success}</span>
              <svg
                onClick={() => setSuccess(null)}
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}

          <form onSubmit={handleResetPassword}>
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

            {/* Verification Code */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Verification Code</label>
              <input
                type="text"
                placeholder="XXXX"
                className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="8-digit password"
                  className="w-full p-3 border border-[#A5A5A5] bg-[#FFFFF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C55938] text-[#272727]"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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

            {/* Reset Password Button */}
            <div className="mt-16">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C55938] text-white font-medium py-3 rounded-lg shadow-md hover:bg-[#b34b2f] transition disabled:opacity-70"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </div>
          </form>

          {/* Resend Code */}
          <p className="text-center text-sm text-gray-600 mt-4">
            <button type="button" onClick={handleSendVerificationCode}>
              <span className="btn btn-link text-[#C55938] cursor-pointer font-medium underline">Resend Code</span>
            </button>
          </p>
        </div>
      }
    </div>
      
  );
};

export default ForgotPassword;
