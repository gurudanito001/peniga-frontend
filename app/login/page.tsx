import Navbar from "../(landingPage)/navbar";
import LoginForm from "./login-form";
import Footer from "../(landingPage)/footer";


const Signup = () => {

  return (
    <main className="">
      <div className="grid-background">
    <Navbar/>
      <LoginForm />
      <div className="fading-effect"></div>
      </div>
      <Footer/>
    </main>
  )
}

export default Signup