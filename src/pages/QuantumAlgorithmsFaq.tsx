import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Zap, Target, Users, Code, Shield, Clock, CheckCircle, TrendingUp, Building, Truck, Zap as Energy, FlaskConical, Layers, Database, Lock, BarChart3, Calendar, DollarSign } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const QuantumAlgorithmsFaq = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const mainFaqQuestions = [
    {
      id: "what-is-quantum-algorithm-development",
      question: "What is Quantum Algorithm Development?",
      icon: <Code size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Quantum Algorithm Development is the design, implementation, and optimization of software solutions using quantum computing. These algorithms tackle high-value problems—like optimization, simulation, and machine learning—more efficiently than classical computing in many cases.
          </p>
        </div>
      )
    },
    {
      id: "why-consider-quantum-now",
      question: "Why should my organization consider Quantum Algorithm Development now?",
      icon: <TrendingUp size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-3">
            Quantum computing is advancing rapidly, and "quantum advantage" is expected in targeted applications within the next few years. By starting now, you can:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Gain competitive edge and market differentiation.</li>
            <li>Tackle problems that are too complex for classical computers.</li>
            <li>Build internal quantum expertise and readiness for future breakthroughs.</li>
            <li>Reduce operational costs and accelerate innovation.</li>
          </ul>
        </div>
      )
    },
    {
      id: "why-accelcq-quantum",
      question: "Why AccelCQ for Quantum Algorithm Development?",
      icon: <CheckCircle size={20} />,
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Platform-Agnostic Expertise:</strong> Deep hands-on with all major quantum hardware and SDKs.</li>
            <li><strong>Industry Experience:</strong> Tailored, real-world solutions for finance, healthcare, biotech, logistics, energy, manufacturing, and research.</li>
            <li><strong>Full Lifecycle Support:</strong> From problem definition to custom quantum development, integration, training, and ongoing support.</li>
            <li><strong>Accelerated Delivery:</strong> Rapid PoC, agile project execution, and transparent ROI measurement.</li>
          </ul>
        </div>
      )
    }
  ];

  const sectorFaqQuestions = [
    {
      id: "finance-benefits",
      question: "How can Finance companies benefit from Quantum Algorithm Development?",
      icon: <Building size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-3">
            Quantum algorithms provide significant value to financial institutions by:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Optimizing large-scale portfolios with complex constraints (using QAOA, VQE).</li>
            <li>Accelerating risk modeling, fraud detection, and option pricing.</li>
            <li>Improving speed and accuracy in derivative pricing and high-frequency trading.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            AccelCQ designs algorithms using IBM Q, Google Quantum AI, and D-Wave for robust, regulatory-compliant finance solutions.
          </p>
        </div>
      )
    },
    {
      id: "healthcare-biotech",
      question: "What about Healthcare and Biotech?",
      icon: <FlaskConical size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-3">
            In healthcare and biotech, quantum algorithms accelerate:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Drug discovery through molecular and protein folding simulations (VQE, Qiskit Chemistry).</li>
            <li>Genomic data analysis and medical imaging using quantum machine learning.</li>
            <li>Secure, privacy-preserving sharing of sensitive medical data.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            AccelCQ leverages IBM Q, Azure Quantum, and Google for cutting-edge research and compliant clinical solutions.
          </p>
        </div>
      )
    },
    {
      id: "logistics-supply-chain",
      question: "What use cases exist for Logistics and Supply Chain?",
      icon: <Truck size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-3">
            Quantum optimization can:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Solve complex routing, scheduling, and network design problems (QAOA, D-Wave annealing).</li>
            <li>Optimize last-mile delivery and warehouse automation.</li>
            <li>Reduce costs, emissions, and improve resilience in supply chain operations.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            AccelCQ deploys solutions on D-Wave, Amazon Braket, and Google Quantum AI for operational impact.
          </p>
        </div>
      )
    },
    {
      id: "energy-manufacturing",
      question: "How is Energy & Manufacturing impacted?",
      icon: <Energy size={20} />,
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Quantum simulations improve new material design and battery development.</li>
            <li>Optimization of power grid operation, energy trading, and predictive maintenance.</li>
            <li>Manufacturing process optimization and advanced robotics.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            AccelCQ matches algorithms to IBM Q, Azure Quantum, and Google based on specific application needs.
          </p>
        </div>
      )
    },
    {
      id: "research-institutions",
      question: "What's the value for Research Institutions?",
      icon: <Users size={20} />,
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Simulate complex quantum systems for physics, chemistry, and material science.</li>
            <li>Accelerate machine learning for large datasets.</li>
            <li>Explore fundamental quantum algorithms, cryptography, and secure communications.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            AccelCQ provides platform-agnostic access and custom algorithm development for research groups and universities.
          </p>
        </div>
      )
    }
  ];

  const technicalFaqQuestions = [
    {
      id: "quantum-algorithms-specialty",
      question: "What quantum algorithms does AccelCQ specialize in?",
      icon: <Layers size={20} />,
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>VQE (Variational Quantum Eigensolver):</strong> Chemistry, materials, pharma.</li>
            <li><strong>QAOA (Quantum Approximate Optimization Algorithm):</strong> Logistics, scheduling, finance.</li>
            <li><strong>Quantum Annealing:</strong> Combinatorial optimization, supply chain, logistics.</li>
            <li><strong>Quantum Machine Learning:</strong> Classification, clustering, regression.</li>
            <li><strong>Shor's Algorithm, Grover's Algorithm:</strong> Cryptography, search.</li>
            <li><strong>Quantum Fourier Transform, Quantum Walks:</strong> Signal processing, network analysis.</li>
            <li><strong>Custom hybrid (quantum-classical) workflows</strong> tailored to your challenge.</li>
          </ul>
        </div>
      )
    },
    {
      id: "platform-selection",
      question: "How do you select the right quantum platform for my use case?",
      icon: <Target size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-3">
            AccelCQ conducts a use-case analysis based on:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Problem type (optimization, simulation, ML, cryptography)</li>
            <li>Required quantum algorithm and available hardware</li>
            <li>Scalability, cost, and performance benchmarks</li>
            <li>Industry compliance and integration requirements</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We then recommend IBM Q, Google Quantum AI, Azure Quantum, Amazon Braket, or D-Wave—or hybrid approaches—for optimal results.
          </p>
        </div>
      )
    },
    {
      id: "integration-workflows",
      question: "Is it possible to integrate quantum algorithms into my current workflows?",
      icon: <Database size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Yes! AccelCQ specializes in hybrid integration—linking quantum algorithms with your classical IT systems, cloud platforms, and data pipelines. We use API layers and middleware so your end users see minimal disruption but maximum benefit.
          </p>
        </div>
      )
    },
    {
      id: "internal-skills-infrastructure",
      question: "What skills or infrastructure do we need internally?",
      icon: <Users size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-3">
            You do not need in-house quantum experts or hardware. AccelCQ provides:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>All software development, integration, and user training.</li>
            <li>Guidance for long-term upskilling if you wish to build quantum capabilities internally.</li>
            <li>Access to cloud-based quantum hardware and simulators—no physical quantum computer required.</li>
          </ul>
        </div>
      )
    },
    {
      id: "security-compliance",
      question: "How secure is quantum computing, and what about compliance?",
      icon: <Lock size={20} />,
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>AccelCQ ensures data is secured with end-to-end encryption, privacy-preserving algorithms, and best practices for regulated industries.</li>
            <li>Solutions are designed to meet industry compliance (HIPAA, GDPR, FINRA, etc.).</li>
            <li>We monitor and address emerging risks such as "quantum hacking" and ensure your infrastructure remains secure as the technology evolves.</li>
          </ul>
        </div>
      )
    },
    {
      id: "timeline-cost",
      question: "What is the typical project timeline and cost?",
      icon: <Calendar size={20} />,
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>PoC Projects:</strong> 2–4 months, with transparent fixed-fee pricing.</li>
            <li><strong>Full Development & Integration:</strong> 4–12 months depending on complexity.</li>
            <li><strong>Ongoing Support:</strong> Flexible packages for continuous improvement and upgrades.</li>
            <li><strong>Cost:</strong> Leveraging cloud platforms (IBM, AWS, Google, D-Wave), projects can start in the low five-figures, scaling based on usage and complexity.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Quantum Algorithm Development by AccelCQ? | AccelCQ Inc</title>
        <meta name="description" content="Comprehensive FAQ about AccelCQ's quantum algorithm development services. Learn about quantum computing applications, technical implementation, and sector-specific benefits." />
      </Helmet>

      <PageHeader 
        title="Why Quantum Algorithm Development by AccelCQ?"
        subtitle="Comprehensive answers to your quantum computing questions"
        backgroundImage="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&h=1020&q=80"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Quantum Algorithm Development is transforming how organizations approach complex computational challenges. From financial optimization to drug discovery, quantum algorithms offer unprecedented capabilities that go beyond classical computing limitations. Here's everything you need to know about leveraging quantum algorithm development for your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {mainFaqQuestions.map((faq, index) => (
              <motion.div 
                key={faq.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-indigo-600 mr-4">
                    {faq.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {faq.question}
                  </h2>
                </div>
                <div className="ml-12">
                  {faq.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Specific FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Sector-Specific FAQ"
              subtitle="How quantum algorithms benefit different industries"
              alignment="center"
            />
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {sectorFaqQuestions.map((faq, index) => (
                <motion.div 
                  key={faq.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-indigo-600 mr-4">
                          {faq.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      </motion.div>
                    </div>
                  </button>
                  {openQuestion === faq.id && (
                    <motion.div 
                      className="px-6 py-6 bg-white border-t border-gray-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.content}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Q&A Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Technical Q&A"
              subtitle="Deep technical insights into quantum algorithm implementation"
              alignment="center"
            />
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {technicalFaqQuestions.map((faq, index) => (
                <motion.div 
                  key={faq.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-indigo-600 mr-4">
                          {faq.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      </motion.div>
                    </div>
                  </button>
                  {openQuestion === faq.id && (
                    <motion.div 
                      className="px-6 py-6 bg-white border-t border-gray-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.content}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="What's next if I'm interested?"
              subtitle="Ready to explore quantum algorithm development for your organization?"
              alignment="center"
            />
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-12 text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Contact AccelCQ for a sector-specific consultation, detailed proposal, or discovery workshop. We'll assess your goals, suggest the right quantum approach, and guide your team to successful quantum adoption.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Harness Quantum Algorithm Advantage?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let AccelCQ's quantum experts help you develop and implement algorithms that solve complex problems beyond classical computing capabilities.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a 
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.a>
              <motion.a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Discovery Workshop
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default QuantumAlgorithmsFaq; 