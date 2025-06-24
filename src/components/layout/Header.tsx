import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PieChart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      children: [
        { name: 'Confidential Computing', path: '/services/confidential-computing' },
        { name: 'Quantum Computing', path: '/services/quantum-computing' },
      ],
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <PieChart size={32} className="text-primary-600" />
          <span className="text-xl font-bold text-gray-900">AccelCQ Inc</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => 
            item.children ? (
              <div key={index} className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  {item.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  <div className="py-1">
                    {item.children.map((child, childIndex) => (
                      <NavLink
                        key={childIndex}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm ${
                            isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 animate-fade-in-down">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => 
              item.children ? (
                <div key={index}>
                  <button 
                    className="flex items-center w-full text-left font-medium text-gray-700 hover:text-primary-600 py-2"
                    onClick={toggleServices}
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                      {item.children.map((child, childIndex) => (
                        <NavLink
                          key={childIndex}
                          to={child.path}
                          className={({ isActive }) =>
                            `block py-2 ${
                              isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 font-medium ${
                      isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;