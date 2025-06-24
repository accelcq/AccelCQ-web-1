import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | AccelCQ Inc</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/" className="btn btn-primary">
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn btn-secondary"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;