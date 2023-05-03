import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary shadow-md">
      <div className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white hover:text-accent transition-colors duration-300">
            Brady Steele
          </a>
          <button
            className="block md:hidden text-white focus:outline-none focus:text-accent transition-colors duration-300"
            onClick={handleToggle}
          >
            {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </button>
          <nav className="hidden md:block">
            <ul className="flex">
              <li className="mx-3">
                <a href="/#about" className="text-white hover:text-accent transition-colors duration-300">About</a>
              </li>
              <li className="mx-3">
                <a href="/#projects" className="text-white hover:text-accent transition-colors duration-300">Projects</a>
              </li>
              <li className="mx-3">
                <a href="/#contact" className="text-white hover:text-accent transition-colors duration-300">Contact</a>
              </li>
              <li className="mx-3">
                <a href="/#resume" target="_blank" without rel="noreferrer" className="btn bg-accent text-white hover:bg-transparent hover:border-accent hover:text-accent transition-colors duration-300">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav
        className={`${
          toggle ? 'flex' : 'hidden'
        } flex-col md:hidden bg-primary`}
      >
        <ul className="flex flex-col">
          <li className="my-2">
            <a href="/#about" className="text-white hover:text-accent transition-colors duration-300">About</a>
          </li>
          <li className="my-2">
            <a href="/#projects" className="text-white hover:text-accent transition-colors duration-300">Projects</a>
          </li>
          <li className="my-2">
            <a href="/#contact" className="text-white hover:text-accent transition-colors duration-300">Contact</a>
          </li>
          <li className="my-2">
            <a href="/#resume" target="_blank" without rel="noreferrer" className="btn bg-accent text-white hover:bg-transparent hover:border-accent hover:text-accent transition-colors duration-300">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
