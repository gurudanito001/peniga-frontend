import Image from "next/image"
import Navbar from "../(landingPage)/navbar";
import SendOtpForm from "./send-otp-form";
//import ResetPasswordForm from "./reset-password-form";


const ForgotPassword = () => {

  return (
    <main className="flex flex-col w-full h-screen backdrop-blur-2xl bg-base-100/75 text-neutral-400 backdrop-brightness-150">
    <Navbar showLinks={false} />
    <section className=" grid lg:grid-cols-2 xl:rounded-3xl w-full xl:max-w-6xl  backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 m-auto lg:overflow-clip h-full lg:h-auto ">
      <div className="hidden lg:flex items-center justify-center w-full bg-indigo-200">
        <Image src="/images/forgot-password.svg" className="w-full m-auto" alt="contract vector image" width={600} height={600} />
      </div>
      {/* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
      <SendOtpForm />
    </section>
    </main>
  )
}

export default ForgotPassword