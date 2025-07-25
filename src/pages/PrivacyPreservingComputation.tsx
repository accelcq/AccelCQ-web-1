import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { Shield, Lock, Users, CheckCircle, ArrowRight, Eye, Database } from 'lucide-react';

const PrivacyPreservingComputation = () => {
  const services = [
    {
      title: "Encrypted Data Analytics in Secure Enclaves",
      description: [
        "Leverage Azure Confidential VMs, AWS Nitro Enclaves, Google Confidential VMs, and IBM Hyper Protect to run encrypted workloads securely.",
        "Analyze health, finance, or personally identifiable information (PII) without ever decrypting it in the cloud."
      ]
    },
    {
      title: "Multi-Party & Federated Computation",
      description: [
        "Enable collaborative analytics and AI across organizations or departments without sharing raw data.",
        "Deploy federated learning and multi-party computation (MPC) using secure enclave infrastructure and cryptography (e.g., homomorphic encryption, differential privacy)."
      ]
    },
    {
      title: "Zero Trust Data Sharing",
      description: [
        "Set up data clean rooms where multiple parties contribute data, but each party's information remains private—even during processing.",
        "Enable secure regulatory reporting and cross-entity data collaboration in finance, healthcare, and logistics."
      ]
    },
    {
      title: "Advanced Cryptographic Integration",
      description: [
        "Integrate homomorphic encryption, secure multi-party computation (SMPC), and trusted execution to create custom privacy-preserving workflows.",
        "Consult on best-fit cryptographic and enclave strategies for your industry and use case."
      ]
    },
    {
      title: "AI/ML Privacy Enablement",
      description: [
        "Train and deploy machine learning models inside enclaves or using encrypted data, protecting intellectual property and sensitive inputs/outputs.",
        "Support for frameworks like PyTorch, TensorFlow, Flower, and ONNX—optimized for secure enclaves."
      ]
    },
    {
      title: "Regulatory Compliance for Sensitive Data",
      description: [
        "Achieve and automate compliance with HIPAA, GDPR, CCPA, FedRAMP, and financial regulations—using privacy-preserving compute as your compliance backbone.",
        "Provide secure audit trails and attestation for all privacy-preserving workflows."
      ]
    },
    {
      title: "Privacy DevSecOps & Automation",
      description: [
        "Integrate privacy-preserving computation into your CI/CD pipelines, from data ingestion to analytics and reporting.",
        "Automate privacy risk detection and cryptographic key management."
      ]
    }
  ];

  const platforms = [
    "Microsoft Azure Confidential Computing (Confidential VMs, Enclaves, Data Clean Rooms)",
    "AWS Nitro Enclaves & Clean Rooms",
    "Google Cloud Confidential VMs & Clean Rooms",
    "IBM Hyper Protect Services",
    "Intel SGX, ARM TrustZone, Fortanix, OpenEnclave"
  ];

  const benefits = [
    "Cross-Cloud Expertise: Deep hands-on with all major secure enclave platforms.",
    "Cryptography Meets Engineering: Practical implementation of advanced privacy techniques—no vaporware.",
    "End-to-End Enablement: From discovery and PoC to secure production and ongoing compliance.",
    "Industry-Specific Use Cases: Healthcare, Biotech, Finance, Ecommerce, and more.",
    "Accelerated Deployment: Templates, automation, and training for rapid go-live."
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Privacy-Preserving Computation Services"
        subtitle="Unlock the value of sensitive data without ever compromising privacy using advanced Privacy-Preserving Computation"
        backgroundImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&h=1020&q=80"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              AccelCQ enables organizations to unlock the value of sensitive data—without ever compromising privacy. 
              Using the latest advances in Privacy-Preserving Computation, we help you process, analyze, and share data 
              securely with partners, customers, or regulators, all while maintaining strict privacy guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Privacy-Preserving Computation */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Is Privacy-Preserving Computation?"
            subtitle=""
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <Eye className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Privacy-Preserving Computation combines secure enclaves with advanced cryptographic techniques to ensure 
                    data remains confidential even during use. This allows you to extract insights, run analytics, or train 
                    AI models on sensitive data—without exposing raw information to the cloud, third parties, or even your own IT staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AccelCQ's Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="AccelCQ's Privacy-Preserving Computation Services"
            subtitle="Comprehensive privacy-first solutions for sensitive data processing"
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  {service.title}
                </h3>
                <div className="space-y-3">
                  {service.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Supported Platforms"
            subtitle="We work with all major confidential computing and clean room platforms"
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3">
                    <Database className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AccelCQ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why AccelCQ for Privacy-Preserving Computation?"
            subtitle="Your trusted partner for privacy-first data solutions"
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform data risk into data value.
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            With AccelCQ's Privacy-Preserving Computation services, you can collaborate, innovate, and grow—all while 
            keeping your most sensitive information private and secure.
          </p>
          <p className="text-lg mb-8 text-primary-100">
            Contact AccelCQ today to enable privacy-first analytics and AI in your organization.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Enable Privacy-First Analytics
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPreservingComputation; 