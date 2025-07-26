import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import TeamMember from '../components/common/TeamMember';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Company values
  const values = [
    {
      icon: <Shield size={28} />,
      title: 'Security First',
      description: 'We prioritize the security and privacy of data in everything we build, ensuring the highest levels of protection for our clients.'
    },
    {
      icon: <Award size={28} />,
      title: 'Technical Excellence',
      description: "We strive for excellence in all technical aspects, pushing the boundaries of what is possible in computing technology."
    },
    {
      icon: <CheckCircle size={28} />,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty, ensuring our clients can trust us with their most sensitive information.'
    },
    {
      icon: <Users size={28} />,
      title: 'Collaborative Innovation',
      description: 'We work closely with our clients and partners to co-create solutions that address complex challenges.'
    }
  ];

  // Leadership team - Commented out for now, will be restored later with more content
  /*
  const teamMembers = [
    {
      name: 'Dr. Elena Rodriguez',
      position: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'PhD in Quantum Physics from MIT with 15+ years of experience in secure computing technologies.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'elena@accelcq.com'
    },
    {
      name: 'James Chen',
      position: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Former Head of Cryptography at Google with expertise in secure enclaves and confidential computing.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'james@accelcq.com'
    },
    {
      name: 'Sarah Johnson',
      position: 'COO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Former VP of Operations at Oracle with experience scaling technology companies globally.',
      linkedin: 'https://linkedin.com',
      email: 'sarah@accelcq.com'
    },
    {
      name: 'Dr. Michael Williams',
      position: 'Head of Research',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Leading expert in quantum algorithms with over 20 published research papers in the field.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'michael@accelcq.com'
    }
  ];
  */

  return (
    <>
      <Helmet>
        <title>About Us | AccelCQ LLC</title>
        <meta name="description" content="Learn about AccelCQ LLC, our mission, values, and the team driving innovation in confidential and quantum computing." />
      </Helmet>

      <PageHeader 
        title="About AccelCQ LLC"
        subtitle="A team of experts dedicated to revolutionizing secure and quantum computing"
        backgroundImage="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Mission Section */}
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
                src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AccelCQ Mission" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg">
                At AccelCQ LLC, our mission is to revolutionize computing by seamlessly integrating confidential computing security with quantum computing power, enabling organizations to process their most sensitive data with unprecedented speed and security.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2021 by experts from leading technology companies and research institutions, AccelCQ was born from the recognition that as computing power advances, so too must the security protecting that data.
              </p>
              <p className="text-gray-600">
                We envision a future where quantum computing capabilities are accessible to all organizations while maintaining the highest standards of data protection through confidential computing technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our work and relationships with clients"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-primary-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
      Timeline Section - Commented out for now, will be restored later with more content
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Journey"
            subtitle="The key milestones in our company's growth and innovation"
          />
          
          <div className="relative">
            Timeline line
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
            
            <div className="relative">
              Timeline items
              {[
                {
                  year: '2021',
                  title: 'Company Founded',
                  description: 'AccelCQ LLC was founded by Dr. Elena Rodriguez and James Chen in Fremont, California.'
                },
                {
                  year: '2022',
                  title: 'First Major Client',
                  description: 'Secured our first enterprise client in the financial services sector, implementing confidential computing solutions.'
                },
                {
                  year: '2023',
                  title: 'Quantum Computing Division',
                  description: 'Launched our Quantum Computing division and published groundbreaking research on hybrid quantum-classical algorithms.'
                },
                {
                  year: '2024',
                  title: 'Global Expansion',
                  description: 'Opened offices in Europe and Asia to serve our growing international client base.'
                },
                {
                  year: '2025',
                  title: 'Industry Recognition',
                  description: 'Recognized as a leader in Gartner\'s Magic Quadrant for Confidential Computing Solutions.'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center justify-between mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold z-10">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      Team Section - Commented out for now, will be restored later with more content
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experts driving innovation at AccelCQ LLC"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamMember {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}


    </>
  );
};

export default About;