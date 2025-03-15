const InsuredBy = () =>{
    return(
        <div className="w-full bg-[#0B4F3D] py-2     mt-20 mb-10 ">
            <div className="flex flex-row gap-2 items-center md:ml-20 ml-2">
      {/* Insured By - Stays in the Green Background */}
      <p className="text-white text-lg font-semibold mb-2">Insured By</p>

      {/* White Box - Centered Inside Green Background */}
      <div className=''>
        <img src="/images/image 4.svg" className="w-32 " />
        </div>
      </div>
    </div>
   
    )
}

export default InsuredBy;