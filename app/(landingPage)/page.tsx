import Navbar from "./navbar";
import HeroSection from "./heroSection";
import WhyUsePeniga from "./whyUsePeniga";
import TheProcess from "./theProcess";
import TransactionSafety from "./transactionSafety";
import Footer from "./footer";



export default function Home() {
  return (
    <main className="flex flex-col w-full backdrop-blur-2xl bg-base-100/75 text-neutral-400 backdrop-brightness-150">

      <Navbar />
      <HeroSection/>
      <WhyUsePeniga />
      <TheProcess />
      <TransactionSafety />
      <Footer />
    </main>
  );
}
