import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cpu, Play, ExternalLink, TrendingUp, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const CaseStudyQuantumComputing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Cpu size={24} />,
      title: 'Quantum Algorithms',
      description: 'Advanced quantum algorithms for time series analysis and pattern recognition'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Predictive Modeling',
      description: 'Superior prediction accuracy using quantum machine learning techniques'
    },
    {
      icon: <Zap size={24} />,
      title: 'Quantum Advantage',
      description: 'Exponential speedup for complex financial modeling and optimization'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Real-time Processing',
      description: 'Process vast amounts of market data in real-time for instant predictions'
    }
  ];

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
              <div className="inline-flex items-center bg-purple-50 text-purple-600 px-4 py-2 rounded-full mb-6">
                <Cpu size={20} className="mr-2" />
                <span className="font-medium">Live Quantum Demo</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quantum Stock Price Prediction
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Experience the power of quantum machine learning in financial forecasting. Our demo leverages quantum algorithms to analyze market patterns, trading volumes, and historical data to predict stock prices with unprecedented accuracy.
              </p>
              
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-purple-900 mb-2">Demo Capabilities</h3>
                <ul className="space-y-2 text-purple-800">
                  <li>• Multi-dimensional quantum feature encoding</li>
                  <li>• Quantum variational circuits for pattern recognition</li>
                  <li>• Real-time market data integration</li>
                  <li>• Confidence intervals and risk assessment</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">
                  <Play className="mr-2" size={18} />
                  Launch Quantum Demo
                </button>
                <Link 
                  to="/contact?subject=Quantum Computing&template=quantum-computing#contact-form" 
                  className="btn btn-secondary"
                >
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

      {/* Quantum Advantage */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="The Quantum Advantage"
            subtitle="Understanding how quantum computing transforms financial prediction"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Classical Computing</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Processing Speed</span>
                  <span className="font-medium">Linear</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Complexity</span>
                  <span className="font-medium">Limited</span>
                </div>
                <div className="flex justify-between">
                  <span>Pattern Recognition</span>
                  <span className="font-medium">Standard</span>
                </div>
                <div className="flex justify-between">
                  <span>Accuracy</span>
                  <span className="font-medium">~78%</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-purple-600 text-white p-6 rounded-lg shadow-md relative overflow-hidden"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <h3 className="text-xl font-semibold mb-4 relative z-10">Quantum Computing</h3>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between">
                  <span>Processing Speed</span>
                  <span className="font-medium">Exponential</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Complexity</span>
                  <span className="font-medium">Multi-dimensional</span>
                </div>
                <div className="flex justify-between">
                  <span>Pattern Recognition</span>
                  <span className="font-medium">Quantum Enhanced</span>
                </div>
                <div className="flex justify-between">
                  <span>Accuracy</span>
                  <span className="font-medium">~91%</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Performance Gains</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Speed Improvement</span>
                  <span className="font-medium text-green-600">100x faster</span>
                </div>
                <div className="flex justify-between">
                  <span>Accuracy Boost</span>
                  <span className="font-medium text-green-600">+13%</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk Reduction</span>
                  <span className="font-medium text-green-600">-35%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI Increase</span>
                  <span className="font-medium text-green-600">+45%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Quantum Features"
            subtitle="Advanced quantum computing capabilities for financial prediction"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-purple-100"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Financial Applications"
            subtitle="Real-world applications of quantum computing in finance"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Portfolio Optimization',
                description: 'Optimize investment portfolios using quantum algorithms to maximize returns while minimizing risk.',
                icon: '📊'
              },
              {
                title: 'Risk Analysis',
                description: 'Advanced risk modeling using quantum Monte Carlo methods for complex financial instruments.',
                icon: '⚡'
              },
              {
                title: 'Fraud Detection',
                description: 'Real-time fraud detection using quantum pattern recognition and anomaly detection.',
                icon: '🛡️'
              },
              {
                title: 'Algorithmic Trading',
                description: 'High-frequency trading strategies powered by quantum machine learning algorithms.',
                icon: '🚀'
              },
              {
                title: 'Credit Scoring',
                description: 'Enhanced credit risk assessment using quantum-enhanced feature analysis.',
                icon: '💳'
              },
              {
                title: 'Derivatives Pricing',
                description: 'Complex derivatives pricing using quantum simulation and optimization techniques.',
                icon: '💹'
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
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
              Experience the revolutionary power of quantum computing in financial modeling. See how our quantum algorithms can transform your prediction accuracy and trading strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn bg-white text-purple-600 hover:bg-gray-100">
                <ExternalLink className="mr-2" size={18} />
                Try Quantum Demo
              </button>
              <Link 
                to="/contact?subject=Quantum Computing&template=quantum-computing#contact-form" 
                className="btn bg-purple-500 text-white hover:bg-purple-400"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyQuantumComputing; 