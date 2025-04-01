'use client'

import InsideNavbar from "../../insideNavbar";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";



const AddNewContract = () =>{

  const [products, setProducts] = useState([
    {
        id: 1,
        name: 'Tech Gadgets',
        model: 'Hp Elitebook G5',
        size: 'Medium',
        selectedColor: { name: 'Black', hex: '#000000' },
        quantity: 0,
        price: 325000,
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'Silver', hex: '#C0C0C0' },
        ],
    },

    {
        id: 2,
        name: 'Tech Gadgets',
        model: 'Hp Elitebook G5',
        size: 'Medium',
        selectedColor: { name: 'Black', hex: '#000000' },
        quantity: 0,
        price: 325000,
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'Silver', hex: '#C0C0C0' },
        ],
    },
]);

const handleColorChange = (id: number, selectedColor: { name: string; hex: string }) => {
    setProducts((prev) =>
        prev.map((product) =>
            product.id === id ? { ...product, selectedColor } : product
        )
    );
};


  return(
    <section className="w-full h-screen bg-neutral-100 p-5 overflow-y-hidden">
      <InsideNavbar />
      <div className="flex-1 h-full p-5">
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

          <ul className="space-y-4">
            {products.map((product, index) => (
              <li key={product.id} className={`${index !== products.length - 1  && "border-b"} py-4 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 max-w-2xl`}>
                {/* Image */}
                <img src={product.image} className="w-20 h-20 sm:w-24 sm:h-20 rounded-lg object-cover" />

                {/* Product Details */}
                <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h2 className="text-gray-800 font-semibold">{product.name}</h2>
                  <p className="text-gray-500 text-sm">{product.model}</p>

                  {/* Size & Color */}
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-gray-600 text-sm">{product.size}</span>

                    {/* Color Picker with Hover Dropdown */}
                    <div className="relative group text-[#272727]">
                      <button className="flex items-center gap-2">
                        <span className="text-sm">{product.selectedColor.name}</span>
                        <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: product.selectedColor.hex }}></span>
                      </button>

                      {/* Color Options Dropdown */}
                      <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 rounded-md">
                        {product.colors.map((color) => (
                          <button
                            key={color.name}
                            className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md"
                            onClick={(e) => {
                              e.preventDefault();
                              handleColorChange(product.id, color);
                            }}
                          >
                            <span>{color.name}</span>
                            <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: color.hex }}></span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quantity & Price */}
                <div className="flex flex-col items-center gap-4">
                  <span className="font-semibold text-gray-700">2 unit(s)</span>
                  {/* <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 0)}
                    className="w-16 text-center border rounded-md px-2 py-1 bg-transparent text-gray-500"
                    min="0"
                  /> */}
                  <p className="font-semibold text-gray-700">NGN{(product.quantity * product.price).toFixed(2)}</p>
                </div>
              </li>
            ))}
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
      </div>
    </section>
  )
}

export default AddNewContract