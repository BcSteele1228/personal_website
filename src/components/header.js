import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-900 shadow-md">
      <div className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-bold text-white hover:text-blue-300 transition-colors duration-300 transform hover:scale-105">
            Brady Steele
          </a>
          <button
            className="block md:hidden text-white focus:outline-none focus:text-blue-300 transition-colors duration-300"
            onClick={handleToggle}
          >
            {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </button>
          <nav className="hidden md:block">
            <ul className="flex">
              <li className="mx-3">
                <a href="/#about" className="text-white transition-colors duration-300 transform hover:translate-y-1 hover:text-blue-300">About</a>
              </li>
              <li className="mx-3">
                <a href="/#projects" className="text-white transition-colors duration-300 transform hover:translate-y-1 hover:text-blue-300">Projects</a>
              </li>
              <li className="mx-3">
                <a href="/#contact" className="text-white transition-colors duration-300 transform hover:translate-y-1 hover:text-blue-300">Contact</a>
              </li>
              <li className="mx-3">
                <a href="/#resume" target="_blank" without rel="noreferrer" className="btn bg-blue-300 text-white transition-colors duration-300 transform hover:translate-y-1 hover:bg-transparent hover:border-blue-300 hover:text-blue-300">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav
        className={`${
          toggle ? 'flex' : 'hidden'
        } flex-col md:hidden bg-blue-900`}
      >
        <ul className="flex flex-col">
          <li className="my-2">
            <a href="/#about" className="text-white transition-colors duration-300 transform hover:translate-y-1 hover:text-blue-300">About</a>
          </li>
          <li className="my-2">
            <a href="/#projects" className="text-white transition-colors duration-300 transform hover:translate-y-1 hover:text-blue-300">Projects</a>
          </li>
          <li className="my-2">
            <a href="/#contact" className="text-white transition-colors duration-300 transform hover:translate-y-1 hover:text-blue-300">Contact</a>
          </li>
          <li className="my-2">
            <a href="/#resume" target="_blank" without rel="noreferrer" className="btn bg-blue-300 text-white transition-colors duration-300 transform hover:translate-y-1 hover:bg-transparent hover:border-blue-300 hover:text-blue-300">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
