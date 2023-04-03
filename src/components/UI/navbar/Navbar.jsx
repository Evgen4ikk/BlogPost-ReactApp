import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaBlog } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/context'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#222222] w-full py-2 px-7 flex items-center justify-between">
      <div className='mx-auto'>
        <Link to='/posts' className="text-white font-bold text-xl">
          <FaBlog className='text-gray-500 w-10 h-10 mx-auto'/>
        </Link>
      </div>
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          className="text-gray-400 focus:outline-none"
          onClick={handleMenuToggle}
        >
          <MdAccountCircle className="w-8 h-8 mx-auto rounded-full aspect-square"/>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-[#292929] rounded-md shadow-lg z-10">
            <Link
              to='/posts'
              className="block px-4 py-2 text-gray-100 hover:bg-[#3a3a3a] cursor-pointer"
            >
              Tasks
            </Link>
            <Link
              to='/myProfile'
              className="block px-4 py-2 text-gray-100 hover:bg-[#3a3a3a] cursor-pointer"
            >
              Profile
            </Link>
            <Link
              onClick={logout}
              to='/login'
              className="block px-4 py-2 text-gray-100 hover:bg-[#3a3a3a] cursor-pointer"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;