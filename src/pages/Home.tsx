import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Cpu, Server, BarChart, Code, Globe, Users, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/common/ServiceCard';

// Animation variants
const fadeInUp = {
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

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Services data
  const services = [
    {
      title: 'Confidential Computing',
      description: 'Secure data processing in trusted execution environments that protect sensitive information even during computation.',
      icon: <Shield size={24} />,
      link: '/services/confidential-computing'
    },
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum algorithms and simulation to solve complex problems beyond classical capabilities.',
      icon: <Cpu size={24} />,
      link: '/services/quantum-computing'
    },
    {
      title: 'Secure Cloud Infrastructure',
      description: 'Design and implementation of highly secure cloud architectures with confidential computing capabilities.',
      icon: <Server size={24} />,
      link: '/services/confidential-computing'
    },
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithm development for optimization, machine learning, and simulation applications.',
      icon: <Code size={24} />,
      link: '/services/quantum-computing'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "AccelCQ's confidential computing solutions have transformed how we handle sensitive customer data, providing unmatched security while maintaining performance.",
      author: "Sarah Johnson",
      position: "CTO, FinSecure Inc.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The quantum computing expertise at AccelCQ helped us solve optimization problems that were previously intractable with classical computing methods.",
      author: "Michael Chen",
      position: "Head of R&D, Quantum Innovations",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Working with AccelCQ has been a game-changer for our secure data processing needs. Their team's technical knowledge is exceptional.",
      author: "Jennifer Lopez",
      position: "CISO, HealthTech Solutions",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  // Stats data
  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '25+', label: 'Research Papers' },
    { value: '3x', label: 'Performance Improvement' }
  ];

  return (
    <>
      <Helmet>
        <title>AccelCQ Inc | Confidential & Quantum Computing Solutions</title>
        <meta name="description" content="AccelCQ Inc provides cutting-edge confidential computing and quantum computing solutions for enterprises. Secure your data and accelerate your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-primary-900 opacity-90 z-0" />
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />

        <div className="container-custom relative z-10 pt-28 md:pt-0">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium mb-5">
              Next-Generation Computing Solutions
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Secure Your Data<br />
              <span className="text-primary-400">Accelerate Your Future</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              AccelCQ Inc delivers cutting-edge confidential computing and quantum computing solutions that protect your most sensitive data while unlocking unprecedented computational power.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/services/confidential-computing" className="btn btn-secondary">
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
          <motion.div 
            className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="AccelCQ offers innovative solutions at the intersection of confidential computing and quantum technologies, delivering unprecedented security and computational power."
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-600 font-semibold mb-2 block">About AccelCQ Inc</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pioneering the Future of Secure Computing
              </h2>
              <p className="text-gray-600 mb-4">
                At AccelCQ Inc, we combine expertise in confidential computing and quantum technologies to provide cutting-edge solutions that address the most challenging computational problems while maintaining the highest security standards.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts, with backgrounds from leading tech companies and research institutions, is dedicated to pushing the boundaries of what's possible in secure and high-performance computing.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  { icon: <Shield size={20} />, text: "Industry-leading secure computing solutions" },
                  { icon: <Globe size={20} />, text: "Global delivery with local expertise" },
                  { icon: <Users size={20} />, text: "Team of top researchers and engineers" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">{item.icon}</div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AccelCQ Team" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-64">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-md text-primary-600 mr-3">
                    <BarChart size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Data Protection</p>
                    <p className="text-sm text-gray-600">Enhanced security without compromising performance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold mb-2 text-primary-300">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from organizations that have transformed their computing capabilities with our solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-800 to-secondary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Computing Capabilities?
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto mb-8 text-lg">
              Contact us today to discover how our confidential computing and quantum solutions can secure your data and accelerate your business.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
              Schedule a Consultation <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;