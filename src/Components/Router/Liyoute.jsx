import React, { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import './Liyoute.css';
import Logo from "../../assets/kc.png";

function Liyoute() {
  const ulref = useRef();
  const location = useLocation();
  const CloseNav = useRef()

  const showNvbar = () => {
    ulref.current.classList.toggle("responsive");
  };
  

  return (
    <div>
      <div className='Navbar'>
        <img src={Logo} alt="" className=' w-28'/>
        <div className='Header'  >
          <ul className="Menu text-center list-none"ref={ulref}  >
            <li className='text-center'>
              <Link
                to='/'
                className={location.pathname === '/' ? 'active' : ''}
               onClick={showNvbar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/About'
                className={location.pathname === '/About' ? 'active' : ''}
                 onClick={showNvbar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/Contact'
                className={location.pathname === '/Contact' ? 'active' : ''}
                onClick={showNvbar}
              >
                Contact
              </Link>
            </li>
            <button className='Close_btn' onClick={showNvbar}>
              <IoIosClose className='text-white text-5xl absolute top-0  right-0' />
            </button>
          </ul>
        </div>
        <div>
          <button className='show_Btn' onClick={showNvbar}>
            <FaBars className='text-white text-3xl' />
          </button>
        </div>
      </div>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
}

export default Liyoute;
