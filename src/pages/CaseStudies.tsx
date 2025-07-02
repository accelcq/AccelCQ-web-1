import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const CaseStudies = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const caseStudies = [
    {
      title: 'Confidential Computing',
      description: 'Explore our sentiment analysis demo showcasing secure data processing in untrusted environments while maintaining privacy and compliance.',
      demo: 'Sentiment Analysis',
      icon: <Shield size={32} />,
      link: '/case-studies/confidential-computing',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Quantum Computing',
      description: 'Discover the power of quantum algorithms through our live QuantumStock AI demo, demonstrating 94.7% accuracy in financial forecasting.',
      demo: 'QuantumStock AI Live Demo',
      icon: <Cpu size={32} />,
      link: '/case-studies/quantum-computing',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-purple-50 border-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'TOGAF Enterprise Architecture',
      description: 'Experience our CDFI Bank Exchange demo showcasing enterprise-grade architecture patterns and best practices in action.',
      demo: 'CDFI Bank Exchange',
      icon: <Building size={32} />,
      link: '/case-studies/togaf-enterprise-architecture',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-green-50 border-green-100',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | AccelCQ Inc</title>
        <meta name="description" content="Explore AccelCQ's case studies demonstrating real-world applications of confidential computing, quantum computing, and enterprise architecture." />
      </Helmet>

      <PageHeader 
        title="Case Studies"
        subtitle="Real-world demonstrations of our cutting-edge technologies and solutions in action"
        backgroundImage="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Overview Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Interactive Technology Demonstrations"
            subtitle="Explore our MVP demos showcasing the practical applications of advanced computing technologies"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                className="group"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
                        Demo: {study.demo}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 ${study.color}`}>
                      <div className={study.iconColor}>
                        {study.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    
                    <Link 
                      to={study.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Explore Case Study
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Case Studies Matter Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Case Studies Matter
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Our case studies provide hands-on demonstrations of how advanced computing technologies solve real-world challenges across different industries and use cases.
              </p>
              <p className="text-gray-600 mb-6">
                Each demo is designed to showcase the practical benefits and implementation approaches of our solutions, helping you understand the potential impact on your organization.
              </p>
              
              <div className="space-y-4">
                {[
                  'Interactive demonstrations of core technologies',
                  'Real-world problem-solving approaches',
                  'Measurable performance improvements',
                  'Implementation best practices and patterns'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Technology Demonstration" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-800 to-secondary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Implement These Solutions?
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto mb-8 text-lg">
              Contact our team to discuss how these technologies can be customized and implemented for your specific use cases and requirements.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
              Schedule a Consultation <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies; 