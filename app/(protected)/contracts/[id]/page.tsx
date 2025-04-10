
//import Image from "next/image";
import ContractAgreement from "./contractAgreement"
import InsideNavbar from "@/app/(protected)/insideNavbar"
import { FaEnvelope, FaComment, FaDownload, FaCheck, FaInfo } from "react-icons/fa"

const Home = () => {

  return (
    <section className={`w-full h-screen p-5 overflow-y-auto bg-base-100/40`}>
      <InsideNavbar />
      <div className="w-full flex">
        <div className="w-full md:w-3/5 xl:w-2/3">
          <header className="px-5 py-3 md:mx-5 shadow border flex items-center">
            <div>
              <div className="flex items-center">
                <h2 className="text-2xl font-bold mr-3">Michael Onuoha </h2>
                <span className="badge badge-secondary">Buyer</span>
              </div>
              <span>michael@gmail.com</span>
            </div>

            <div className=" flex items-center gap-2 ml-auto">
              <span className="w-10 h-10 rounded-full flex items-center justify-center border border-primary"><FaComment fontSize={18} color="#025253" /></span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center border border-primary"><FaEnvelope fontSize={18} color="#025253" /></span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center border border-primary"><FaDownload fontSize={18} color="#025253" /></span>
            </div>

          </header>

          <section className=" py-3 md:mx-5">
            <div role="alert" className="alert alert-vertical sm:alert-horizontal rounded-md">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border border-primary"><FaInfo /></span>
              <div>
                <h3 className="font-bold">Next Step!</h3>
                <div className="text-sm">Waiting for buyer to agree to contract</div>
              </div>
              <button className="btn btn-sm btn-primary">View</button>
            </div>
          </section>



          <div className=" py-3 md:mx-5 flex flex-col gap-3">
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
              <input type="radio" name="my-accordion-3" checked={false} onChange={() => { }} />
              <div className="collapse-title font-semibold text-left text-lg flex items-center">
                <span className="flex border bg-secondary text-white items-center justify-center w-8 h-8 rounded-full text-xl mr-2">
                  <FaCheck fontSize={14} />
                </span>
                Create a Contract
              </div>
              <div className="collapse-content text-sm">Contract has been created</div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold text-left text-lg flex items-center"><span className="flex bg-secondary border border-secondary text-white items-center justify-center w-8 h-8 rounded-full text-lg mr-2">2</span>Accept Agreement</div>
              <div className="collapse-content text-sm">
                <ContractAgreement />
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold text-left text-lg flex items-center"><span className="flex bg-transparent border border-secondary text-secondary items-center justify-center w-8 h-8 rounded-full text-lg mr-2">3</span>Secure Payment</div>
              <div className="collapse-content text-sm">

                <p className=" max-w-2xl">Click on the button below to generate a temporary account. Then transfer the exact amount to the generated account</p>


                <div className="card w-full max-w-2xl bg-base-100 card-lg shadow-sm border mt-5 relative">

                  {/* For TSX uncomment the commented types below */}
                  <div className="grid grid-flow-col gap-2 text-center auto-cols-max absolute top-0 right-0">

                    <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
                      <span className="countdown font-mono text-xl">
                        <span style={{ "--value": 24 } as React.CSSProperties } aria-live="polite" aria-label={''}>24</span>
                      </span>
                      min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
                      <span className="countdown font-mono text-xl">
                        <span style={{ "--value": 59 }  as React.CSSProperties} aria-live="polite" aria-label={''}>59</span>
                      </span>
                      sec
                    </div>
                  </div>

                  <div className="card-body">
                    <h2 className="card-title">Escrow Account Details</h2>
                    <div className="flex">
                      <article className="w-1/2">
                        <header className="text-gray-600">Bank Name</header>
                        <span className="text-lg font-semibold">Providus Bank</span>
                      </article>

                      <article className="w-1/2">
                        <header className="text-gray-600">Account Name</header>
                        <span className="text-lg font-semibold">Peniga Escrow Account</span>
                      </article>
                    </div>

                    <div className="flex">
                      <article className="w-1/2">
                        <header className="text-gray-600">Account Number</header>
                        <span className="text-lg font-semibold">0123456789</span>
                      </article>

                      <article className="w-1/2">
                        <header className="text-gray-600">Amount</header>
                        <span className="text-lg font-semibold">₦120,000</span>
                      </article>
                    </div>


                    <ul className=" list-outside list-disc pl-5 mt-5">
                      <li className=" list-item text-[#D2A337]">The account details above can only be used for this transaction</li>
                      <li className=" list-item text-[#D2A337]">An escrow fee of <span className="font-semibold">₦500</span> has been added for this transaction</li>
                      <li className=" list-item text-[#D2A337]">The account details above are valid for the next <span className="font-semibold">27mins 24secs</span></li>
                    </ul>
                  </div>
                </div>



                <button type="button" className="btn btn-wide btn-secondary text-[#272727] mt-7"> Generate Escrow Account </button>
                <button type="button" className="btn btn-wide btn-secondary text-[#272727] mt-7"> I have made the transfer </button>

              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold text-left text-lg flex items-center"><span className="flex bg-transparent border border-secondary text-secondary items-center justify-center w-8 h-8 rounded-full text-lg mr-2">4</span>Deliver to Buyer</div>
              <div className="collapse-content text-sm">
                
                <p>Waiting for buyer to confirm that he has received the package</p>

                <button type="button" className="btn btn-wide btn-secondary text-[#272727] mt-7"> I have received the package </button>

              </div>

                
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold text-left text-lg flex items-center"><span className="flex bg-transparent border border-secondary text-secondary items-center justify-center w-8 h-8 rounded-full text-lg mr-2">5</span>Inspection & Approval</div>
              <div className="collapse-content text-sm">
                <p></p>Waiting for buyer to inspect and approve the delivery

                <div className='flex flex-col mt-10 gap-4 px-3 lg:px-5'>
                  <label className="fieldset-label flex items-center">
                    <input type="checkbox" className="checkbox mr-2" />
                    <span className='text-base'>I agree that the delivered products satisfy the conditions on the contract</span>
                  </label>

                  <button className="btn btn-wide h-9 text-gray-400 font-semibold btn-accent text-base">I Agree</button>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold text-left text-lg flex items-center"><span className="flex bg-transparent border border-secondary text-secondary items-center justify-center w-8 h-8 rounded-full text-lg mr-2">6</span>Release Payment</div>
              <div className="collapse-content text-sm">
                <p>Payment has be issued to seller, waiting for seller. Seller can withdraw payment now!</p>
              </div>
            </div>
          </div>
        </div>


        <aside className="hidden md:block md:w-2/5 xl:h-1/3 min-h-screen xl:px-10">

          <div className="stats shadow w-full px-10 py-5">
            <div className="stat flex flex-col">
              <h4 className="text-2xl font-bold mb-8 text-center">Contract Progress</h4>
              <div className="stat-figure text-secondary">
                <div className="radial-progress text-4xl font-extrabold"
                  style={{ "--value": "40", "--size": "12rem", "--thickness": "1.5rem" } as React.CSSProperties}
                  aria-valuenow={70} role="progressbar">40%</div>
              </div>
              <div className="stat-title text-center font-semibold text-xl mt-4">2 Steps done</div>
              <div className="stat-desc text-secondary text-center font-semibold text-base">3 steps remaining</div>

              <div className="mt-10 flex flex-col gap-4">
                <button type="button" className="btn btn-block btn-secondary text-[#272727]"><FaComment fontSize={18} color="#272727" /> Message Buyer</button>

                <button type="button" className="btn btn-block btn-secondary text-[#272727]"><FaEnvelope fontSize={18} color="#272727" /> Send Mail to Buyer</button>

                <button type="button" className="btn btn-block btn-secondary text-[#272727]"><FaDownload fontSize={18} color="#272727" /> Download Contract</button>
              </div>


            </div>
          </div>
        </aside>
      </div>



    </section>
  )
}

export default Home