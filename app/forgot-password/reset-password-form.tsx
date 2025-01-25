"use client"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";


const ResetPasswordForm = () =>{
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () =>{
    setShowPassword( prevState => !prevState)
  }

  return(
    <form className="w-full min-h-full p-5 py-14 md:p-14 flex flex-col gap-4 backdrop-blur-2xl bg-base-300/75 text-neutral-300 backdrop-brightness-150 max-w-xl m-auto">
        <h2 className=" text-3xl md:text-4xl flex flex-col lg:flex-row gap-5 max-w-lg mb-5">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Reset Password</span>
        </h2>
        

        <label className="form-control w-full max-w-lg">
          <div className="label py-0">
            <span className="label-text"> Enter the code we sent to your email </span>
          </div>
          <input type="text" placeholder="Enter your OTP" className="input input-bordered input-lg w-full placeholder:text-sm" />
        </label>

        <label className="form-control w-full max-w-lg">
          <div className="label py-0">
            <span className="label-text">Password</span>
          </div>
          <label className="input input-bordered input-lg flex items-center gap-2">
            <input type={showPassword ? "text" : "password"} placeholder="8-digit-password" className="grow h-full w-full placeholder:text-sm" />
            { showPassword ? <EyeSlashIcon onClick={handleTogglePassword} className="w-8 cursor-pointer" /> : <EyeIcon className="w-8 cursor-pointer" onClick={handleTogglePassword} />}
          </label>
        </label>


        <div className="flex flex-col mt-7 max-w-lg">
          <button className="btn btn-block bg-blue-800 hover:bg-blue-800/75 sm:btn-lg sm:h-16 mt-4 text-neutral-300">Reset Password</button>
        </div>
      </form>
  )
}

export default ResetPasswordForm