import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, PieChart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <PieChart size={28} className="text-primary-400" />
              <span className="text-xl font-bold">AccelCQ Inc</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Cutting-edge software services company specializing in confidential computing and quantum computing solutions.
            </p>
            <address className="not-italic text-gray-400">
              <div className="flex items-start space-x-2 mb-2">
                <MapPin size={18} className="text-gray-500 mt-1 flex-shrink-0" />
                <span>308 de Leon Ave, Fremont, CA 94539, USA</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Phone size={18} className="text-gray-500" />
                <a href="tel:+15105551234" className="hover:text-primary-400 transition-colors">
                  +1 (510) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-500" />
                <a href="mailto:info@accelcq.com" className="hover:text-primary-400 transition-colors">
                  info@accelcq.com
                </a>
              </div>
            </address>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/confidential-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Confidential Computing
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/confidential-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Secure Enclaves
                </Link>
              </li>
              <li>
                <Link to="/services/confidential-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy-Preserving Computation
                </Link>
              </li>
              <li>
                <Link to="/services/confidential-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Trusted Execution Environments
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Quantum Algorithm Development
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Quantum Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Post-Quantum Cryptography
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on confidential and quantum computing.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AccelCQ Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;