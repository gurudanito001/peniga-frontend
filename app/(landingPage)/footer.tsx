


const Footer = () =>{

  return(
    <footer className="py-20 backdrop-blur-2xl bg-base-100/75 text-neutral-300 backdrop-brightness-150 px-3 sm:px-5 md:px-14 lg:px-44">
      <div className="flex items-center">
        <a className="hover:bg-transparent text-3xl font-bold px-0 text-left w-auto">Peniga</a>
        <ul className="list flex items-center sm:gap-12 ml-auto text-sm sm:text-lg text-neutral-300">
          <li><small>Services</small></li>
          <div className="divider divider-horizontal mx-1"></div>
          <li><small>The Process</small></li>
          <div className="divider divider-horizontal mx-1"></div>
          <li><small>Why Use Peniga</small></li>
        </ul>
      </div>

      <div className="divider"></div>
      <div>
        
        <small className="text-xs sm:text-sm text-neutral-300">Copyright &copy; {new Date().getFullYear()} Peniga Escrow Services, all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer