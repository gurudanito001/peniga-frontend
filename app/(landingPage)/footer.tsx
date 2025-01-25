import Link from "next/link"



const Footer = () =>{

  return(
    <footer className="pt-20 pb-10 backdrop-blur-2xl bg-base-100/75 text-neutral-300 backdrop-brightness-150 px-3 sm:px-5 md:px-14 lg:px-44">
      <div className="flex items-center">
        <Link href="/" className="hover:bg-transparent text-3xl font-bold px-0 text-left w-auto">Peniga</Link>
        <ul className="list flex items-center sm:gap-12 ml-auto text-sm sm:text-lg text-neutral-300">
          <a href=""><small>Services</small></a>
          <div className="divider divider-horizontal mx-1"></div>
          <a href="#the-process"><small>The Process</small></a>
          <div className="divider divider-horizontal mx-1"></div>
          <a href="#why-use-peniga"><small>Why Use Peniga</small></a>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col sm:flex-row">
        <small className="text-xs sm:text-sm text-neutral-300">Copyright &copy; {new Date().getFullYear()} Peniga Escrow Services, all rights reserved</small>
        <small className="text-xs text-neutral-300 md:ml-auto">Illustrations on this page are from  <a className="text-blue-700" target="_blank" href="http://freepik.com">Freepik</a></small>
      </div>
    </footer>
  )
}

export default Footer