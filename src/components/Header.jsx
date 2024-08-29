import { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-800 py-8 shadow-lg">
      <div className="">
        <button
          onClick={toggleMenu}
          className="text-black block lg:hidden focus:outline-none ml-8"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <nav
          className={`lg:flex flex font-title lg:space-x-8 justify-center items-center flex-col lg:flex-row ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <Link
            to="Home"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 block py-2 lg:py-0 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="About"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 block py-2 lg:py-0 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="Project"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 block py-2 lg:py-0 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 block py-2 lg:py-0 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
