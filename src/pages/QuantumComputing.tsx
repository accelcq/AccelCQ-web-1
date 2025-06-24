import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Zap, BarChart, CheckCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const QuantumComputing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Technologies list
  const technologies = [
    {
      icon: <Cpu size={24} />,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithm development for optimization, machine learning, and simulation applications.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Quantum Machine Learning',
      description: 'Advanced machine learning techniques leveraging quantum computing for enhanced pattern recognition and data analysis.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Quantum Simulation',
      description: 'Simulation of complex quantum systems for materials science, chemistry, and drug discovery.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Quantum-Ready Applications',
      description: 'Developing applications that can seamlessly transition to quantum hardware as it becomes more widely available.'
    }
  ];

  // Use cases
  const useCases = [
    {
      title: 'Healthcare & Drug Discovery',
      description: 'Accelerate drug discovery through molecular simulation, optimize protein folding for disease research, and enhance medical imaging analysis.',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Financial Services',
      description: 'Transform portfolio optimization, risk analysis, and fraud detection using quantum algorithms for complex financial modeling.',
      image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Chemistry & Materials',
      description: 'Revolutionize materials science and chemical synthesis through accurate quantum simulation of molecular interactions.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  // Benefits
  const benefits = [
    'Accelerate drug discovery and development processes',
    'Enable precise molecular and material simulations',
    'Optimize complex financial portfolios and risk analysis',
    'Enhance machine learning and AI capabilities',
    'Solve previously intractable computational problems',
    'Secure communications through quantum cryptography'
  ];

  // Quantum Computing Platforms Comparison
  const platforms = [
    {
      name: 'IBM Qiskit',
      qubits: '127 qubits (Eagle processor)',
      access: 'Cloud-based',
      pricing: 'Free tier available, Pay-per-use for premium',
      features: 'Circuit composition, Full-stack framework, Extensive documentation',
      bestFor: 'Research, Education, Enterprise applications'
    },
    {
      name: 'Google Cirq',
      qubits: '72 qubits (Bristlecone)',
      access: 'Cloud-based',
      pricing: 'Contact for pricing',
      features: 'Low-level circuit control, Quantum supremacy experiments',
      bestFor: 'Advanced quantum research, Hardware optimization'
    },
    {
      name: 'Microsoft Azure Quantum',
      qubits: 'Various (Multiple providers)',
      access: 'Cloud-based',
      pricing: 'Pay-as-you-go',
      features: 'Q# language, Multiple hardware providers, Full development kit',
      bestFor: 'Enterprise integration, Hybrid quantum-classical computing'
    },
    {
      name: 'D-Wave',
      qubits: '5000+ qubits (Advantage system)',
      access: 'Cloud and on-premises',
      pricing: 'Subscription-based',
      features: 'Quantum annealing, Hybrid solvers',
      bestFor: 'Optimization problems, Machine learning'
    },
    {
      name: 'PennyLane',
      qubits: 'Hardware-agnostic',
      access: 'Cloud-based',
      pricing: 'Open-source, Pay for hardware access',
      features: 'Quantum ML focus, Multiple backend support',
      bestFor: 'Quantum machine learning, Algorithm development'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing | AccelCQ Inc</title>
        <meta name="description" content="AccelCQ's quantum computing solutions help organizations harness the power of quantum algorithms to solve complex computational problems." />
      </Helmet>

      <PageHeader 
        title="Quantum Computing"
        subtitle="Harness the power of quantum mechanics to solve complex computational problems beyond classical capabilities"
        backgroundImage="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Overview Section */}
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
              <span className="text-primary-600 font-semibold mb-2 block">Revolutionary Computing</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Quantum Advantage
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Quantum computing represents a paradigm shift in computational capabilities, leveraging quantum mechanical phenomena like superposition and entanglement to solve problems that are intractable for classical computers.
              </p>
              <p className="text-gray-600 mb-4">
                From drug discovery to financial modeling, quantum computing is poised to revolutionize how we approach complex computational challenges across industries.
              </p>
              <p className="text-gray-600 mb-6">
                At AccelCQ, we help organizations harness quantum computing's potential through tailored solutions and expertise in quantum algorithm development.
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
                src="https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Quantum Computing Visualization" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Applications Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Key Quantum Computing Applications"
            subtitle="Transforming industries through revolutionary computational capabilities"
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
              <h3 className="text-xl font-semibold mb-4">Drug Discovery & Healthcare</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Molecular simulation for drug development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Protein folding analysis for disease research</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Optimization of clinical trials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Personalized medicine development</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Portfolio optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Risk analysis and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Fraud detection and prevention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>High-frequency trading optimization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Chemistry & Physics</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Molecular dynamics simulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>New materials discovery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Quantum system simulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Energy level calculation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Computing Platforms */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Quantum Computing Platforms"
            subtitle="Compare leading quantum computing platforms and their capabilities"
          />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qubits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Features</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {platforms.map((platform, index) => (
                  <motion.tr 
                    key={index}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{platform.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{platform.qubits}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{platform.access}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{platform.pricing}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{platform.features}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{platform.bestFor}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Quantum Computing Technologies"
            subtitle="Cutting-edge quantum solutions for today's most challenging problems"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-primary-600 mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Industry Applications"
            subtitle="How our quantum computing solutions are transforming various sectors"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
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
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Quantum Computing Benefits" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Quantum Solutions?</h2>
            <p className="text-gray-100 max-w-3xl mx-auto mb-8 text-lg">
              Contact us today to discuss how our quantum computing expertise can transform your organization's capabilities.
            </p>
            <a href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default QuantumComputing;