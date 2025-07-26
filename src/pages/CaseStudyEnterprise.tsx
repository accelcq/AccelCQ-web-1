import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Building, Play, ExternalLink, Network, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const CaseStudyEnterprise = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>TOGAF Enterprise Architecture Case Study | AccelCQ Inc</title>
        <meta name="description" content="Explore our Financial Exchange Platform demo showcasing TOGAF enterprise architecture principles and best practices in financial services." />
      </Helmet>

      <PageHeader 
        title="TOGAF Enterprise Architecture Case Study"
        subtitle="Financial Exchange Platform with Enterprise Architecture Excellence"
        backgroundImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Demo Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gray-50 text-gray-600 px-4 py-2 rounded-full mb-6">
                <Building size={20} className="mr-2" />
                <span className="font-medium">⏳ Live Demo Not Available</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Financial Exchange Platform
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Explore a comprehensive enterprise architecture implementation for financial institutions. Our demo showcases TOGAF 9.2 principles applied to create a secure, scalable, and compliant financial exchange platform.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary opacity-50 cursor-not-allowed" disabled>
                  <Play className="mr-2" size={18} />
                  Demo Coming Soon
                </button>
                <Link 
                  to="/contact?subject=TOGAF Enterprise Architecture&template=enterprise-architecture#contact-form" 
                  className="btn btn-secondary"
                >
                  Request Assessment
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 shadow-lg">
                <h4 className="font-semibold mb-4 text-center">Financial Exchange Dashboard</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-sm text-gray-500 mb-1">Daily Transactions</div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">2,847</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">+12%</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-sm text-gray-500 mb-1">Network Participants</div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">156</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">+8%</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-sm text-gray-500 mb-1">Total Volume</div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">$45.2M</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">+23%</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-sm text-gray-500 mb-1">System Uptime</div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">99.97%</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">+0.02%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-green-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise Architecture?
            </h2>
            <p className="text-green-100 max-w-3xl mx-auto mb-8 text-lg">
              Experience the power of TOGAF-based enterprise architecture with our Financial Exchange Platform demo. See how proper architecture governance can transform your organization's capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact?subject=TOGAF Enterprise Architecture&template=enterprise-architecture#contact-form" 
                className="btn bg-white text-green-600 hover:bg-gray-50"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/contact?subject=TOGAF Enterprise Architecture&template=enterprise-architecture#contact-form" 
                className="btn bg-green-500 text-white hover:bg-green-400"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyEnterprise; 