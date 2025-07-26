import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

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
      path: '/services',
      children: [
        { 
          name: 'Confidential Computing', 
          path: '/services/confidential-computing',
          children: [
            { name: 'Secure Enclave', path: '/services/confidential-computing/secure-enclave' },
            { name: 'Memory Encryption', path: '/services/confidential-computing/memory-encryption' },
            { name: 'Privacy-Preserving Computation', path: '/services/confidential-computing/privacy-preserving-computation' },
            { name: 'TEE-as-a-Service', path: '/services/tee-as-a-service' }
          ]
        },
        { name: 'Quantum Computing', path: '/services/quantum-computing' },
        { name: 'Enterprise Architecture', path: '/services/enterprise-architecture' },
      ],
    },
    {
      name: 'Case Studies',
      path: '/case-studies',
      children: [
        { name: 'Confidential Computing', path: '/case-studies/confidential-computing' },
        { name: 'Quantum Computing', path: '/case-studies/quantum-computing' },
        { name: 'TOGAF Enterprise Architecture', path: '/case-studies/togaf-enterprise-architecture' },
      ],
    },
    { name: 'Blog', path: '/blog' },
    {
      name: 'FAQs',
      path: '/faq',
      children: [
        { name: 'Why AccelCQ for Memory Encryption?', path: '/faq/memory-encryption' },
        { name: 'Why AccelCQ for Trusted Execution Environments?', path: '/faq/trusted-execution-environments' },
        { name: 'Why AccelCQ for Quantum Algorithm Development?', path: '/faq/quantum-algorithms' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-50 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
        <div className={`rounded-lg p-2 ${!isScrolled ? 'bg-primary-50/30' : ''}`}>
          <img 
            src="/accelcq-logo.png" 
            alt="AccelCQ LLC" 
            className="h-10 w-auto"
          />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => 
            item.children ? (
              <div key={index} className="relative group">
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center font-medium transition-colors duration-300 ${
                        isActive 
                          ? 'text-primary-600' 
                          : isScrolled 
                            ? 'text-gray-700 hover:text-primary-600' 
                            : 'text-white hover:text-primary-300'
                      }`
                    }
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </NavLink>
                ) : (
                  <button
                    className={`flex items-center font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-primary-600' 
                        : 'text-white hover:text-primary-300'
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                )}
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-50 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  <div className="py-1">
                    {item.children.map((child, childIndex) => (
                      'children' in child && child.children ? (
                        <div key={childIndex} className="relative group/nested">
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              `flex items-center justify-between px-4 py-2 text-sm ${
                                isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                              }`
                            }
                          >
                            {child.name}
                            <ChevronDown size={14} className="rotate-[-90deg]" />
                          </NavLink>
                          <div className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-gray-50 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                            <div className="py-1">
                              {child.children.map((nestedChild: any, nestedIndex: number) => (
                                <NavLink
                                  key={nestedIndex}
                                  to={nestedChild.path}
                                  className={({ isActive }) =>
                                    `block px-4 py-2 text-sm ${
                                      isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'
                                    }`
                                  }
                                >
                                  {nestedChild.name}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
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
                      )
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-primary-600' 
                      : isScrolled 
                        ? 'text-gray-700 hover:text-primary-600' 
                        : 'text-white hover:text-primary-300'
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
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 shadow-xl absolute top-full left-0 right-0 animate-fade-in-down">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => 
              item.children ? (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    {item.path ? (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `font-medium py-2 ${
                            isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <span className="font-medium py-2 text-gray-700">
                        {item.name}
                      </span>
                    )}
                    <button 
                      className="flex items-center text-gray-700 hover:text-primary-600 py-2 px-2"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  </div>
                  {openDropdown === item.name && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                      {item.children.map((child, childIndex) => (
                        'children' in child && child.children ? (
                          <div key={childIndex}>
                            <div className="flex items-center justify-between">
                              <NavLink
                                to={child.path}
                                className={({ isActive }) =>
                                  `block py-2 ${
                                    isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                                  }`
                                }
                              >
                                {child.name}
                              </NavLink>
                              <button 
                                className="flex items-center text-gray-600 hover:text-primary-600 py-2 px-2"
                                onClick={() => toggleDropdown(`${item.name}-${child.name}`)}
                              >
                                <ChevronDown 
                                  size={14} 
                                  className={`transition-transform ${openDropdown === `${item.name}-${child.name}` ? 'rotate-180' : ''}`} 
                                />
                              </button>
                            </div>
                            {openDropdown === `${item.name}-${child.name}` && (
                              <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                                {child.children.map((nestedChild: any, nestedIndex: number) => (
                                  <NavLink
                                    key={nestedIndex}
                                    to={nestedChild.path}
                                    className={({ isActive }) =>
                                      `block py-2 ${
                                        isActive ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'
                                      }`
                                    }
                                  >
                                    {nestedChild.name}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
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
                        )
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