"use client"


import Link from "next/link"

const SendOtpForm = () =>{

  return(
    <form className="w-full min-h-full p-5 py-14 md:p-14 flex flex-col gap-4 backdrop-blur-2xl bg-base-300/75 text-neutral-300 backdrop-brightness-150 max-w-xl m-auto">
        <h2 className=" text-3xl md:text-4xl flex flex-col lg:flex-row gap-5 max-w-lg mb-5">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Forgot Password</span>
        </h2>
        

        <label className="form-control w-full max-w-lg">
          <div className="label py-0">
            <span className="label-text">Email Address</span>
          </div>
          <input type="email" placeholder="Enter your email address" className="input input-bordered input-lg w-full placeholder:text-sm" />
        </label>


        <div className="flex flex-col mt-7 max-w-lg">
          <button className="btn btn-block bg-blue-800 hover:bg-blue-800/75 sm:btn-lg sm:h-16 mt-4 text-neutral-300">Send OTP</button>
          <span className="block text-center">Back to<Link className="btn btn-link text-primary" href="/login">Login</Link></span>

        </div>
      </form>
  )
}

export default SendOtpForm