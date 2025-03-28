import InsideNavbar from "../../insideNavbar";
import { XMarkIcon } from "@heroicons/react/16/solid";

const AddNewContract = () =>{

  return(
    <section className="w-full h-full overflow-y-clip bg-neutral-100">
      <InsideNavbar />
      <header className=" text-xl font-semibold text-neutral-600 mb-5 px-3 lg:px-5 flex items-center w-full">
        <span>Create New Contract</span>
      </header>
      <form className="px-3 lg:px-5 max-h-full overflow-y-auto pb-36">

        <div className="border p-3 lg:p-5 mb-5">
          <header className=" text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
            <span>Contract Details</span>
          </header>

          <label className="form-control w-full mb-2">
            <div className="label">
              <span className="label-text text-neutral-500">Title</span>
            </div>
            <input type="text" placeholder="Title of Contract" className="input input-bordered w-full bg-white" />
          </label>

          <div className="grid grid-cols-2 gap-1">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-neutral-500">Inspection Period</span>
              </div>
              <input type="text" placeholder="Number of days" className="input input-bordered w-full bg-white" />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-neutral-500">Currency</span>
              </div>
              <select className="select select-bordered w-full bg-white">
                <option>NGN</option>
                <option disabled>USD</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-neutral-500">Start Date</span>
              </div>
              <input type="date" className="input input-bordered w-full bg-white" />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-neutral-500">End Date</span>
              </div>
              <input type="date" className="input input-bordered w-full bg-white" />
            </label>
          </div>

        </div>

        <div className="border p-3 lg:p-5 mb-5">
          <header className=" text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
            <span className="min-w-max">Contract Items</span>
            <div className="drawer drawer-end w-auto ml-auto">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-sm h-9 btn-accent z-0">Add New</label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <article className="menu bg-base-200 text-base-content min-h-full w-96 p-4 z-20">
                  <header className=" text-lg font-semibold text-neutral-300 mb-5 flex items-center w-full">
                    <span>Add New Contract Item</span>
                  </header>

                  <label className="form-control w-full mb-2">
                    <div className="label">
                      <span className="label-text text-neutral-500">Item Name</span>
                    </div>
                    <input type="text" placeholder="Name of Item" className="input input-bordered w-full placeholder:text-sm" />
                  </label>
                  
                  <label className="form-control w-full mb-2">
                    <div className="label">
                      <span className="label-text text-neutral-500">Price</span>
                    </div>
                    <input type="text" placeholder="Price of Item" className="input input-bordered w-full placeholder:text-sm" />
                  </label>

                  <label className="form-control w-full mb-2">
                    <div className="label">
                      <span className="label-text text-neutral-500">Category</span>
                    </div>
                    <select className="select select-bordered w-full">
                      <option>Tech Gadgets</option>
                      <option disabled>Cars, Trucks, etc.</option>
                    </select>
                  </label>

                  <label className="form-control w-full mb-2">
                    <div className="label">
                      <span className="label-text text-neutral-500">Description</span>
                    </div>
                    <textarea className="textarea textarea-bordered" placeholder="Describe the item"></textarea>
                  </label>

                  <label className="form-control w-full mb-2">
                    <div className="label">
                      <span className="label-text text-neutral-500">Images</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full" />
                  </label>

                  <div className="mt-5">
                    <button type="button" className="btn btn-block btn-secondary">Save</button>
                  </div>
                </article>
              </div>
            </div>
          </header>

          <ul>
            <li className="card w-64 shadow-sm bg-white inline-block mx-2">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-lg">Hp Elitebook G5</h2>
                <div className="flex">
                  <p>₦325,000</p>
                  <div className="card-actions justify-end">
                    <span className="badge badge-outline border border-neutral-400 text-neutral-500 text-xs">Tech Gadgets</span>
                  </div>
                </div>
                
              </div>
            </li>

            <li className="card w-64 shadow-sm bg-white inline-block mx-2">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-lg">Hp Elitebook G5</h2>
                <div className="flex">
                  <p>₦325,000</p>
                  <div className="card-actions justify-end">
                    <span className="badge badge-outline border border-neutral-400 text-neutral-500 text-xs">Tech Gadgets</span>
                  </div>
                </div>
                
              </div>
            </li>

            <li className="card w-64 shadow-sm bg-white inline-block mx-2">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-lg">Hp Elitebook G5</h2>
                <div className="flex">
                  <p>₦325,000</p>
                  <div className="card-actions justify-end">
                    <span className="badge badge-outline border border-neutral-400 text-neutral-500 text-xs">Tech Gadgets</span>
                  </div>
                </div>
                
              </div>
            </li>
          </ul>
        </div>

        <div className="border p-3 lg:p-5 mb-5">
          <header className=" text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
            <span className="min-w-max">Agreement Terms</span>
            <div className="drawer drawer-end w-auto ml-auto">
              <input id="agreement-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="agreement-drawer" className="drawer-button btn btn-sm h-9 btn-accent z-0">Add New</label>
              </div>
              <div className="drawer-side">
                <label htmlFor="agreement-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <article className="menu bg-base-200 text-base-content min-h-full w-96 p-4 z-20">
                  <header className=" text-lg font-semibold text-neutral-300 mb-5 flex items-center w-full">
                    <span>Add New Agreement Term</span>
                  </header>

                  <label className="form-control w-full mb-2">
                    <div className="label">
                      <span className="label-text text-neutral-500">Agreement Term</span>
                    </div>
                    <textarea className="textarea textarea-bordered text-[#272727]" rows={3} placeholder="Enter Agreement Term"></textarea>
                  </label>

                  <div className="mt-5">
                    <button type="button" className="btn btn-block btn-secondary text-[#272727]">Save</button>
                  </div>
                </article>
              </div>
            </div>
          </header>


          <ul className="flex flex-col gap-2">
            <li className="flex items-center w-full max-w-5xl gap-2">
              <span className="inline-block border border-neutral-400 px-4 py-3 text-sm rounded-md w-full shadow text-[#272727]">
                The first term is that the products must be delivered in perfect condition. Any damage detected on the products before or during delivery will be at the expense of the seller.
              </span>
              <XMarkIcon className="w-6" color="black"/>
            </li>
            <li className="flex items-center w-full max-w-5xl gap-2">
            <span className="inline-block border border-neutral-400 px-4 py-3 text-sm rounded-md w-full shadow text-[#272727]">
                The second term is that the products must be delivered in perfect condition. Any damage detected on the products before or during delivery will be at the expense of the seller.
              </span>
              <XMarkIcon className="w-6" color="black"/>
            </li>
            <li className="flex items-center w-full max-w-5xl gap-2">
            <span className="inline-block border border-neutral-400 px-4 py-3 text-sm rounded-md w-full shadow text-[#272727]">
                The third term is that the products must be delivered in perfect condition. Any damage detected on the products before or during delivery will be at the expense of the seller.
              </span>
              <XMarkIcon className="w-6" color="black"/>
            </li>
          </ul>
        </div>
      </form>
    </section>
  )
}

export default AddNewContract