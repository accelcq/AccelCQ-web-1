import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/common/ContactForm';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AccelCQ Inc</title>
        <meta name="description" content="Get in touch with AccelCQ Inc for confidential computing and quantum computing solutions. Contact our team for consultations and inquiries." />
      </Helmet>

      <PageHeader 
        title="Contact Us"
        subtitle="Have questions or ready to explore how we can help? Get in touch with our team."
        backgroundImage="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Contact Information & Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-1"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Location</h3>
                    <address className="not-italic text-gray-600">
                      308 de Leon Ave<br />
                      Fremont, CA 94539<br />
                      USA
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:info@accelcq.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                      info@accelcq.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">For general inquiries</p>
                    
                    <a href="mailto:sales@accelcq.com" className="text-gray-600 hover:text-primary-600 transition-colors block mt-2">
                      sales@accelcq.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">For sales inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <a href="tel:+15105551234" className="text-gray-600 hover:text-primary-600 transition-colors">
                      +1 (510) 555-1234
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Monday to Friday, 9am to 5pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-2"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.1412083630786!2d-121.9885217!3d37.5312364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc72a67a4b56d%3A0x3b5e47a786c5a359!2s308%20De%20Leon%20Ave%2C%20Fremont%2C%20CA%2094539!5e0!3m2!1sen!2sus!4v1682371879254!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="AccelCQ Inc Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What industries do you primarily serve?",
                  answer: "We work with organizations across various sectors, with particular expertise in financial services, healthcare, government, research institutions, and technology companies seeking advanced computing solutions."
                },
                {
                  question: "Do you offer remote consultations?",
                  answer: "Yes, we offer both in-person and remote consultations. Our team can work with clients globally through secure virtual meetings and collaboration tools."
                },
                {
                  question: "How quickly can you implement confidential computing solutions?",
                  answer: "Implementation timelines vary based on the complexity of your environment and specific requirements. Typically, initial assessments take 2-4 weeks, followed by implementation phases of varying lengths. We'll provide a detailed timeline during the consultation process."
                },
                {
                  question: "Do I need specialized hardware for quantum computing solutions?",
                  answer: "Not necessarily. We offer both quantum hardware access through our cloud partnerships and quantum-inspired algorithms that can run on classical infrastructure. We'll recommend the most appropriate approach based on your specific needs."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;