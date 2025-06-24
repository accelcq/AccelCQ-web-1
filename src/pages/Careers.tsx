import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, Users, Globe, BookOpen, Award } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const Careers = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Quantum Algorithm Developer",
      department: "Quantum Computing",
      location: "Fremont, CA",
      type: "Full-time",
      description: "Design and implement quantum algorithms for optimization and machine learning applications.",
      requirements: [
        "PhD in Quantum Computing, Physics, or related field",
        "3+ years experience with quantum algorithm development",
        "Proficiency with Qiskit, Cirq, or similar quantum frameworks",
        "Strong programming skills in Python",
        "Experience with hybrid quantum-classical approaches"
      ]
    },
    {
      id: 2,
      title: "Confidential Computing Security Engineer",
      department: "Confidential Computing",
      location: "Fremont, CA",
      type: "Full-time",
      description: "Design and implement secure computing solutions using trusted execution environments and cryptographic techniques.",
      requirements: [
        "BS/MS in Computer Science, Cybersecurity or related field",
        "3+ years experience with TEEs (Intel SGX, AMD SEV, etc.)",
        "Strong background in cryptography and system security",
        "Experience with secure enclave programming",
        "Knowledge of cloud security architectures"
      ]
    },
    {
      id: 3,
      title: "Machine Learning Research Scientist",
      department: "Quantum Computing",
      location: "Remote",
      type: "Full-time",
      description: "Research and develop quantum-enhanced machine learning algorithms and applications.",
      requirements: [
        "PhD in Machine Learning, Computer Science, or related field",
        "Strong publication record in quantum machine learning or adjacent areas",
        "Experience with neural networks and deep learning frameworks",
        "Understanding of quantum computing principles",
        "Excellent research and problem-solving skills"
      ]
    },
    {
      id: 4,
      title: "Cloud Solutions Architect",
      department: "Confidential Computing",
      location: "Fremont, CA",
      type: "Full-time",
      description: "Design and implement secure cloud solutions leveraging confidential computing technologies.",
      requirements: [
        "BS/MS in Computer Science or related field",
        "5+ years experience with cloud architecture (AWS, Azure, GCP)",
        "Experience with confidential computing offerings from major cloud providers",
        "Strong understanding of security principles and best practices",
        "Excellent communication and client-facing skills"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | AccelCQ Inc</title>
        <meta name="description" content="Join the AccelCQ team and work on cutting-edge confidential computing and quantum computing technologies. Explore current job openings and opportunities." />
      </Helmet>

      <PageHeader 
        title="Careers at AccelCQ"
        subtitle="Join our team of experts pushing the boundaries of confidential and quantum computing"
        backgroundImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Why Join Section */}
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
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AccelCQ Team" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join AccelCQ</h2>
              <p className="text-gray-600 mb-6">
                At AccelCQ, we're building the future of secure and quantum computing. Our team consists of world-class experts from academia and industry who are passionate about solving the most challenging computational problems while maintaining the highest security standards.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Users size={20} />, text: "Work with leading experts in confidential and quantum computing" },
                  { icon: <Globe size={20} />, text: "Collaborate on projects with global impact across industries" },
                  { icon: <BookOpen size={20} />, text: "Continuous learning and development opportunities" },
                  { icon: <Award size={20} />, text: "Competitive compensation and comprehensive benefits" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">{item.icon}</div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600">
                We value diversity of thought and background, and are committed to creating an inclusive environment where everyone can thrive and contribute to our mission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Benefits"
            subtitle="We offer a comprehensive benefits package designed to support your wellbeing and professional growth"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Wellness",
                benefits: [
                  "Comprehensive medical, dental, and vision coverage",
                  "Mental health and wellness resources",
                  "Fitness membership reimbursement",
                  "Flexible work arrangements",
                  "Generous paid time off"
                ]
              },
              {
                title: "Professional Growth",
                benefits: [
                  "Continuous learning opportunities",
                  "Conference attendance and speaking opportunities",
                  "Research publication support",
                  "Mentorship programs",
                  "Career development planning"
                ]
              },
              {
                title: "Financial Benefits",
                benefits: [
                  "Competitive salary",
                  "Performance-based bonuses",
                  "401(k) with company match",
                  "Stock options",
                  "Relocation assistance for eligible roles"
                ]
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Open Positions"
            subtitle="Join our team and work on cutting-edge confidential and quantum computing solutions"
          />
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div 
                key={job.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm">
                          {job.department}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {job.location}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className="transition-transform group-open:rotate-180" size={20} />
                  </summary>
                  
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={`/careers/apply/${job.id}`} 
                      className="btn btn-primary"
                    >
                      Apply Now
                    </a>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-4">
                At AccelCQ, we foster a culture of innovation, collaboration, and continuous learning. We believe that the most groundbreaking solutions come from diverse teams working together in an environment that encourages creativity and risk-taking.
              </p>
              <p className="text-gray-600 mb-6">
                Our core values of technical excellence, integrity, security-first thinking, and collaborative innovation guide everything we do, from how we develop our products to how we interact with our clients and each other.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">What our team members say:</h3>
              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 mb-6">
                "Working at AccelCQ has given me the opportunity to tackle cutting-edge challenges in quantum computing while collaborating with some of the brightest minds in the industry. The culture of continuous learning and innovation is truly energizing."
                <footer className="mt-2 font-medium not-italic">
                  — Dr. Sarah Kim, Quantum Algorithm Researcher
                </footer>
              </blockquote>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-md" 
              />
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Office Environment" 
                className="rounded-lg shadow-md" 
              />
              <img 
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Meeting" 
                className="rounded-lg shadow-md" 
              />
              <img 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Company Event" 
                className="rounded-lg shadow-md" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Recruitment Process"
            subtitle="What to expect when you apply to join our team"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
              
              {/* Timeline items */}
              {[
                {
                  step: "Application Review",
                  description: "Our recruitment team reviews your application to assess your skills and experience against the role requirements."
                },
                {
                  step: "Initial Interview",
                  description: "A phone or video call with a recruiter to discuss your background, experience, and interest in the role."
                },
                {
                  step: "Technical Assessment",
                  description: "Depending on the role, you may be asked to complete a technical assessment or coding challenge to demonstrate your skills."
                },
                {
                  step: "Team Interviews",
                  description: "In-depth interviews with team members and leadership to assess technical expertise, cultural fit, and alignment with our mission."
                },
                {
                  step: "Final Decision",
                  description: "We'll make a decision and extend an offer to the successful candidate, followed by onboarding and integration into the team."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold z-10">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-gray-100 max-w-3xl mx-auto mb-8 text-lg">
              Explore our open positions and take the first step toward an exciting career in confidential and quantum computing.
            </p>
            <a href="#open-positions" className="btn bg-white text-primary-600 hover:bg-gray-100">
              View Current Openings
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;