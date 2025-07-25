import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Cloud, Server, Settings, Users, Headphones, CheckCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const TEEAsAService = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Services offered
  const services = [
    {
      icon: <Settings size={24} />,
      title: 'Consulting & Architecture',
      description: 'Strategic guidance and architectural design for optimal TEE implementation tailored to your specific requirements.'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud TEE Deployment',
      description: 'Seamless deployment of TEE solutions on major cloud platforms including AWS, Azure, and Google Cloud.'
    },
    {
      icon: <Server size={24} />,
      title: 'On-Premises & Hybrid Enablement',
      description: 'Implementation of TEE solutions in on-premises and hybrid environments for maximum control and flexibility.'
    },
    {
      icon: <Users size={24} />,
      title: 'End-to-End Lifecycle Management',
      description: 'Complete lifecycle management from initial deployment through ongoing maintenance and optimization.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Integration & DevSecOps',
      description: 'Seamless integration with existing systems and DevSecOps practices for continuous security.'
    },
    {
      icon: <Headphones size={24} />,
      title: 'Continuous Support & Incident Response',
      description: 'Round-the-clock support and rapid incident response to ensure maximum uptime and security.'
    }
  ];

  // Use case spotlights
  const useCases = [
    {
      title: 'Healthcare: Secure Medical Data Analytics',
      description: 'A major hospital system must analyze patient records for research while meeting HIPAA compliance. AccelCQ deploys TEEs in Azure Confidential VMs, enabling privacy-preserving analytics—ensuring sensitive data never leaves the secure enclave, even in the cloud.',
      image: '/image.png'
    },
    {
      title: 'Finance: Confidential Multi-Party Computation',
      description: 'Banks need to collaboratively detect fraud trends without revealing individual client data. Using AccelCQ\'s TEE-as-a-Service, banks run joint machine learning models in AWS Nitro Enclaves—securing data confidentiality and meeting strict regulatory standards.',
      image: '/2. Finance Confidential Multi-Party Computation.png'
    },
    {
      title: 'Biotech: Protecting Intellectual Property',
      description: 'A biotech startup develops proprietary drug discovery algorithms. With AccelCQ, their code and sensitive research data are run inside Google Confidential VMs, protected from both external and internal threats, and ensuring IP security during global cloud collaborations.',
      image: '/3. Biotech Protecting Intellectual Property.png'
    },
    {
      title: 'Government: In-House Data Residency & Ultra-Secure Processing',
      description: 'A government agency with national security requirements cannot use public cloud. AccelCQ architects and manages TEEs on-premises using Intel SGX, delivering maximum data residency control and security—even at higher complexity and cost.',
      image: '/4. Government In-House Data Residency & Ultra-Secure Processing.png'
    }
  ];

  // Why choose AccelCQ
  const whyChooseUs = [
    'Cross-Platform Expertise across Intel SGX, AMD SEV, and ARM TrustZone',
    'Accelerated Deployment with proven methodologies and frameworks',
    'Ongoing Management including monitoring, maintenance, and optimization',
    'Cost Efficiency through optimized resource utilization and management',
    'End-to-End Assurance with comprehensive security validation and compliance'
  ];

  // Cloud vs On-Premises comparison
  const comparisonData = [
    {
      characteristic: 'National Security',
      cloud: 'Not suitable',
      onPrem: 'Suitable',
      cloudColor: 'text-red-600',
      onPremColor: 'text-green-600'
    },
    {
      characteristic: 'Data Residency Control',
      cloud: 'Limited',
      onPrem: 'Maximum',
      cloudColor: 'text-yellow-600',
      onPremColor: 'text-green-600'
    },
    {
      characteristic: 'Security',
      cloud: 'Standard',
      onPrem: 'Enhanced',
      cloudColor: 'text-blue-600',
      onPremColor: 'text-green-600'
    },
    {
      characteristic: 'Complexity',
      cloud: 'Lower',
      onPrem: 'Higher',
      cloudColor: 'text-green-600',
      onPremColor: 'text-yellow-600'
    },
    {
      characteristic: 'Cost',
      cloud: 'Lower',
      onPrem: 'Higher',
      cloudColor: 'text-green-600',
      onPremColor: 'text-yellow-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>TEE-as-a-Service | AccelCQ Inc</title>
        <meta name="description" content="Protect your most sensitive applications and data with AccelCQ's industry-leading TEE solutions—built for the cloud, optimized for compliance, and managed for your peace of mind." />
      </Helmet>

      <PageHeader 
        title="Trusted Execution Environment (TEE) as a Service"
        subtitle="Protect your most sensitive applications and data with industry-leading TEE solutions—built for the cloud, optimized for compliance, and managed for your peace of mind"
        backgroundImage="https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* What is TEE Section */}
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
              <span className="text-primary-600 font-semibold mb-2 block">Secure Execution Environment</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is a Trusted Execution Environment (TEE)?
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                A Trusted Execution Environment (TEE) is a secure, isolated area within a processor that guarantees confidentiality and integrity for applications and data—even in untrusted environments.
              </p>
              <p className="text-gray-600 mb-4">
                With TEEs, your workloads are protected from unauthorized access, including from cloud providers, insiders, and advanced attackers. This hardware-based security ensures that your most sensitive data remains protected throughout its entire lifecycle.
              </p>
              <p className="text-gray-600 mb-6">
                At AccelCQ, we provide comprehensive TEE-as-a-Service solutions that enable organizations to harness the power of trusted execution environments without the complexity of implementation and management.
              </p>
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
                src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Trusted Execution Environment" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="How It Works"
            subtitle="Understanding how TEEs secure your application data"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Submission</h3>
              <p className="text-gray-600">User/application submits sensitive data for processing</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center relative"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Processing</h3>
              <p className="text-gray-600">Data enters the TEE (Enclave) where it's protected by hardware-based isolation</p>
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-gray-400 hidden lg:block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center relative"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Results</h3>
              <p className="text-gray-600">Only authorized, encrypted results leave the enclave—sensitive data never exposed</p>
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-gray-400 hidden lg:block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 bg-white border border-gray-200 rounded-lg p-6"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">TEE Security Boundary</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <div className="inline-block bg-red-50 border-2 border-red-200 rounded-lg px-4 py-2 mb-2">
                  <span className="text-red-700 font-medium">Untrusted Environment</span>
                </div>
                <p className="text-sm text-gray-600">Operating System, Cloud Provider, Malicious Actors</p>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="inline-block bg-green-50 border-2 border-green-200 rounded-lg px-4 py-2 mb-2">
                  <span className="text-green-700 font-medium">Trusted Execution Environment</span>
                </div>
                <p className="text-sm text-gray-600">Hardware-isolated, encrypted processing of sensitive data</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="AccelCQ TEE-as-a-Service: What We Offer"
            subtitle="Comprehensive TEE solutions tailored to your organization's needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Spotlights Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Use Case Spotlights"
            subtitle="See how AccelCQ's TEE-as-a-Service transforms security across industries"
          />
          
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{useCase.description}</p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title} 
                      className="w-full h-auto" 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud vs On-Premises Comparison */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Should You Use Cloud TEEs or Build In-House?"
            subtitle="Understanding the trade-offs between cloud and on-premises TEE implementations"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-blue-600 mb-4">
                <Cloud size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud TEEs</h3>
              <p className="text-gray-600">Best for scalability, speed, and lower cost.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-green-600 mb-4">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">In-House TEEs</h3>
              <p className="text-gray-600">Best for ultra-sensitive, regulated workloads needing total data control.</p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Characteristic</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Public Cloud</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">On-Prem TEE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.characteristic}</td>
                      <td className={`px-6 py-4 text-sm text-center font-medium ${row.cloudColor}`}>{row.cloud}</td>
                      <td className={`px-6 py-4 text-sm text-center font-medium ${row.onPremColor}`}>{row.onPrem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose AccelCQ Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Why Choose AccelCQ" 
                className="w-full h-auto" 
              />
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose AccelCQ for TEE?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy, Secure, and Scale with Confidence?</h2>
            <p className="text-gray-100 max-w-3xl mx-auto mb-8 text-lg">
              Contact AccelCQ today to discover how our TEE-as-a-Service can protect your data and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/contact" 
                className="btn bg-white text-primary-600 hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk Security
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn border border-white text-white hover:bg-white hover:text-primary-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Solution Brief
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TEEAsAService; 