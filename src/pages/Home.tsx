import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Cpu, Server, BarChart, Code, Globe, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Carousel data for value propositions
  const valuePropositions = [
    {
      title: 'Data Protection',
      description: 'Enhanced security without compromising performance',
      details: 'Our confidential computing solutions protect your data at all stages - at rest, in transit, and in use.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Shield size={24} />,
      color: 'primary'
    },
    {
      title: 'Quantum Performance',
      description: 'Exponential speed-ups for complex computations',
      details: 'Leverage quantum algorithms to solve optimization and simulation problems exponentially faster.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Cpu size={24} />,
      color: 'secondary'
    },
    {
      title: 'Enterprise Scalability',
      description: 'Production-ready solutions for any scale',
      details: 'From startups to Fortune 500 companies, our solutions scale seamlessly with your business needs.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Server size={24} />,
      color: 'accent'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % valuePropositions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + valuePropositions.length) % valuePropositions.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
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



  // Stats data
  const stats = [
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '< 1ms', label: 'Response Latency' },
    { value: '24/7', label: 'System Monitoring' },
    { value: '3x', label: 'Performance Improvement' }
  ];

  return (
    <>
      <Helmet>
        <title>AccelCQ Inc | Confidential & Quantum Computing Solutions</title>
        <meta name="description" content="AccelCQ Inc provides cutting-edge confidential computing and quantum computing solutions for enterprises. Secure your data and accelerate your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-primary-900 opacity-90 z-0" />
        <div 
          className="absolute inset-0 z-0 bg-cover opacity-15"
          style={{ 
            backgroundImage: "url('/ChatGPT Image Jul 9, 2025, 02_13_06 PM.png')",
            backgroundPosition: 'center 75%'
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
              Securing the AI Revolution
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Accelerating Confidential & Quantum <span className="text-primary-400">Computing</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              Addressing Security, Scale & Performance in the AI Era
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
            subtitle="AccelCQ delivers next-generation confidential and quantum computing solutions that are production-ready today, transforming how enterprises secure and accelerate their most critical workloads."
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
                <ServiceCard {...service} showLearnMore={false} />
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
              {/* Value Proposition Carousel */}
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-80 md:h-96">
                  {valuePropositions.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {valuePropositions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Current Slide Info Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-72">
                <div className="flex items-start">
                  <div className={`p-2 rounded-md mr-3 ${
                    valuePropositions[currentSlide].color === 'primary' ? 'bg-primary-50 text-primary-600' :
                    valuePropositions[currentSlide].color === 'secondary' ? 'bg-secondary-50 text-secondary-600' :
                    'bg-accent-50 text-accent-600'
                  }`}>
                    {valuePropositions[currentSlide].icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">
                      {valuePropositions[currentSlide].title}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      {valuePropositions[currentSlide].description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {valuePropositions[currentSlide].details}
                    </p>
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