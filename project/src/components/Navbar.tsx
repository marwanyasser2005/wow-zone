import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const links = [
    { id: 'home', title: 'Home', path: '/' },
     { 
      id: 'wow-creations',
      title: 'WOW Creations', 
      path: '/home/project/src/pages/Creations.tsx', 
      dropdown: true,
      subLinks: [
        { id: 'studio', title: 'WOW Studio', path: '/studio' },
        { id: 'corporate-events', title: "WOW Group", path: "/corporate-events" },
        { id: 'technologies', title: 'WOW Technologies', path: '/technologies' }
      ]
    },
    { 
      id: 'wow-zone',
      title: 'WOW Zone', 
      path: '/home/project/src/pages/Creations.tsx', 
      dropdown: true,
      subLinks: [
        { id: 'entertainment', title: 'Entertainment', path: '/entertainment' },
        { id: 'creative-arts', title: 'Creative Arts', path: '/creative-arts' }
      ]
    },
   
    { 
      id: 'more',
      title: 'More', 
      path: '/more',
      dropdown: true,
      subLinks: [
        { id: 'contact', title: 'Contact', path: '/contact' },
        { id: 'about', title: 'About', path: '/about' },
        { id: 'visit', title: 'Visit Us', path: '/visit' },
        { id: 'privacy', title: 'Privacy Policy', path: '/privacy-policy' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (e: React.MouseEvent, dropdownId: string) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'} ${isOpen ? 'bg-black' : ''}`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center space-x-3" onClick={() => handleNavigation('/')}>          
          <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            WOW Immersive
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link) => (
            <div key={link.id} className="relative group">
              {link.dropdown ? (
                <>
                  <button 
                    className="flex items-center text-gray-300 hover:text-white transition-all py-2 px-3 rounded-lg hover:bg-white/10"
                    onClick={(e) => toggleDropdown(e, link.id)}
                  >
                    {link.title}
                    <ChevronDown className="ml-2 w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
                      >
                        {link.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.id}
                            to={subLink.path}
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all"
                            onClick={() => handleNavigation(subLink.path)}
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link 
                  to={link.path} 
                  className="text-gray-300 hover:text-white transition-all px-3 py-2 rounded-lg"
                  onClick={() => handleNavigation(link.path)}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {links.map((link) => (
                <div key={link.id}>
                  {link.dropdown ? (
                    <>
                      <button 
                        onClick={(e) => toggleDropdown(e, link.id)} 
                        className="w-full flex justify-between items-center py-3 text-gray-300"
                      >
                        {link.title}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.id ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 space-y-2"
                          >
                            {link.subLinks?.map((sub) => (
                              <Link
                                key={sub.id}
                                to={sub.path}
                                className="block text-gray-400 hover:text-white py-1"
                                onClick={() => handleNavigation(sub.path)}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-3 text-gray-300 hover:text-white"
                      onClick={() => handleNavigation(link.path)}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;