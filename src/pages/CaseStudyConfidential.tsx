import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Play, ExternalLink, CheckCircle, BarChart, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const CaseStudyConfidential = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Secure Data Processing',
      description: 'Process sensitive text data without exposing it to the processing environment'
    },
    {
      icon: <Lock size={24} />,
      title: 'Privacy Preservation',
      description: 'Maintain confidentiality while enabling advanced analytics and machine learning'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Real-time Analysis',
      description: 'Get instant sentiment scores while keeping data encrypted in memory'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements for data privacy and protection'
    }
  ];

  const technicalSpecs = [
    { label: 'Trusted Execution Environment', value: 'Intel SGX / AMD SEV' },
    { label: 'Encryption', value: 'AES-256 with Hardware Keys' },
    { label: 'Processing Time', value: '< 100ms per text sample' },
    { label: 'Accuracy', value: '94.7% sentiment classification' },
    { label: 'Data Privacy', value: 'Zero-knowledge processing' },
    { label: 'Compliance', value: 'GDPR, HIPAA, SOC 2' }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Analyze customer feedback and social media sentiment without exposing PII data'
    },
    {
      title: 'Healthcare',
      description: 'Process patient feedback while maintaining HIPAA compliance and privacy'
    },
    {
      title: 'Government',
      description: 'Analyze classified documents and communications with security clearance requirements'
    },
    {
      title: 'Enterprise',
      description: 'Monitor employee feedback and internal communications while preserving confidentiality'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Confidential Computing Case Study | AccelCQ Inc</title>
        <meta name="description" content="Explore our Sentiment Analysis demo showcasing confidential computing capabilities for secure data processing in untrusted environments." />
      </Helmet>

      <PageHeader 
        title="Confidential Computing Case Study"
        subtitle="Sentiment Analysis with Privacy-Preserving Technology"
        backgroundImage="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Shield size={20} className="mr-2" />
                <span className="font-medium">Live Demo Available</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Secure Sentiment Analysis Demo
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Experience firsthand how confidential computing enables sentiment analysis of sensitive text data while maintaining complete privacy and security. Our demo processes customer feedback, social media posts, and confidential documents without exposing the content.
              </p>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Demo Highlights</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Real-time sentiment scoring (positive, negative, neutral)</li>
                  <li>• Encrypted data processing in secure enclaves</li>
                  <li>• Zero-knowledge architecture implementation</li>
                  <li>• Performance benchmarking vs. traditional methods</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">
                  <Play className="mr-2" size={18} />
                  Launch Demo
                </button>
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
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg">
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <h4 className="font-semibold mb-3">Sample Input (Encrypted)</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                    █████████████████████████<br/>
                    ██████████ ███████ ██████<br/>
                    ████████████████████████
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-3">Sentiment Analysis Result</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Positive</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-sm">75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Neutral</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
                      </div>
                      <span className="text-sm">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Negative</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full w-1/12"></div>
                      </div>
                      <span className="text-sm">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Key Features"
            subtitle="Advanced capabilities that set our confidential computing solution apart"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              <p className="text-gray-600 mb-8">
                Our sentiment analysis solution leverages cutting-edge confidential computing technologies to ensure maximum security and performance.
              </p>
              
              <div className="space-y-4">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-900">{useCase.title}</h3>
                    <p className="text-blue-800">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Implementation Process"
            subtitle="How we deploy confidential computing solutions for your organization"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Security Assessment',
                description: 'Analyze your data flow and identify sensitive processing requirements'
              },
              {
                step: '02',
                title: 'Architecture Design',
                description: 'Design secure enclave architecture tailored to your specific use case'
              },
              {
                step: '03',
                title: 'Deployment & Testing',
                description: 'Deploy solution with comprehensive testing and performance validation'
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Data Processing?
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto mb-8 text-lg">
              Experience the power of confidential computing with our sentiment analysis demo, then let's discuss implementing this technology for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn bg-white text-blue-600 hover:bg-gray-100">
                <ExternalLink className="mr-2" size={18} />
                Try Live Demo
              </button>
              <Link to="/contact" className="btn bg-blue-500 text-white hover:bg-blue-400">
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyConfidential; 