import Image from "next/image"
import HeroSectionForm from "./heroSectionForm"

const HeroSection = () =>{

  return(
    <section className=" grid xl:grid-cols-2 px-5 lg:px-0 lg:mx-24 xl:mr-0 gap-7 py-14 sm:pt-28">
      <div>
        <h2 className=" text-4xl md:text-6xl flex flex-col lg:flex-row gap-5 max-w-lg">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Trusted Online Escrow Service</span> 
          {/* <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary"></span> */}
        </h2>
        <p className=" font-semibold text-2xl mt-7">Ensuring Safety and Security of Online Trade</p>

        <p className="mt-3 text-md md:text-xl text-neutral-300 max-w-xl">Buy and sell anything online safely. We offer various services to make online trade safe and secure </p>

        <HeroSectionForm />
        
      </div>
      <div className="hidden xl:flex items-center justify-center">
        <Image src="/images/contract-vector.png" className="w-full" alt="contract vector image" width={400} height={600}  />
      </div>
    </section>
  )
}

export default HeroSection