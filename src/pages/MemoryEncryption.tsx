import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Shield, Lock, Server, CheckCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const MemoryEncryptionFaq = () => {
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

  const faqQuestions = [
    {
      id: "expertise-beyond-setup",
      question: "1. Expertise Beyond Basic Setup",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Even if your internal cloud team is skilled, implementing memory encryption in confidential computing 
            is rarely a simple "set-and-forget" task. AccelCQ delivers:
          </p>
          
          <div className="space-y-4">
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Depth of Experience</h4>
              <p className="text-gray-700 leading-relaxed">
              We specialize in hardware-backed memory encryption across all major clouds (Azure, AWS, Google, IBM) 
              and on-premises TEEs (Intel SGX, AMD SEV, etc.), so we anticipate and avoid pitfalls, performance 
              regressions, and misconfigurations that in-house teams may overlook.
            </p>
          </div>
            
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">End-to-End Security</h4>
            <p className="text-gray-700 leading-relaxed">
              Encryption is just the foundation—secure attestation, monitoring, audit logging, and lifecycle key 
              management are essential for ongoing protection and compliance.
            </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "compliance-risk-management",
      question: "2. Ongoing Compliance & Risk Management",
      icon: <CheckCircle size={20} />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            For regulated industries (healthcare, finance, biotech, etc.), compliance is a moving target. AccelCQ provides:
          </p>
          
          <div className="space-y-4">
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Compliance Alignment</h4>
              <p className="text-gray-700 leading-relaxed">
                Automated checks, reporting, and attestation tailored to HIPAA, GDPR, PCI, and more—so audits and 
              certifications don't disrupt your business.
            </p>
          </div>
            
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Rapid Response</h4>
            <p className="text-gray-700 leading-relaxed">
              Proactive monitoring and threat detection—especially important as attacks evolve or new vulnerabilities 
              are discovered.
            </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "operational-excellence",
      question: "3. Operational Excellence & Future-Proofing",
      icon: <Server size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Seamless Integration</h4>
              <p className="text-gray-700 leading-relaxed">
              We help you optimize memory encryption for real-world workloads—balancing security, performance, and cost, 
              whether you're cloud-native or hybrid.
            </p>
          </div>
            
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Feature Evolution</h4>
            <p className="text-gray-700 leading-relaxed">
              Even if the initial job seems "one-off," security and compliance requirements rarely stay static. AccelCQ 
              keeps you ahead of new cloud features (like confidential containers or next-gen TEEs) and regulatory 
              changes—future-proofing your investment.
            </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "specialized-scenarios",
      question: "4. Specialized Scenarios",
      icon: <Lock size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">On-Premises and Hybrid Cloud</h4>
              <p className="text-gray-700 leading-relaxed">
              For organizations running confidential workloads in private data centers or hybrid clouds, AccelCQ 
              delivers the same level of expertise, integrating TEEs (Intel SGX, AMD SEV, ARM TrustZone) and memory 
              encryption solutions without relying on public cloud infrastructure.
            </p>
          </div>
            
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Complex Multi-Cloud Deployments</h4>
            <p className="text-gray-700 leading-relaxed">
              Coordinating consistent security posture and memory encryption across multiple clouds and/or on-prem 
              environments can be challenging—we make it seamless.
            </p>
          </div>
          </div>
        </div>
      )
    },
    {
      id: "independent-assurance",
      question: "5. Independent Assurance & Support",
      icon: <HelpCircle size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Third-Party Validation</h4>
              <p className="text-gray-700 leading-relaxed">
                AccelCQ provides unbiased security reviews and documentation, offering assurance for your customers, 
                partners, or regulators.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Dedicated Support</h4>
              <p className="text-gray-700 leading-relaxed">
                24/7 expertise for incident response, upgrades, and troubleshooting—beyond the scope of most internal teams.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const targetCustomers = [
    {
      title: "Regulated Enterprises",
      description: "Healthcare, finance, pharma, and biotech firms requiring strong, auditable security.",
      icon: <Shield size={20} />
    },
    {
      title: "Data-Centric Businesses", 
      description: "Companies processing highly sensitive IP, customer, or financial data in cloud or hybrid environments.",
      icon: <Lock size={20} />
    },
    {
      title: "Organizations Facing Rapid Growth or Change",
      description: "When in-house teams are stretched, or the security/compliance landscape evolves faster than they can keep up.",
      icon: <Server size={20} />
    },
    {
      title: "Those Seeking Proactive, Not Reactive, Security",
      description: "Clients who see memory encryption as part of a holistic, evolving data protection strategy—not a one-off checkbox.",
      icon: <CheckCircle size={20} />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Memory Encryption FAQ | AccelCQ Inc</title>
        <meta name="description" content="Frequently asked questions about AccelCQ's memory encryption services. Learn why AccelCQ is the right choice for your confidential computing and memory encryption needs." />
      </Helmet>

      <PageHeader 
        title="Memory Encryption FAQ"
        subtitle="Why Choose AccelCQ for Memory Encryption?"
        backgroundImage="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&h=1020&q=80"
      />

      {/* Main FAQ Section */}
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
              title="Why Choose AccelCQ for Memory Encryption?"
              subtitle="Even if you have a cloud team, here's why AccelCQ delivers specialized expertise for both cloud and on-premises scenarios"
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
              {faqQuestions.map((faq, index) => (
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

      {/* Who Needs AccelCQ Memory Encryption Services */}
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
              title="Who Needs AccelCQ Memory Encryption Services?"
              subtitle="Organizations that benefit most from our specialized memory encryption expertise"
              alignment="center"
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {targetCustomers.map((customer, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="bg-indigo-100 p-3 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-indigo-600">
                      {customer.icon}
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{customer.title}</h3>
                    <p className="text-gray-700">{customer.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Secure Your Critical Infrastructure?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let AccelCQ's experts help you implement robust memory encryption solutions tailored to your specific needs.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MemoryEncryptionFaq; 