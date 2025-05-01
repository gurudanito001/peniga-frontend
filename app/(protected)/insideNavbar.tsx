import { FaBell } from 'react-icons/fa';
import { userTokenData } from '../utils/interfaces';
import { getToken } from '../lib/auth';
import jwt from 'jsonwebtoken';


const InsideNavbar = async() => {
  const token = await getToken() as string
  const userData = jwt.decode(token) as userTokenData;

  return (
    <nav className="navbar text-base-content w-full py-5">
      
      <div className="flex-none lg:block p-0 w-full">
        <ul className="menu menu-horizontal p-0 flex items-center">
          {/* Navbar menu content here */}
          {/* <li className='mr-auto'>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
              <span className='font-semibold'>Welcome back, Daniel!</span>
            </div>
          </li> */}
          <li className='flex items-center ml-auto px-2'>
            <span className={`w-7 h-7 flex items-center justify-center rounded-full text-white text-xs font-semibold bg-green-900 capitalize`}
            >
              {userData.email[0]}
            </span>
          </li>

          <li className="divider divider-horizontal divider-start divider-neutral bg-transparent m-0 my-2"></li>

          <li className='flex justify-center'>
            <a className='hover:bg-transparent'>
              Help?
            </a>
          </li>
          <li className="divider divider-horizontal divider-start divider-neutral bg-transparent m-0 my-2"></li>
          <li className='flex justify-center'>
            <a className='hover:bg-transparent'>
              <div className="indicator">
                <FaBell fontSize={16} />
                <span className="badge badge-xs badge-primary indicator-item text-black z-0"></span>
              </div>
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default InsideNavbar