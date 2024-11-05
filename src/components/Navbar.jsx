import { useState } from "react";
import { Search, User, Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/13.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Products",
      link: "/products",
      subItems: ["Category 1", "Category 2", "Category 3"],
    },
    { name: "News", link: "/news" },
    { name: "Download", link: "/download" },
    { name: "Reviews & References", link: "/reviews-references" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center ml-96 pl-32 space-x-4 hidden md:flex">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <span>E-mail: info@ysenmed.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>TEL: +86-020-34174486</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>MOB: +86-18998432898</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="YSENMED" className="w-48 h-28" />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search.."
                className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-0 ring-black right-4 ring-black focus:ring-black"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-500 hover:text-emerald-600">
                <Search className="w-5 rounded-full text-black h-5 " />
              </button>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center font-light text-blue-700 hover:text-emerald-500"
            >
              <User className="w-14 h-16 mr-1 border-1 " />
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden text-green-900"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-green-900 text-white hidden md:block">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      className="flex items-center px-4 py-4 hover:text-blue-600 transition-colors duration-300 text-white"
                      onClick={toggleProducts}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {isProductsOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`${item.link}/${subItem
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className="block px-4 py-4 hover:text-blue-600 transition-colors duration-300 text-white whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
                <span className="absolute bottom-3 left-4 right-4 h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={toggleMenu}
        >
          <div
            className="bg-white h-full w-64 p-4 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-green-900">Menu</h2>
              <button onClick={toggleMenu} className="text-green-900">
                <X size={24} />
              </button>
            </div>
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="mb-2">
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={toggleProducts}
                        className="flex items-center justify-between w-full py-2 text-green-900 hover:text-blue-600 transition-colors duration-300"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {isProductsOpen && (
                        <ul className="ml-4 mt-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem}>
                              <Link
                                to={`${item.link}/${subItem
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                                className="block py-2 text-green-900 hover:text-blue-600 transition-colors duration-300"
                                onClick={toggleMenu}
                              >
                                {subItem}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="block py-2 text-green-900 hover:text-blue-600 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
