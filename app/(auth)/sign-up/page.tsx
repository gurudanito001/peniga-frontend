//import Navbar from "@/app/(landingPage)/navbar";
import SignupForm from "./signup-form";
//import Footer from "@/app/(landingPage)/footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Peniga | Create Account',
  description: 'Create an account with Peniga',
};

const Signup = () => {

  return (
      <SignupForm />
  )
}

export default Signup