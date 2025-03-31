'use client';

import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import InsideNavbar from '../../insideNavbar';
import { XMarkIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

const PreviewContract = () => {
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

    const handleQuantityChange = (id: number, quantity: number) => {
        setProducts((prev) =>
            prev.map((product) =>
                product.id === id ? { ...product, quantity } : product
            )
        );
    };



    return (
        <section className="w-full h-screen bg-neutral-100 p-5 overflow-y-hidden">
            <InsideNavbar />
            <div className='flex-1 h-full overflow-y-auto p-5'>
                <header className="text-xl font-semibold text-neutral-600 mb-5 flex justify-between items-center">
                    <span>Create New Contract</span>

                </header>
                <div className="border p-3 lg:p-5 mb-5">
                    <header className="text-lg font-semibold text-neutral-400 mb-3">
                        Contract Details
                    </header>

                    <div className="flex flex-col gap-2 text-sm text-neutral-500">
                        <div className="flex justify-between">
                            <span>Title:</span>
                            <span className="font-medium text-neutral-700"></span>
                        </div>

                        <div className="flex justify-between">
                            <span>Inspection Period:</span>
                            <span className="font-medium text-neutral-700"></span>
                        </div>

                        <div className="flex justify-between">
                            <span>Currency:</span>
                            <span className="font-medium text-neutral-700"></span>
                        </div>

                        <div className="flex justify-between">
                            <span>Start Date:</span>
                            <span className="font-medium text-neutral-700"></span>
                        </div>

                        <div className="flex justify-between">
                            <span>End Date:</span>
                            <span className="font-medium text-neutral-700"></span>
                        </div>
                    </div>
                </div>

                <div className="border p-3 lg:p-5 mb-5">
                    <header className="text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
                        <span className="min-w-max">Contract Items</span>

                        {/* Add New Contract */}
                        <div className="drawer drawer-end w-auto ml-auto">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer-4" className="drawer-button btn btn-sm h-9 btn-accent z-0">
                                    Add New
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <article className="menu bg-base-200 text-base-content min-h-full w-full sm:w-96 p-4 z-20">
                                    <header className="text-lg font-semibold text-neutral-300 mb-5">Add New Contract Item</header>

                                    {/* Item Name */}
                                    <label className="form-control w-full mb-2">
                                        <span className="label-text text-[#272727]">Item Name</span>
                                        <input type="text" placeholder="Name of Item" className="input input-bordered w-full placeholder:text-sm text-[#272727]" />
                                    </label>

                                    {/* Price */}
                                    <label className="form-control w-full mb-2">
                                        <span className="label-text text-[#272727]">Price</span>
                                        <input type="text" placeholder="Price of Item" className="input input-bordered w-full placeholder:text-sm text-[#272727]" />
                                    </label>

                                    {/* Category */}
                                    <label className="form-control w-full mb-2">
                                        <span className="label-text text-[#272727]">Category</span>
                                        <select className="select select-bordered w-full text-[#272727]">
                                            <option>Tech Gadgets</option>
                                            <option disabled>Cars, Trucks, etc.</option>
                                        </select>
                                    </label>

                                    {/* Description */}
                                    <label className="form-control w-full mb-2">
                                        <span className="label-text text-[#272727]">Description</span>
                                        <textarea className="textarea textarea-bordered text-[#272727]" placeholder="Describe the item"></textarea>
                                    </label>

                                    {/* Images */}
                                    <label className="form-control w-full mb-2">
                                        <span className="label-text text-[#272727]">Images</span>
                                        <input type="file" className="file-input file-input-bordered w-full text-[#272727]" />
                                    </label>

                                    {/* Save Button */}
                                    <div className="mt-5">
                                        <button type="button" className="btn btn-block btn-secondary text-[#272727]">Save</button>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </header>

                    {/* Contract Items List */}
                    <ul className="space-y-4">
  {products.map((product) => (
    <li
      key={product.id}
      className="border-b py-4 flex flex-row items-center justify-between gap-10 flex-wrap"
    >
      {/* Image */}
      <img
        src={product.image}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
      />

      {/* Product Details */}
      <div className="flex-1 flex flex-col items-start text-left">
        <h2 className="text-gray-800 font-semibold">{product.name}</h2>
        <p className="text-gray-500 text-sm">{product.model}</p>

        {/* Size & Color */}
        <div className="flex items-center gap-4 mt-2">
          <span className="text-gray-600 text-sm">{product.size}</span>

          {/* Color Picker with Hover Dropdown */}
          <div className="relative group text-[#272727]">
            <button className="flex items-center gap-2">
              <span className="text-sm">{product.selectedColor.name}</span>
              <span
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: product.selectedColor.hex }}
              ></span>
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
                  <span
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color.hex }}
                  ></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quantity & Price */}
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={product.quantity}
          onChange={(e) =>
            handleQuantityChange(product.id, parseInt(e.target.value) || 0)
          }
          className="w-16 text-center border rounded-md px-2 py-1 bg-transparent text-gray-500"
          min="0"
        />
        <p className="font-semibold text-gray-700">
          NGN{(product.quantity * product.price).toFixed(2)}
        </p>
      </div>

      {/* Delete Button */}
      <button className="ml-4">
        <FaTrash size={18} color="black" />
      </button>
    </li>
  ))}
</ul>

{/* Confirm Purchase Button */}
<div className="flex justify-end mt-5">
  <button className="btn btn-sm h-9 text-gray-400 font-semibold btn-accent">
    Confirm Purchase
  </button>
</div>
</div>


                <form>

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
                                <XMarkIcon className="w-6" color="black" />
                            </li>
                            <li className="flex items-center w-full max-w-5xl gap-2">
                                <span className="inline-block border border-neutral-400 px-4 py-3 text-sm rounded-md w-full shadow text-[#272727]">
                                    The second term is that the products must be delivered in perfect condition. Any damage detected on the products before or during delivery will be at the expense of the seller.
                                </span>
                                <XMarkIcon className="w-6" color="black" />
                            </li>
                            <li className="flex items-center w-full max-w-5xl gap-2">
                                <span className="inline-block border border-neutral-400 px-4 py-3 text-sm rounded-md w-full shadow text-[#272727]">
                                    The third term is that the products must be delivered in perfect condition. Any damage detected on the products before or during delivery will be at the expense of the seller.
                                </span>
                                <XMarkIcon className="w-6" color="black" />
                            </li>
                        </ul>

                        <Link href="/dashboard/contracts"><button className="btn btn-sm h-9 text-gray-400 font-semibold btn-accent mt-16 mb-16">Preview</button></Link>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default PreviewContract;