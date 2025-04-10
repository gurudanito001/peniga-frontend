"use client"

import { useState } from 'react';
import Image from 'next/image';


const ContractAgreement = () =>{


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
    <section className="w-full bg-neutral-50 max-w-5xl p-5 shadow">
      <div className='flex-1 gap-3'>
        <div className="p-3 lg:p-5">
          <header className="text-xl font-semibold text-neutral-700 mb-4 uppercase">
            TECH GADGETS PURCHASE CONTRACT
          </header>

          <p className='max-w-4xl text-base'>
          This Purchase Agreement (&quot;Agreement&quot;) is made and entered into on Friday, March 28, 2025, at 22:06:58 GMT, by and between Daniel Nwokocha,  (&quot;Seller&quot;), and Michael Onuoha (&quot;Buyer&quot;). This agreement pertains to the purchase of tech gadgets, with an inspection period of one (1) day(s), and all transactions shall be conducted in Nigerian Naira (NGN).
          </p>

        </div>

        <div className="divider m-0"></div>

        <div className="p-3 lg:p-5">
          <header className="text-lg font-semibold text-neutral-500 mb-4">
            Contract Items
          </header>

          {/* Contract Items List */}
          <ul className="space-y-4">
            {products.map((product, index) => (
              <li key={product.id} className={`${index !== products.length - 1  && "border-b"} py-4 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 max-w-2xl`}>
                {/* Image */}
                <Image alt="Product Image" width={80} height={80} src={product.image} className="w-20 h-20 sm:w-24 sm:h-20 rounded-lg object-cover" />

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

        <div className="divider m-0"></div>


        <div>
          <div className="p-3 lg:p-5 mb-5">
            <header className="text-lg font-semibold text-neutral-500 mb-4">
              Agreement Terms
            </header>


            <ol className="list-decimal list-outside align-top w-full max-w-4xl md:px-3">
              <li className="list-item border-b p-3 text-base w-full text-[#272727] align-top">
                  The first term is that the products must be delivered in perfect condition. Any damage detected on the products before or during delivery will be at the expense of the seller.
              </li>

              <li className="list-item border-b p-3 text-base w-full text-[#272727] align-top">
                  The first term is that the products must be delivered in perfect condition. Any damage detected on the products before or during delivery will be at the expense of the seller.
              </li>

              <li className="list-item p-3 text-base w-full text-[#272727] align-top">
                  The first term is that the products must be delivered in perfect condition. Any damage detected on the products before or during delivery will be at the expense of the seller.
              </li>
            </ol>
          </div>

        </div>

        <div className='flex flex-col mt-10 gap-4 px-3 lg:px-5'>
          <label className="fieldset-label flex items-center">
            <input type="checkbox" className="checkbox mr-2" />
            <span className='text-base'>I agree to all the terms of this contract</span>
          </label>

          <button className="btn btn-wide h-9 text-gray-400 font-semibold btn-accent text-base">I Agree</button>
        </div>
        
      </div>
    </section>
  )
}

export default ContractAgreement