import Image from "next/image"
import Navbar from "../(landingPage)/navbar";
import LoginForm from "./login-form";


const Signup = () => {

  return (
    <main className="flex flex-col w-full h-screen backdrop-blur-2xl bg-base-100/75 text-neutral-400 backdrop-brightness-150">
    <Navbar showLinks={false} />
    <section className=" grid lg:grid-cols-2 xl:rounded-3xl w-full xl:max-w-6xl backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 m-auto lg:overflow-clip h-full lg:h-auto ">
      <div className="hidden lg:flex lg:min-h-[700px] items-center justify-center w-full bg-indigo-200">
        <Image src="/images/login.png" className="w-full m-auto" alt="contract vector image" width={600} height={600} />
      </div>
      
      <LoginForm />
    </section>
    </main>
  )
}

export default Signup