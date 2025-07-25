import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: 'Confidential Computing',
      description: 'Protect your most sensitive data during processing with hardware-based isolation and encryption. Secure computation in untrusted environments.',
      specialization: 'Data Protection during processing',
      icon: <Shield size={32} />,
      link: '/services/confidential-computing',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Quantum Computing',
      description: 'Harness quantum mechanics to solve complex computational problems beyond classical capabilities. Custom quantum algorithm development.',
      specialization: 'Advanced Fastest Computation',
      icon: <Cpu size={32} />,
      link: '/services/quantum-computing',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-purple-50 border-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Enterprise Architecture',
      description: 'Design and implement comprehensive enterprise architectures using TOGAF 10, Sparx EA, and custom automation scripts.',
      specialization: 'TOGAF Enterprise Architecture',
      icon: <Building size={32} />,
      link: '/services/enterprise-architecture',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-green-50 border-green-100',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | AccelCQ Inc</title>
        <meta name="description" content="Explore AccelCQ's comprehensive services including confidential computing, quantum computing, and enterprise architecture solutions." />
      </Helmet>

      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive solutions for secure computing, quantum technologies, and enterprise architecture"
        backgroundImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Overview Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Cutting-Edge Technology Solutions"
            subtitle="From confidential computing to quantum algorithms, we deliver innovative solutions that transform how enterprises handle their most critical workloads"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="group"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
                        {service.specialization}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 ${service.color}`}>
                      <div className={service.iconColor}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-primary-600 font-medium"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AccelCQ Section */}
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
                Why Choose AccelCQ
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                AccelCQ combines deep technical expertise with proven implementation experience to deliver secure, high-performance computing solutions that drive real business value.
              </p>
              <p className="text-gray-600 mb-6">
                Our comprehensive approach ensures that every solution is tailored to your specific requirements, from initial consultation through deployment and ongoing support.
              </p>
              
              <div className="space-y-4">
                {[
                  'Industry-leading expertise in confidential and quantum computing',
                  'End-to-end implementation and support services',
                  'Proven track record with enterprise clients',
                  'Custom solutions designed for your specific needs',
                  'Ongoing optimization and performance monitoring',
                  'Compliance with industry standards and regulations'
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
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AccelCQ Team Collaboration" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Service Areas & Expertise"
            subtitle="Comprehensive coverage across critical technology domains"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Security & Privacy',
                items: ['Hardware-based Security', 'Data Encryption', 'Privacy-Preserving Analytics', 'Compliance & Governance']
              },
              {
                title: 'Quantum Technologies',
                items: ['Algorithm Development', 'Quantum ML', 'Optimization', 'Simulation & Modeling']
              },
              {
                title: 'Enterprise Architecture',
                items: ['TOGAF Implementation', 'Digital Transformation', 'System Integration', 'Governance Frameworks']
              },
              {
                title: 'Cloud & Infrastructure',
                items: ['Trusted Execution', 'Secure Containers', 'Multi-Cloud Deployment', 'Performance Optimization']
              }
            ].map((area, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary-700">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto mb-8 text-lg">
              Contact our team to discuss how our comprehensive services can address your specific challenges and accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
                Schedule a Consultation <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/case-studies" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-800">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services; 