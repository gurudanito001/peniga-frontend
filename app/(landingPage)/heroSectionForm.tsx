


const HeroSectionForm = () =>{

    return(
      <form className="mt-5 max-w-2xl">
          <div className="flex items-center py-3 px-2 md:px-5 bg-neutral-300 text-neutral-800 md:text-lg font-semibold rounded-lg">
            <span>I&apos;m</span>
            <select className="select select-sm md:select-md w-full max-w-24 sm:max-w-32 border-none appearance-none ring-0 focus:ring-0 bg-neutral-300  md:text-lg font-semibold">
              <option>Buying</option>
              <option>Selling</option>
            </select>
            <div className="divider divider-horizontal divider-neutral mx-1"></div>
            <select className="select select-sm md:select-md w-full max-w-md border-none appearance-none ring-0 focus:ring-0 bg-neutral-300 md:text-lg font-semibold">
              <option>Tech Gadgets, Phones, Laptops</option>
              <option>Vehicles, Cars, Trucks</option>
            </select>
          </div>

          <div className="flex items-center py-3 px-2 md:px-5 bg-neutral-300 text-neutral-800  md:text-lg font-semibold rounded-lg mt-3">
            <span>For</span>
            <select className="select select-sm md:select-md w-full max-w-24 sm:max-w-32 border-none appearance-none ring-0 focus:ring-0 bg-neutral-300  md:text-lg font-semibold">
              <option>NGN </option>
              <option disabled>USD</option>
            </select>
            <div className="divider divider-horizontal divider-neutral mx-1"></div>
            
            <input type="text" placeholder="500,000" className="input input-sm w-full max-w-md border-none appearance-none ring-0 focus:ring-0 bg-neutral-300 md:text-lg font-semibold" />
          </div>

          <button className="btn btn-lg h-16 mt-4 btn-block  bg-indigo-700">Get Started Now</button>
        </form>
    )
}

export default HeroSectionForm