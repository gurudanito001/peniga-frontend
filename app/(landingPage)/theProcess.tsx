import Image from "next/image";


const TheProcess = () => {

  return (
    <>
      <section id="the-process" className=" xl:my-20 px-3 backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 py-28 flex flex-col">

        <h2 className=" text-3xl md:text-5xl flex flex-col lg:flex-row gap-2 min-w-fit mb-14">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 mx-auto">Peniga Trade Process</span>
        </h2>
        <ul className="steps steps-vertical xl:steps-horizontal xl:w-full mx-auto">
          <li data-content="1" className="step step-primary font-semibold xl:text-lg text-neutral-200 p-3">
          <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary max-w-96">
            <div className="card-body flex flex-col p-7">
              <Image src="/images/agreement.png" className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200 xl:mx-auto" alt="contract vector image" width={40} height={40}  />
              <h2 className="card-title text-neutral-200 my-3 xl:justify-center">Contract Agreement</h2>
              <p className="text-neutral-300 text-left xl:text-center font-normal">All trade handled on Peniga are secure. The funds in escrow cannot be claimed until both parties satisfy the terms of the contract.</p>
            </div>
          </div>
          </li>

          <li data-content="2" className="step step-primary font-semibold xl:text-lg text-neutral-200 p-3">
            <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary max-w-96">
              <div className="card-body flex flex-col p-7">
                <Image src="/images/escrow-payment.png" className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200 xl:mx-auto" alt="contract vector image" width={40} height={40} />
                <h2 className="card-title text-neutral-200 my-3 xl:justify-center">Escrow Payment</h2>
                <p className="text-neutral-300 text-left xl:text-center text-md font-normal">All trade handled on Peniga are secure. The funds in escrow cannot be claimed until both parties satisfy the terms of the contract.</p>
              </div>
            </div>
          </li>

          <li data-content="3" className="step step-primary font-semibold xl:text-lg text-neutral-200 p-3">
          <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary max-w-96">
            <div className="card-body flex flex-col p-7">
            <Image src="/images/delivery.png" className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200 xl:mx-auto" alt="contract vector image" width={40} height={40}  />
              <h2 className="card-title text-neutral-200 my-3 xl:justify-center">Deliver to Buyer</h2>
              <p className="text-neutral-300 text-left xl:text-center font-normal">All trade handled on Peniga are secure. The funds in escrow cannot be claimed until both parties satisfy the terms of the contract.</p>
            </div>
          </div>
          </li>
          <li data-content="4" className="step step-primary font-semibold xl:text-lg text-neutral-200 p-3">
            <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary max-w-96">
              <div className="card-body flex flex-col p-7">
                <Image src="/images/inspection.png" className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200 xl:mx-auto" alt="contract vector image" width={40} height={40} />
                <h2 className="card-title text-neutral-200 my-3 xl:justify-center">Inspection & Approval</h2>
                <p className="text-neutral-300 text-left xl:text-center font-normal">All trade handled on Peniga are secure. The funds in escrow cannot be claimed until both parties satisfy the terms of the contract.</p>
              </div>
            </div>
          </li>

          <li data-content="5" className="step step-primary font-semibold xl:text-lg text-neutral-200 p-3">
            <div className="card backdrop-blur-2xl bg-base-100/5 text-neutral-400 backdrop-brightness-150 sm:rounded-3xl border border-primary max-w-96">
              <div className="card-body flex flex-col p-7">
                <Image src="/images/release-payment.png" className="w-20 p-6 rounded-3xl bg-indigo-600 text-neutral-200 xl:mx-auto" alt="contract vector image" width={40} height={40} />
                <h2 className="card-title text-neutral-200 my-3 xl:justify-center">Release Payment</h2>
                <p className="text-neutral-300 text-left xl:text-center font-normal">All trade handled on Peniga are secure. The funds in escrow cannot be claimed until both parties satisfy the terms of the contract.</p>
              </div>
            </div>
          </li>
        </ul>

      </section> 
    </>

  )
}

export default TheProcess