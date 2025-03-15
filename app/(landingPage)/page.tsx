import Navbar from "./navbar";
import HeroSection from "./heroSection";
import InsuredBy from "./insuredBy";
import HowItWorks from "./howItWorkSection";
import WhyChooseUs from "./whyChooseUs";
import FAQSection from "./faq";
import Footer from "./footer";



export default function Home() {
  return (
    <div>
      <div className="grid-background">
        <Navbar />
      <HeroSection/>
      <div className="fading-effect"></div>
      </div>
      <InsuredBy/>
      <HowItWorks/>
      <WhyChooseUs/>
      <FAQSection/>
      <Footer />
      </div>     
  );
}
