import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Users, Layers, Code, CheckCircle, Target, Zap, BookOpen, ArrowRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const EnterpriseArchitecture = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Technologies list
  const technologies = [
    {
      icon: <BookOpen size={24} />,
      title: 'TOGAF 10',
      description: 'Implementation of The Open Group Architecture Framework 10 for comprehensive enterprise architecture development and governance.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Sparx Enterprise Architect',
      description: 'Advanced modeling and design using Sparx EA for visual architecture documentation, analysis, and stakeholder communication.'
    },
    {
      icon: <Code size={24} />,
      title: 'Scripting for EA',
      description: 'Custom automation scripts and tools to streamline architecture processes, model generation, and documentation workflows.'
    },
    {
      icon: <Target size={24} />,
      title: 'Architecture Governance',
      description: 'Establishing governance frameworks, standards, and processes to ensure architectural compliance and alignment with business objectives.'
    }
  ];

  // TOGAF capabilities
  const togafCapabilities = [
    {
      title: 'Architecture Development Method (ADM)',
      description: 'Complete ADM cycle implementation from Preliminary Phase through Implementation Governance',
      features: [
        'Preliminary Phase: Framework Setup', 
        'Phase A: Architecture Vision', 
        'Phase B: Business Architecture', 
        'Phase C: Information Systems Architecture', 
        'Phase D: Technology Architecture',
        'Phase E: Opportunities and Solutions',
        'Phase F: Migration Planning',
        'Phase G: Implementation Governance',
        'Phase H: Architecture Change Management'
      ]
    },
    {
      title: 'Architecture Content Framework',
      description: 'Comprehensive architecture artifacts and deliverables following TOGAF standards',
      features: ['Architecture Building Blocks', 'Solution Building Blocks', 'Architecture Artifacts', 'Architecture Deliverables']
    },
    {
      title: 'Enterprise Continuum',
      description: 'Leveraging architecture patterns and reference models for accelerated development',
      features: ['Foundation Architectures', 'Common Systems Architectures', 'Industry Architectures', 'Organization-Specific Architectures']
    }
  ];

  // Use cases
  const useCases = [
    {
      title: 'Digital Transformation',
      description: 'Guide organizations through comprehensive digital transformation initiatives with structured architecture planning and implementation.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'IT Modernization',
      description: 'Modernize legacy systems and infrastructure through strategic architecture planning and phased migration approaches.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Merger & Acquisition Integration',
      description: 'Facilitate seamless integration of enterprise architectures during M&A activities with minimal business disruption.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  // Benefits
  const benefits = [
    'Reduce IT complexity and operational costs through standardized architecture',
    'Improve business-IT alignment with clear architecture governance',
    'Accelerate decision-making through visual architecture models',
    'Enhance risk management with comprehensive architecture analysis',
    'Enable faster time-to-market for new initiatives and products',
    'Establish reusable architecture patterns and components'
  ];

  // Sparx EA Features
  const sparxFeatures = [
    {
      category: 'Modeling Capabilities',
      features: ['UML 2.5 Support', 'BPMN 2.0', 'ArchiMate 3.1', 'SysML', 'Custom Profiles']
    },
    {
      category: 'Enterprise Features', 
      features: ['Team Collaboration', 'Version Control', 'Security & Access Control', 'Cloud Repository', 'API Integration']
    },
    {
      category: 'Analysis & Simulation',
      features: ['Impact Analysis', 'Traceability Matrix', 'Gap Analysis', 'Simulation & Testing', 'Metrics & Dashboards']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Architecture | AccelCQ Inc</title>
        <meta name="description" content="AccelCQ's enterprise architecture solutions help organizations design, plan, and implement comprehensive architectural frameworks using TOGAF 10, Sparx EA, and custom automation." />
      </Helmet>

      <PageHeader 
        title="Enterprise Architecture"
        subtitle="Design and implement comprehensive enterprise architectures that align IT capabilities with business objectives"
        backgroundImage="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <span className="text-primary-600 font-semibold mb-2 block">Strategic Architecture Planning</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Business Through Architecture
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Enterprise Architecture is the practice of analyzing, designing, planning, and implementing enterprise analysis 
                to successfully execute on business strategies. It provides a holistic view of the enterprise's information, 
                technology, and business processes.
              </p>
              <p className="text-gray-600 mb-4">
                Our enterprise architecture services help organizations create comprehensive architectural blueprints that 
                guide technology decisions, optimize business processes, and ensure alignment between IT investments and 
                business objectives.
              </p>
              <p className="text-gray-600 mb-6">
                Using industry-standard frameworks like TOGAF 10 and advanced modeling tools like Sparx Enterprise Architect, 
                we deliver architecture solutions that drive measurable business value.
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
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Enterprise Architecture Planning" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Enterprise Architecture Services"
            subtitle="Leveraging industry-leading frameworks and tools for comprehensive architecture development"
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

      {/* TOGAF 10 Capabilities */}
      <section id="togaf-10" className="section">
        <div className="container-custom">
          <SectionHeading
            title="About TOGAF 10"
            subtitle="Complete enterprise architecture development using The Open Group Architecture Framework"
          />
          
          <div className="text-center mb-8">
            <Link 
              to="/blog/togaf-adm-enterprise-architecture" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Learn more <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {togafCapabilities.map((capability, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-700">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sparx EA Features */}
      <section id="sparx-ea" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Sparx Enterprise Architect Expertise"
            subtitle="Advanced modeling and visualization capabilities for comprehensive architecture documentation"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sparxFeatures.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-700">{category.category}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripting for Sparx EA Section */}
      <section id="scripting-for-ea" className="section">
        <div className="container-custom">
          <SectionHeading
            title="Scripting for Sparx EA"
            subtitle="Custom automation and scripting solutions to enhance your Enterprise Architect workflows"
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white border border-gray-200 rounded-lg p-8 shadow-md"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                AccelCQ offers comprehensive scripting solutions for Sparx Systems Enterprise Architect (EA), enabling organizations to fully automate and customize their enterprise architecture processes. Our team specializes in developing VBScripts and custom scripts to streamline the generation of architectural models, automate repetitive tasks, and seamlessly integrate EA with your existing workflows.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                Whether you require automated diagram creation, batch processing, or enhanced reporting, AccelCQ empowers you to unlock the full potential of Sparx EA—ensuring accuracy, efficiency, and scalability for all your architecture initiatives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <Code size={32} className="text-primary-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">VBScript Development</h4>
                  <p className="text-gray-600 text-sm">Custom VBScripts for EA automation and workflow enhancement</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <Zap size={32} className="text-primary-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Process Automation</h4>
                  <p className="text-gray-600 text-sm">Automated diagram generation and batch processing capabilities</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <Layers size={32} className="text-primary-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Integration Solutions</h4>
                  <p className="text-gray-600 text-sm">Seamless integration with existing workflows and systems</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Architecture Development Methodology"
            subtitle="A proven approach to enterprise architecture implementation"
            alignment="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Current State Assessment',
                description: 'Comprehensive analysis of existing business processes, applications, data, and technology infrastructure.'
              },
              {
                number: '02',
                title: 'Future State Design',
                description: 'Define target architecture aligned with business strategy, including detailed blueprints and roadmaps.'
              },
              {
                number: '03',
                title: 'Gap Analysis & Planning',
                description: 'Identify gaps between current and future states, develop detailed implementation plans and priorities.'
              },
              {
                number: '04',
                title: 'Implementation & Governance',
                description: 'Execute transformation initiatives with ongoing governance, monitoring, and architecture compliance.'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative border border-gray-200 rounded-lg p-6"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="text-5xl font-bold text-gray-100 absolute right-4 top-2">{step.number}</span>
                <h3 className="text-lg font-semibold mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 relative z-10 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Enterprise Architecture Use Cases"
            subtitle="How our architecture solutions transform organizations across industries"
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Enterprise Architecture Benefits" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Architecture Benefits</h2>
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

      {/* Case Study CTA */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <motion.div 
            className="text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-800">
              Financial Exchange Platform Case Study
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg">
              Explore our comprehensive case study showcasing the implementation of a TOGAF-based enterprise architecture 
              for a high-performance financial exchange platform, demonstrating real-world architecture patterns and best practices.
            </p>
            <a 
              href="/case-studies/togaf-enterprise-architecture" 
              className="btn btn-primary inline-flex items-center"
            >
              View Case Study
              <Zap size={18} className="ml-2" />
            </a>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Enterprise Architecture?</h2>
            <p className="text-gray-100 max-w-3xl mx-auto mb-8 text-lg">
              Contact us today to discuss how our enterprise architecture expertise can align your IT capabilities with business objectives.
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

export default EnterpriseArchitecture; 