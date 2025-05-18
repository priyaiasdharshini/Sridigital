import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold tracking-tight">Sri Digital</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md p-1"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 ${isOpen ? "block" : "hidden"} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-red-600 md:bg-transparent px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out transform md:transform-none ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 md:opacity-100 md:translate-y-0"} z-40`}
        >
          <li className="md:inline-block block text-center">
            <Link
              to="/"
              className="block py-3 md:py-1 px-4 md:px-2 text-base md:text-lg font-medium hover:bg-red-700 md:hover:bg-transparent hover:text-yellow-300 transition-all duration-200 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="md:inline-block block text-center">
            <Link
              to="/designs"
              className="block py-3 md:py-1 px-4 md:px-2 text-base md:text-lg font-medium hover:bg-red-700 md:hover:bg-transparent hover:text-yellow-300 transition-all duration-200 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Designs
            </Link>
          </li>
          <li className="md:inline-block block text-center">
            <Link
              to="/works"
              className="block py-3 md:py-1 px-4 md:px-2 text-base md:text-lg font-medium hover:bg-red-700 md:hover:bg-transparent hover:text-yellow-300 transition-all duration-200 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Works
            </Link>
          </li>
          <li className="md:inline-block block text-center">
            <Link
              to="/about"
              className="block py-3 md:py-1 px-4 md:px-2 text-base md:text-lg font-medium hover:bg-red-700 md:hover:bg-transparent hover:text-yellow-300 transition-all duration-200 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="md:inline-block block text-center">
            <Link
              to="/contact"
              className="block py-3 md:py-1 px-4 md:px-2 text-base md:text-lg font-medium hover:bg-red-700 md:hover:bg-transparent hover:text-yellow-300 transition-all duration-200 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;