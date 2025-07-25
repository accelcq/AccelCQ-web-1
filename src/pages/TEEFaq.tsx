import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Shield, CheckCircle, Cloud, Server, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const TEEFaq = () => {
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
      id: "depth-experience-best-practices",
      question: "1. Depth of Experience & Best Practices",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Specialized Skills</h4>
              <p className="text-gray-700 leading-relaxed">
                TEEs require in-depth knowledge of enclave SDKs (Intel SGX, AMD SEV, ARM TrustZone), secure code design, 
                attestation, and enclave lifecycle management—beyond the reach of most generalist cloud teams.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Pitfall Avoidance</h4>
              <p className="text-gray-700 leading-relaxed">
                We help avoid common mistakes (e.g., incorrect attestation, performance bottlenecks, privilege escalation risks) 
                that only show up with real-world experience.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "holistic-security-compliance",
      question: "2. Holistic Security & Compliance",
      icon: <CheckCircle size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">More Than Setup</h4>
              <p className="text-gray-700 leading-relaxed">
                TEEs must be architected and monitored for end-to-end security—covering secure code deployment, attestation, 
                and integrity verification, plus integration with existing identity, monitoring, and key management tools.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Evolving Threats</h4>
              <p className="text-gray-700 leading-relaxed">
                As TEE vulnerabilities and attack surfaces change, AccelCQ provides ongoing updates and proactive defenses—keeping 
                you audit-ready and resilient.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "multi-cloud-hybrid-complexity",
      question: "3. Multi-Cloud & Hybrid Complexity",
      icon: <Cloud size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Seamless Orchestration</h4>
              <p className="text-gray-700 leading-relaxed">
                Consistently deploying, updating, and managing TEEs across Azure, AWS, Google, and on-premises environments is 
                non-trivial. We unify your security posture and provide cross-platform expertise.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance & Cost Optimization</h4>
              <p className="text-gray-700 leading-relaxed">
                TEE workloads require careful tuning to balance security, latency, and resource usage—we provide guidance that 
                maximizes ROI.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "on-premises-reality-check",
      question: "4. On-Premises: The Reality Check",
      icon: <Server size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Higher Complexity & Cost</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Setting up and maintaining TEEs in your own data center is significantly more complex and expensive than 
                leveraging public cloud TEEs. It demands:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Custom hardware (with enclave/TEE support)</li>
                <li>Security-hardened operating systems</li>
                <li>Ongoing firmware and microcode updates</li>
                <li>In-house secure enclave engineering skills</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Operational Overhead</h4>
              <p className="text-gray-700 leading-relaxed">
                Continuous patching, monitoring, and secure key management are essential and resource-intensive. AccelCQ brings 
                streamlined, automated processes and the latest TEE expertise to your in-prem cloud.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const targetCustomers = [
    {
      title: "Highly Regulated Industries",
      description: "Healthcare, financial services, pharma, and critical infrastructure organizations handling sensitive or regulated data.",
      icon: <Shield size={20} />
    },
    {
      title: "Companies Sharing Sensitive Data",
      description: "Any business conducting analytics, machine learning, or multi-party computation across boundaries (e.g., healthcare collaborations, financial clearinghouses, government contracts).",
      icon: <Users size={20} />
    },
    {
      title: "IP-Intensive or Security-First Organizations",
      description: "Enterprises needing strict protection for proprietary code, algorithms, or customer information.",
      icon: <Users size={20} />
    }
  ];

  const whyAccelCQBenefits = [
    "Unmatched Expertise: Deep hands-on experience architecting and maintaining TEEs on Azure, AWS, Google, IBM, and on-premises.",
    "End-to-End Delivery: From design and deployment to monitoring, compliance, and upgrades.",
    "Security Assurance: Independent validation, automated attestation, and incident response.",
    "Future-Proofing: Stay ahead as TEE hardware, SDKs, and compliance demands evolve."
  ];

  const summaryPoints = [
    "You need ongoing, expert management—not just a \"set and forget.\"",
    "You want to avoid costly security, performance, or compliance mistakes.",
    "You operate across multiple clouds or are considering hybrid/on-prem deployments.",
    "You seek trusted, independent assurance for your most critical workloads."
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose AccelCQ for Trusted Execution Environments (TEEs)? | AccelCQ Inc</title>
        <meta name="description" content="Even if you have a cloud team, here's why AccelCQ adds value for Trusted Execution Environments. Learn about our specialized TEE expertise and services." />
      </Helmet>

      <PageHeader 
        title="Why Choose AccelCQ for Trusted Execution Environments (TEEs)?"
        subtitle="Even If You Have a Cloud Team—Here's Why AccelCQ Adds Value"
        backgroundImage="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&h=1020&q=80"
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
              Trusted Execution Environments (TEEs) offer strong guarantees for confidentiality and integrity of sensitive workloads—whether in Azure, AWS, Google Cloud, IBM, or your own data center. But successfully deploying and operating TEEs isn't just about turning on a feature; it's an ongoing journey with critical business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Should Use TEE Services */}
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
              title="Who Should Use TEE Services?"
              subtitle="Organizations that benefit most from our specialized Trusted Execution Environment expertise"
              alignment="center"
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto"
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
                    className="bg-indigo-100 p-3 rounded-lg flex-shrink-0"
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

      {/* Why AccelCQ Not Just Your Cloud Team */}
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
              title="Why AccelCQ—Not Just Your Cloud Team?"
              subtitle="Specialized expertise that goes beyond generalist cloud teams"
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

      {/* Why AccelCQ Section */}
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
              title="Why AccelCQ?"
              subtitle="What sets us apart in the TEE landscape"
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
            {whyAccelCQBenefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
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
              title="Summary: When to Use AccelCQ"
              subtitle="Choose AccelCQ when you need more than basic cloud services"
              alignment="center"
            />
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="space-y-4">
              {summaryPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-indigo-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg text-center"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-indigo-900 font-semibold">
                With AccelCQ, TEEs deliver on their promise—real-world confidentiality, integrity, and operational peace of mind.
              </p>
            </motion.div>
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
              Ready to Secure Your Critical Workloads with TEEs?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let AccelCQ's experts help you implement and manage Trusted Execution Environments across your infrastructure.
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
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TEEFaq; 