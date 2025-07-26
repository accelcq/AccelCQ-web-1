import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, Users, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';

const Contact = () => {
  const [searchParams] = useSearchParams();
  
  // Get prefill values from URL parameters
  const prefilledSubject = searchParams.get('subject') || '';
  const messageTemplate = searchParams.get('template') || '';
  
  // Generate prefilled message based on template
  const getPrefilledMessage = (template: string) => {
    switch (template) {
      case 'confidential-computing':
        return `Hi,

My Name is [Your name], I'm working as [position] in [company], my number is +1(xxx)-xxx-xxxx based out of xxxxxx.

I am interested in the Confidential Computing implementation demo. Can I know your availability for an implementation demo?

Regards
[Your name]`;
      case 'quantum-computing':
        return `Hi,

My Name is [Your name], I'm working as [position] in [company], my number is +1(xxx)-xxx-xxxx based out of xxxxxx.

I am interested in the Quantum Computing implementation demo. Can I know your availability for an implementation demo?

Regards
[Your name]`;
      case 'enterprise-architecture':
        return `Hi,

My Name is [Your name], I'm working as [position] in [company], my number is +1(xxx)-xxx-xxxx based out of xxxxxx.

I am interested in the TOGAF Enterprise Architecture assessment. Can I know your availability for an architecture review?

Regards
[Your name]`;
      default:
        return '';
    }
  };

  // Auto-scroll to contact form if prefilled parameters are present
  useEffect(() => {
    if (prefilledSubject || messageTemplate) {
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to ensure page has loaded
    }
  }, [prefilledSubject, messageTemplate]);

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AccelCQ LLC</title>
        <meta name="description" content="Get in touch with AccelCQ for confidential computing and quantum computing solutions. Contact our team for consultations and inquiries." />
      </Helmet>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-400 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-400 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              Let's Build Something Amazing Together
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-200">Ready to Transform Your</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-secondary-300">Computing Future?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Connect with our experts to discover how confidential and quantum computing can revolutionize your business.
            </p>
            
            {/* Quick Action Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a 
                href="tel:+14088166610"
                variants={fadeIn}
                className="group flex items-center px-8 py-4 bg-white text-primary-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </motion.a>
              <motion.a 
                href="mailto:info@accelcq.com?subject=Inquiry%20from%20xxx%20for%20Confidential%2FQuantum%20computing%2FEnterprise%20Architecture&body=Hi%0A%0AMy%20Name%20is%20....%2C%20I%27m%20working%20as%20%5Bposition%5D%20in%20%5Bcompany%5D%2C%20my%20number%20is%20%2B1%28xxx%29-xxx-xxxx%20based%20out%20of%20xxxxxx%0A%0AI%20am%20inquiring%20about%20....%0A%0ARegards%0AYour%20name"
                variants={fadeIn}
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Mail size={20} className="mr-2" />
                Email Us
              </motion.a>
              <motion.button 
                variants={fadeIn}
                className="group flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle size={20} className="mr-2" />
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods - Modern Cards */}
      <section className="section relative">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              {
                icon: <Phone size={28} />,
                title: "Call Us",
                value: "+1 (408) 816-6610",
                subtitle: "Mon-Fri, 9AM-5PM PST",
                href: "tel:+14088166610",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100"
              },
              {
                icon: <Mail size={28} />,
                title: "Email Us",
                value: "info@accelcq.com",
                subtitle: "We'll respond within 24h",
                href: "mailto:info@accelcq.com?subject=Inquiry%20from%20xxx%20for%20Confidential%2FQuantum%20computing%2FEnterprise%20Architecture&body=Hi%0A%0AMy%20Name%20is%20....%2C%20I%27m%20working%20as%20%5Bposition%5D%20in%20%5Bcompany%5D%2C%20my%20number%20is%20%2B1%28xxx%29-xxx-xxxx%20based%20out%20of%20xxxxxx%0A%0AI%20am%20inquiring%20about%20....%0A%0ARegards%0AYour%20name",
                gradient: "from-emerald-500 to-emerald-600",
                bgGradient: "from-emerald-50 to-emerald-100"
              },
              {
                icon: <MapPin size={28} />,
                title: "Visit Us",
                value: "Milpitas, CA",
                subtitle: "691 S Milpitas Blvd, Ste 217",
                href: "#map",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100"
              },
              {
                icon: <Calendar size={28} />,
                title: "Book Meeting",
                value: "Schedule Call",
                subtitle: "Free 30-min consultation",
                href: "#contact-form",
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-50 to-orange-100"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
                onClick={contact.href.startsWith('#') ? (e) => {
                  e.preventDefault();
                  document.querySelector(contact.href)?.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.gradient} text-white mb-4`}>
                    {contact.icon}
                  </div>
                                     <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-800">{contact.title}</h3>
                   <p className="text-gray-900 font-medium mb-1">{contact.value}</p>
                  <p className="text-sm text-gray-600">{contact.subtitle}</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={16} className="text-gray-500" />
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Modern Design */}
      <section id="contact-form" className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Left Side - Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="max-w-md">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                  Get Started Today
                </span>
                                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                   Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Computing Needs</span>
                 </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Our experts are ready to help you harness the power of confidential and quantum computing for your business.
                </p>
                
                {/* Benefits List */}
                <div className="space-y-4">
                  {[
                    "Free initial consultation",
                    "Custom solution assessment", 
                    "Expert technical guidance",
                    "Rapid implementation support"
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle size={14} className="text-white" />
                  </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Right Side - Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <ContactForm 
                  prefilledSubject={prefilledSubject}
                  prefilledMessage={getPrefilledMessage(messageTemplate)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Modern Integration */}
      <section id="map" className="section bg-white">
        <div className="container-custom">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Innovation Hub</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Located in the heart of Silicon Valley, our office is where cutting-edge computing meets practical business solutions.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5437503334373!2d-121.9076748!3d37.4342464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c1d3f9c0bb%3A0x1234567890abcdef!2s691%20S%20Milpitas%20Blvd%20%23217%2C%20Milpitas%2C%20CA%2095035!5e0!3m2!1sen!2sus!4v1682371879254!5m2!1sen!2sus" 
                width="100%" 
                  height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="AccelCQ LLC Office Location"
                  className="w-full h-96 md:h-[500px]"
              ></iframe>
              </div>
              
              {/* Floating Address Card */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                                         <h3 className="font-semibold text-gray-900 mb-1">AccelCQ LLC</h3>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      691 S Milpitas Boulevard, Ste 217<br />
                      Milpitas, California 95035<br />
                      United States
                    </address>
                    <a 
                      href="https://maps.google.com/?q=691+S+Milpitas+Blvd+Suite+217+Milpitas+CA+95035" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 group"
                    >
                      Get Directions 
                      <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals & Social Proof */}
      <section className="section bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
                         <h2 className="text-3xl md:text-4xl font-bold mb-6">
               <span className="text-gray-300">Trusted by</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-secondary-300">Industry Leaders</span>
             </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
              Join the growing number of organizations transforming their computing capabilities with AccelCQ.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Expert Support" },
                { value: "< 1ms", label: "Response Time" },
                { value: "100+", label: "Implementations" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;