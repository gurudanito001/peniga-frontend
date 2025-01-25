import Link from "next/link";
import { Squares2X2Icon } from "@heroicons/react/16/solid";


const Navbar = ({showLinks = true}: {showLinks?: boolean}) => {
   return (
      <div className="navbar sticky top-0 w-auto p-3 backdrop-blur-2xl bg-base-100/75 text-neutral-300 backdrop-brightness-150 sm:rounded-lg lg:mx-20 lg:my-7 z-50">
         <div className="navbar-start">
            <Link href="/" className="btn btn-ghost hover:bg-transparent text-3xl">Peniga</Link>
         </div>
         {showLinks &&
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold">
               <li><a className="btn bg-transparent border-transparent hover:bg-transparent hover:border-neutral-500 text-neutral-300" href="">Services</a></li>
               <li><a className="btn bg-transparent border-transparent hover:bg-transparent hover:border-neutral-500 text-neutral-300" href="#the-process">The Process</a></li>
               <li><a className="btn bg-transparent border-transparent hover:bg-transparent hover:border-neutral-500 text-neutral-300" href="#why-use-peniga">Why Use Peniga</a></li>
            </ul>
         </div>}
         <div className="navbar-end">
            <div className="dropdown dropdown-end backdrop-blur-2xl bg-base-100/75 text-neutral-300 backdrop-brightness-150 rounded-lg">
               <div tabIndex={0} role="button" className="btn bg-transparent border-transparent hover:bg-transparent hover:border-neutral-500">
                  <Squares2X2Icon className="w-6 text-neutral-300" />
               </div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 py-5 shadow text-lg mt-3 h-80 lg:h-32">
                  {showLinks &&<>
                     <li className="lg:hidden"><a href="">Services</a></li>
                     <li className="lg:hidden"><a href="#the-process">The Process</a></li>
                     <li className="lg:hidden"><a href="#why-use-peniga">Why Use Peniga</a></li>
                     <div className="divider lg:hidden"></div>
                  </>}
                  <li><Link href="login" className="text-indigo-300 font-semibold">Login</Link></li>
                  <li><Link href="/sign-up" className="text-accent font-semibold">Sign up</Link></li>
               </ul>
            </div>
         </div>
      </div>

   )
}

export default Navbar