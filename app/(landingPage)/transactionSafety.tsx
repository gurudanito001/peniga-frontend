import Image from "next/image"
import Link from "next/link"



const TransactionSafety = ()=>{

  return(
    <section className="flex flex-col lg:flex-row rounded-3xl border border-primary mx-5 xl:mx-24 backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 my-14 xl:my-24">
      <div className="w-full p-5 md:p-14 my-auto">
        <h2 className=" text-4xl md:text-6xl flex flex-col lg:flex-row gap-5 max-w-lg">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Handle Business Online Safely</span> 
          {/* <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary"></span> */}
        </h2>
        <p className="text-md md:text-xl text-neutral-300 max-w-xl mt-5">You can avoid fraudulent deals and unrealized expectations when you do business using Peniga. </p>
        <div className="flex gap-2 sm:gap-5 mt-7">
          <Link href="/sign-up" className="btn btn-accent w-36 sm:btn-lg sm:h-16 mt-4 sm:btn-wide text-accent-content">Sign up</Link>
          <Link href="/login" className="btn w-36 sm:btn-lg sm:h-16 mt-4 sm:btn-wide bg-indigo-600 hover:bg-indigo-600/85">Log in</Link>
        </div>

      </div>

      <div className="items-center justify-center w-full">
        <Image src="/images/protect-online-transactions.png" className="w-full" alt="contract vector image" width={600} height={600}  />
      </div>
    </section>
  )
}

export default TransactionSafety