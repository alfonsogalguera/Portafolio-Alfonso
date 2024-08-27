import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-800 py-8 shadow-lg">
      <div className="">
        {/* Botón del menú, solo visible en pantallas pequeñas */}
        <button 
          onClick={toggleMenu} 
          className="text-black block lg:hidden focus:outline-none ml-8"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navegación, visible siempre en pantallas grandes, y controlado por estado en pantallas pequeñas */}
        <nav className={`lg:flex flex lg:space-x-8 justify-center items-center flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <a href="#educacion" className="hover:text-gray-400 block py-2 lg:py-0">Home</a>
          <a href="#experiencia" className="hover:text-gray-400 block py-2 lg:py-0">About</a>
          <a href="#proyectos" className="hover:text-gray-400 block py-2 lg:py-0">Projects</a>
          <a href="#sobre-mi" className="hover:text-gray-400 block py-2 lg:py-0">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
