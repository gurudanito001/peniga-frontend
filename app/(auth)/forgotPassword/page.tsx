
import ForgotPassword from "./forgot-Password";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Peniga | Forgot Password',
  description: "You'll have access in no time",
};


const ForgotPasswordPage = () => {

  return (
    <ForgotPassword/>
  )
}

export default ForgotPasswordPage