import Navbar from "../(landingPage)/navbar";
import SignupForm from "./signup-form";
import Footer from "../(landingPage)/footer";


const Signup = () => {

  return (
    <main className="">
      <div className="grid-background">
      <Navbar/>
      <SignupForm />
      <div className="fading-effect"></div>
      </div>
      <Footer/>
   
    </main>
  )
}

export default Signup