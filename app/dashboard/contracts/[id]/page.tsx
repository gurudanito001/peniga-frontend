//import Image from "next/image";
import ContractAgreement from "./contractAgreement"
import InsideNavbar from "../../insideNavbar"

const Home = () =>{

  return (
    <section className={`w-full min-h-screen overflow-y-auto bg-base-100`}>
      <InsideNavbar />
      <header className="px-5 py-3 md:mx-5 shadow-sm">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-3">Michael Onuoha </h2>
          <span className="badge badge-secondary">Buyer</span>
        </div>
        <span>michael@gmail.com</span>
      </header>
      <div className=" py-3 md:mx-5 flex flex-col gap-3">
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold text-left text-lg flex items-center"><span className="flex border bg-secondary text-white items-center justify-center w-7 h-7 rounded-full text-lg mr-2">1</span>Agreement</div>
          <div className="collapse-content text-sm">
            <ContractAgreement />
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-left text-lg">Payment</div>
          <div className="collapse-content text-sm">Click on the login page and follow the instructions sent to your email.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-left text-lg">Delivery</div>
          <div className="collapse-content text-sm">Go to settings and select to make changes.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-left text-lg">Inspection</div>
          <div className="collapse-content text-sm">Go to settings and select to make changes.</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-left text-lg">Completed</div>
          <div className="collapse-content text-sm">Go to settings and select to make changes.</div>
        </div>
      </div>
      

    </section>
  )
}

export default Home