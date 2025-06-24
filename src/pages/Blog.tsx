import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import BlogCard from '../components/common/BlogCard';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Confidential Computing: Trends and Predictions",
    excerpt: "Explore the emerging trends in confidential computing and what they mean for enterprise security in the coming years.",
    date: "April 15, 2025",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Dr. Elena Rodriguez",
      avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    category: "Confidential Computing",
    slug: "future-of-confidential-computing"
  },
  {
    id: 2,
    title: "Quantum Algorithms for Optimization Problems",
    excerpt: "A deep dive into how quantum algorithms can be applied to solve complex optimization challenges across various industries.",
    date: "April 2, 2025",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "James Chen",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    category: "Quantum Computing",
    slug: "quantum-algorithms-optimization"
  },
  {
    id: 3,
    title: "Secure Multi-Party Computation in Healthcare",
    excerpt: "How confidential computing is enabling secure collaboration on sensitive medical data while preserving patient privacy.",
    date: "March 20, 2025",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    category: "Healthcare",
    slug: "secure-computation-healthcare"
  },
  {
    id: 4,
    title: "Post-Quantum Cryptography: Preparing for the Quantum Threat",
    excerpt: "An overview of post-quantum cryptographic approaches and how organizations can prepare for quantum threats to encryption.",
    date: "March 12, 2025",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Dr. Michael Williams",
      avatar: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    category: "Cybersecurity",
    slug: "post-quantum-cryptography"
  },
  {
    id: 5,
    title: "Quantum Machine Learning: Current State and Future Prospects",
    excerpt: "Examining the intersection of quantum computing and machine learning, with real-world applications and case studies.",
    date: "February 28, 2025",
    image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "James Chen",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    category: "Quantum Computing",
    slug: "quantum-machine-learning"
  },
  {
    id: 6,
    title: "Confidential Computing in Financial Services",
    excerpt: "How banks and financial institutions are leveraging confidential computing to enhance security and regulatory compliance.",
    date: "February 15, 2025",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Dr. Elena Rodriguez",
      avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    category: "Financial Services",
    slug: "confidential-computing-finance"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Blog | AccelCQ Inc</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and news in confidential computing and quantum computing from AccelCQ Inc." />
      </Helmet>

      <PageHeader 
        title="Blog & Insights"
        subtitle="Expert insights, industry trends, and the latest developments in confidential and quantum computing"
        backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Search & Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <span className="text-gray-700">Filter by:</span>
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest insights and updates on confidential computing and quantum technologies.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;