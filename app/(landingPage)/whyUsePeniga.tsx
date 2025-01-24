import { LockClosedIcon, ClockIcon, UserGroupIcon, LinkIcon } from "@heroicons/react/16/solid"


const WhyUsePeniga = () =>{

  return (
    <>
      <section id="why-use-peniga" className="flex flex-col xl:flex-row px-5 lg:px-0 lg:mx-24 gap-7 xl:gap-36  pt-28">

        <h2 className=" text-3xl md:text-5xl flex flex-col lg:flex-row gap-2 min-w-fit">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Why Use Peniga?</span>
        </h2>
   
        <article className="w-full">
          <h4 className=" font-semibold text-2xl capitalize">We make trade safe for buyer and seller</h4>
          <p className="mt-5 text-md md:text-lg text-neutral-300 max-w-4xl">We have created a platform where business and trade of different kinds can be carried out and trust can be maintained between both parties</p>

          <p className="mt-3 text-md md:text-lg text-neutral-300 max-w-4xl">
            Most business deals carried out both online and physically collapse before completion. One of the major reasons is distrust for one or both parties. Peniga helps to hold both parties accountable to the terms of the contract for the business transaction. Both parties must satisfy the terms of the contract before payment for goods or services are remitted.
          </p>
        </article>
      </section>


      <section className="grid sm:grid-cols-2 xl:grid-cols-4 lg:mx-24 gap-5 p-5 lg:p-14 mt-14 mb-24  backdrop-blur-2xl bg-base-100/5 backdrop-brightness-150 lg:rounded-3xl">


        <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary">
          <div className="card-body p-7">
            <LockClosedIcon className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200" />
            <h2 className="card-title text-neutral-200 my-3">Secure Trade</h2>
            <p className="text-neutral-300">All trade handled on Peniga are secure. The funds in escrow cannot be claimed until both parties satisfy the terms of the contract.</p>
          </div>
        </div>

        <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary">
          <div className="card-body p-7">
            <LinkIcon className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200" />
            <h2 className="card-title text-neutral-200 my-3">Binding Contracts</h2>
            <p className="text-neutral-300">We ensure that both parties itemize and adhere to the terms of the contract. This will help in resolving disputes when one party flouts the terms of the contract </p>
          </div>
        </div>

        <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary">
          <div className="card-body p-7">
            <ClockIcon className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200" />
            <h2 className="card-title text-neutral-200 my-3">Fast Payments</h2>
            <p className="text-neutral-300">Upon successful completion of the trade, we issue a payment to the seller which he can claim and send to his personal bank account </p>
          </div>
        </div>

        <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary">
          <div className="card-body p-7">
            <UserGroupIcon className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200" />
            <h2 className="card-title text-neutral-200 my-3">24/7 Support</h2>
            <p className="text-neutral-300">We are always on hand to help both parties complete the contract. If there is a dispute, we will use the terms of the contract to resolve the dispute.</p>
          </div>
        </div>


      </section>
    </>
    
  )
}

export default WhyUsePeniga