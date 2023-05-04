import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './header.css';
import Logo from "../assets/Logo.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-gray-200 shadow-md">
      <div className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-bold hover:text-gray-300 transition-colors duration-300 transform hover:scale-105">
          <img src={Logo} alt="Logo" className="logo" style={{ justifySelf: 'start' }} />
          </a>
          <button
            className="block md:hidden text-white focus:outline-none focus:text-gray-300 transition-colors duration-300"
            onClick={handleToggle}
          >
            {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </button>
          <nav className="hidden md:block">
            <ul className="flex">
              <li className="mx-3">
                <a href="/#about" className="transition-colors duration-300 transform hover:translate-y-1 hover:text-gray-300">About</a>
              </li>
              <li className="mx-3">
                <a href="/#projects" className="transition-colors duration-300 transform hover:translate-y-1 hover:text-gray-300">Projects</a>
              </li>
              <li className="mx-3">
                <a href="/#contact" className="transition-colors duration-300 transform hover:translate-y-1 hover:text-gray-300">Contact</a>
              </li>
              <li className="mx-3">
                <a href="/#resume" target="_blank" without rel="noreferrer" className="btn bg-gray-300 text-gray-900 transition-colors duration-300 transform hover:translate-y-1 hover:bg-transparent hover:border-gray-300 hover:text-gray-300">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav
        className={`${
          toggle ? 'flex' : 'hidden'
        } flex-col md:hidden bg-gray-900`}
      >
        <ul className="flex flex-col">
          <li className="my-2">
            <a href="/#about" className="transition-colors duration-300 transform hover:translate-y-1 hover:text-gray-300">About</a>
          </li>
          <li className="my-2">
            <a href="/#projects" className="transition-colors duration-300 transform hover:translate-y-1 hover:text-gray-300">Projects</a>
          </li>
          <li className="my-2">
            <a href="/#contact" className="transition-colors duration-300 transform hover:translate-y-1 hover:text-gray-300">Contact</a>
          </li>
          <li className="my-2">
            <a href="/#resume" target="_blank" without rel="noreferrer" className="btn bg-gray-300 text-gray-900 transition-colors duration-300 transform hover:translate-y-1 hover:bg-transparent hover:border-gray-300 hover:text-gray-300">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
