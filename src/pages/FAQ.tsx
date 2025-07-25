import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Server, Cpu, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const FAQ = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  // FAQ Categories
  const faqCategories = [
    {
      title: "Memory Encryption",
      description: "Why choose AccelCQ for memory encryption? Learn about our expertise in hardware-backed encryption, compliance, and operational excellence.",
      icon: <Shield size={48} />,
      link: "/faq/memory-encryption",
      color: "bg-blue-50 text-blue-600",
      hoverColor: "hover:bg-blue-100",
      questions: [
        "Expertise Beyond Basic Setup",
        "Ongoing Compliance & Risk Management", 
        "Operational Excellence & Future-Proofing",
        "Specialized Scenarios",
        "Independent Assurance & Support"
      ]
    },
    {
      title: "Trusted Execution Environments",
      description: "Discover why AccelCQ is your ideal partner for TEE implementation, security, and ongoing management across cloud and on-premises environments.",
      icon: <Server size={48} />,
      link: "/faq/trusted-execution-environments", 
      color: "bg-green-50 text-green-600",
      hoverColor: "hover:bg-green-100",
      questions: [
        "Comprehensive TEE Expertise",
        "End-to-End Security Implementation",
        "Cross-Platform Integration",
        "Performance Optimization",
        "Long-term Support & Maintenance"
      ]
    },
    {
      title: "Quantum Algorithm Development",
      description: "Learn why AccelCQ excels in quantum algorithm development, optimization, and implementation for various industry applications.",
      icon: <Cpu size={48} />,
      link: "/faq/quantum-algorithms",
      color: "bg-purple-50 text-purple-600", 
      hoverColor: "hover:bg-purple-100",
      questions: [
        "Advanced Quantum Expertise",
        "Industry-Specific Applications",
        "Algorithm Optimization",
        "Quantum-Classical Integration",
        "Future-Ready Solutions"
      ]
    }
  ];

  // General FAQ Questions
  const generalFAQs = [
    {
      question: "What services does AccelCQ provide?",
      answer: "AccelCQ specializes in confidential computing, quantum computing, and enterprise architecture solutions. We provide end-to-end services including secure cloud infrastructure, memory encryption, trusted execution environments, quantum algorithm development, and TOGAF-based enterprise architecture consulting."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve regulated industries including healthcare, finance, pharmaceuticals, biotech, government, and enterprise organizations that require high levels of data security and computational performance."
    },
    {
      question: "Do you provide both cloud and on-premises solutions?",
      answer: "Yes, we provide solutions for both cloud environments (AWS, Azure, Google Cloud, IBM Cloud) and on-premises infrastructure, as well as hybrid deployments that combine both approaches."
    },
    {
      question: "How do I get started with AccelCQ?",
      answer: "Contact us through our website to schedule a consultation. We'll assess your specific needs, discuss your security requirements, and recommend the best approach for your organization."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQs | AccelCQ Inc</title>
        <meta name="description" content="Frequently asked questions about AccelCQ's confidential computing, quantum computing, and enterprise architecture services. Find answers to common questions about our expertise and solutions." />
      </Helmet>

      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our confidential computing, quantum computing, and enterprise architecture services"
        backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* FAQ Categories Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Specialized FAQ Categories"
            subtitle="Get detailed answers about our specific service areas"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {category.questions.map((question, qIndex) => (
                        <li key={qIndex} className="text-sm text-gray-600 flex items-start">
                          <HelpCircle size={14} className="mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={category.link}
                    className={`inline-flex items-center text-sm font-medium transition-colors ${category.color.split(' ')[1]} hover:underline`}
                  >
                    View All Questions
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* General FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="General Questions"
            subtitle="Common questions about AccelCQ and our services"
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {generalFAQs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-gray-100 max-w-3xl mx-auto mb-8 text-lg">
              Our experts are here to help. Contact us for personalized answers to your specific confidential computing and quantum computing questions.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ; 