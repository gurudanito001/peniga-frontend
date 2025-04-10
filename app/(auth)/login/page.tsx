//import Navbar from "@/app/(landingPage)/navbar";
import LoginForm from "./login-form";
//import Footer from "@/app/(landingPage)/footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Peniga | Log In',
  description: 'Access your account securely',
};

const Signup = () => {

  return (
      <LoginForm />
  )
}

export default Signup