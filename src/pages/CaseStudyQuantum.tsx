import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cpu, Play, ExternalLink, TrendingUp, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const CaseStudyQuantum = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stockData = [
    { symbol: 'AAPL', current: '$178.25', predicted: '$185.40', confidence: '92%', change: '+4.01%' },
    { symbol: 'GOOGL', current: '$141.80', predicted: '$148.25', confidence: '89%', change: '+4.55%' },
    { symbol: 'MSFT', current: '$378.85', predicted: '$372.10', confidence: '91%', change: '-1.78%' },
    { symbol: 'TSLA', current: '$248.50', predicted: '$267.30', confidence: '87%', change: '+7.57%' }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Case Study | AccelCQ Inc</title>
        <meta name="description" content="Explore our Stock Price Prediction demo showcasing quantum computing capabilities for advanced financial modeling and forecasting." />
      </Helmet>

      <PageHeader 
        title="Quantum Computing Case Study"
        subtitle="Stock Price Prediction with Quantum Machine Learning"
        backgroundImage="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <div className="inline-flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-full mb-6">
                <Cpu size={20} className="mr-2" />
                <span className="font-medium">✅ Live Demo Available</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                QuantumStock AI Live Demo
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Experience the power of quantum machine learning in financial forecasting with our live QuantumStock AI platform. Achieving 94.7% prediction accuracy with lightning-fast 0.3-second processing, our demo showcases quantum algorithms analyzing market patterns and historical data for superior stock price predictions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://quantum-demo-frontend.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Play className="mr-2" size={18} />
                  Launch Quantum Demo
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  Request Implementation
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
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 shadow-lg">
                <h4 className="font-semibold mb-4 text-center">Quantum Predictions vs Market</h4>
                
                <div className="space-y-4">
                  {stockData.map((stock, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-lg">{stock.symbol}</span>
                        <span className={`px-2 py-1 rounded text-sm font-medium ${
                          stock.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {stock.change}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">Current:</span>
                          <div className="font-semibold">{stock.current}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Predicted:</span>
                          <div className="font-semibold">{stock.predicted}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Confidence:</span>
                          <div className="font-semibold text-purple-600">{stock.confidence}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Zap className="text-purple-600 mr-2" size={16} />
                    <span className="text-sm font-medium">Quantum Circuit: 12 Qubits Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-purple-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Harness Quantum Advantage?
            </h2>
            <p className="text-purple-100 max-w-3xl mx-auto mb-8 text-lg">
              Try our live QuantumStock AI demo featuring 94.7% accuracy and 0.3-second predictions. Experience firsthand how quantum computing is revolutionizing financial forecasting and trading strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://quantum-demo-frontend.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-white text-purple-600 hover:bg-gray-100"
              >
                <ExternalLink className="mr-2" size={18} />
                Try Quantum Demo
              </a>
              <Link to="/contact" className="btn bg-purple-500 text-white hover:bg-purple-400">
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyQuantum; 