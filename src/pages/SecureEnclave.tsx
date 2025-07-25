import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { Shield, Cloud, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const SecureEnclave = () => {
  const services = [
    {
      title: "Confidential Computing Readiness & Assessment",
      description: [
        "Cloud Infrastructure Risk Audits: Deep-dive assessments of your cloud footprint, spanning Azure Confidential VMs, AWS Nitro Enclaves, Google Confidential VMs, and IBM Hyper Protect Virtual Servers.",
        "Regulatory Alignment: Mapping your security and compliance to HIPAA, GDPR, CCPA, and FedRAMP.",
        "Deliverables: Comprehensive risk report, readiness roadmap, and Proof-of-Concept (PoC) recommendations."
      ]
    },
    {
      title: "Enclave-Based Solution Design & Implementation",
      description: [
        "Rapid Prototyping: From ideation to pilot, we design and deploy Secure Enclave applications using tools like Intel SGX, Fortanix, OpenEnclave, and cloud-native SDKs.",
        "AI/ML in Enclaves: Deploy machine learning models securely inside Azure, AWS, or Google TEEs, ensuring sensitive training data is never exposed.",
        "Multi-Party Computation: Enable confidential analytics across organizations—ideal for healthcare, finance, and government."
      ]
    },
    {
      title: "Secure AI & Federated Learning",
      description: [
        "AI Model Training & Inference: Protect intellectual property and customer data by training and serving models inside enclaves.",
        "Federated Learning: Set up privacy-preserving AI collaborations across hospitals, banks, or partners—without sharing raw data."
      ]
    },
    {
      title: "Cloud & Edge Integration",
      description: [
        "Cloud Enclave Deployments: Seamlessly deploy confidential workloads across Azure, AWS, Google Cloud, and IBM.",
        "Edge Security: Enable enclave protections at the edge using ARM TrustZone or custom hardware for IoT, 5G, and smart cities."
      ]
    },
    {
      title: "Compliance Automation & Attestation",
      description: [
        "Real-Time Audit Logging: Automate compliance tasks with secure, auditable logs from within enclaves.",
        "Attestation Services: Guarantee code and data integrity throughout the workload lifecycle."
      ]
    },
    {
      title: "Quantum-Ready Secure Compute",
      description: [
        "Hybrid Security Consulting: Future-proof your data with hybrid architectures that combine TEEs with post-quantum cryptography, leveraging IBM Q, Google Quantum AI, and more."
      ]
    },
    {
      title: "DevSecOps for Trusted Execution Environments",
      description: [
        "CI/CD Integration: Build, test, and deploy securely with enclave-aware DevSecOps pipelines.",
        "SDK & Platform Enablement: Integrate enclave SDKs (Fortanix, Graphene, OpenEnclave) into your development process."
      ]
    },
    {
      title: "Expert Training & Enablement",
      description: [
        "Developer workshops: Rapid upskilling in building enclave apps on Azure, AWS, and more.",
        "Bootcamps for architects and compliance leaders."
      ]
    }
  ];

  const platforms = [
    "Microsoft Azure Confidential VMs",
    "AWS Nitro Enclaves", 
    "Google Cloud Confidential VMs",
    "IBM Hyper Protect Virtual Servers",
    "Intel SGX, ARM TrustZone, Fortanix, OpenEnclave"
  ];

  const benefits = [
    "End-to-End Expertise: From assessment to production, including cross-cloud and hybrid environments.",
    "Deep Domain Knowledge: Proven success in healthcare, finance, biotech, logistics, and beyond.",
    "Accelerated Deployment: Pre-built templates, SDKs, and automation for faster go-live.",
    "Regulatory Confidence: Automated compliance, audit-ready logs, and secure attestation."
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Secure Enclave Services"
        subtitle="Advanced Secure Enclave solutions leveraging the best of cloud providers like Microsoft Azure, AWS, Google Cloud, IBM, and more"
        backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&h=1020&q=80"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              AccelCQ empowers enterprises to adopt next-generation security with advanced Secure Enclave solutions, 
              leveraging the best of cloud providers like Microsoft Azure, AWS, Google Cloud, IBM, and more. Our offerings 
              ensure your sensitive data, AI models, and workloads remain private, protected, and compliant—no matter where they run.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Secure Enclaves */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Are Secure Enclaves?"
            subtitle=""
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Secure Enclaves, also known as Trusted Execution Environments (TEEs), are isolated hardware areas 
                    within modern CPUs. They allow organizations to process and analyze sensitive data in the cloud—without 
                    exposing it to cloud providers, insiders, or external threats.
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
            title="AccelCQ's Secure Enclave Services"
            subtitle="Comprehensive solutions from assessment to production deployment"
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
            title="Supported Secure Enclave Platforms"
            subtitle="We work with all major cloud providers and hardware platforms"
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <Cloud className="h-6 w-6 text-primary-600" />
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
            title="Why Choose AccelCQ?"
            subtitle="Your trusted partner for secure enclave solutions"
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
            Confidential Computing is not the future—it's now.
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Partner with AccelCQ to secure your most valuable data, accelerate innovation, and lead in your industry.
          </p>
          <p className="text-lg mb-8 text-primary-100">
            Ready to transform your security posture? Contact AccelCQ for a consultation today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SecureEnclave; 