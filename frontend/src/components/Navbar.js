import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Bookings", path: "/bookings" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 supports-[backdrop-filter]:bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <img
                src="/images/logo.png"
                alt="Malith Tours Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 bg-transparent drop-shadow-lg"
              />
              <div className="flex flex-col">
                <span className="hidden sm:inline text-3xl lg:text-4xl font-extrabold font-serif text-black group-hover:text-blue-600 transition-all duration-300 leading-tight">
                  Malith Tours
                </span>
                <span className="hidden sm:inline text-xs text-gray-600 font-light uppercase tracking-wider">
                  Sri Lankan Adventures
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold text-black transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-blue-600 bg-blue-50"
                    : "hover:text-blue-600 hover:bg-gray-100"
                } group`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform ${
                    isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } transition-transform duration-300`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-blue-600 p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white backdrop-blur-md rounded-b-xl shadow-lg border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-semibold text-black ${
                  isActive(item.path)
                    ? "text-blue-600 bg-blue-50"
                    : "hover:text-blue-600 hover:bg-gray-100"
                } transition-all duration-200 transform hover:translate-x-2`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;