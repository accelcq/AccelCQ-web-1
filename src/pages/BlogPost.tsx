import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Confidential Computing: Trends and Predictions",
    content: `
      <p>Confidential computing is rapidly evolving as organizations seek to protect data not just at rest and in transit, but also while it's being processed. This "data in use" protection is becoming increasingly critical as more sensitive workloads move to the cloud and edge environments.</p>
      
      <h2>Key Trends in Confidential Computing</h2>
      
      <p>As we look ahead to the next few years, several important trends are emerging in the confidential computing landscape:</p>
      
      <h3>1. Hardware-Based Security Going Mainstream</h3>
      
      <p>Trusted Execution Environments (TEEs) are becoming standard across major cloud providers and hardware manufacturers. Intel SGX, AMD SEV, and ARM TrustZone are being widely deployed, making confidential computing capabilities accessible to more organizations.</p>
      
      <p>We expect to see these technologies become standard features rather than premium add-ons, with improved performance that reduces the computational overhead traditionally associated with secure enclaves.</p>
      
      <h3>2. Standardization and Interoperability</h3>
      
      <p>The Confidential Computing Consortium is driving standardization efforts that will enable greater interoperability between different confidential computing implementations. This will make it easier for organizations to deploy confidential computing solutions across heterogeneous environments without being locked into specific hardware or cloud providers.</p>
      
      <h3>3. Integration with Privacy-Enhancing Technologies</h3>
      
      <p>Confidential computing is increasingly being combined with other privacy-enhancing technologies such as homomorphic encryption, secure multi-party computation, and federated learning. These hybrid approaches offer more flexible privacy guarantees while addressing the performance limitations of individual techniques.</p>
      
      <h2>Industry Applications</h2>
      
      <p>Several industries are at the forefront of confidential computing adoption:</p>
      
      <h3>Financial Services</h3>
      
      <p>Banks and financial institutions are using confidential computing to enable secure data sharing and analytics while meeting strict regulatory requirements. Use cases include fraud detection across institutional boundaries, secure multi-party risk assessment, and protecting trading algorithms.</p>
      
      <h3>Healthcare</h3>
      
      <p>Medical research institutions and healthcare providers are leveraging confidential computing to collaborate on patient data analysis while preserving privacy. This is particularly important for rare disease research, drug discovery, and personalized medicine.</p>
      
      <h3>Government and Defense</h3>
      
      <p>Government agencies are adopting confidential computing for secure information sharing between departments and with international partners. The technology is also being used to protect classified information processing in cloud environments.</p>
      
      <h2>Future Predictions</h2>
      
      <p>Looking ahead, we anticipate several developments in confidential computing:</p>
      
      <ul>
        <li>Increased adoption of confidential computing in edge and IoT environments</li>
        <li>Expansion beyond data protection to include code and algorithm protection</li>
        <li>Integration with blockchain technologies for verifiable computation</li>
        <li>Emergence of confidential computing as a regulatory requirement in certain industries</li>
        <li>Development of quantum-resistant confidential computing approaches</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Confidential computing is moving from an emerging technology to a foundational element of modern security architectures. Organizations that adopt these technologies early will be better positioned to protect sensitive data while enabling new collaborative opportunities and business models.</p>
      
      <p>At AccelCQ, we're committed to helping organizations navigate this evolving landscape and implement confidential computing solutions that address their specific security and compliance requirements.</p>
    `,
    date: "April 15, 2025",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Dr. Elena Rodriguez",
      avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "CEO & Co-Founder of AccelCQ with a PhD in Quantum Physics from MIT and 15+ years of experience in secure computing technologies."
    },
    category: "Confidential Computing",
    slug: "future-of-confidential-computing",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Quantum Algorithms for Optimization Problems",
    content: `
      <p>Optimization problems are ubiquitous across industries, from logistics and supply chain management to financial portfolio optimization and drug discovery. Classical algorithms often struggle with large-scale optimization challenges due to their computational complexity.</p>
      
      <p>Quantum computing offers promising approaches to tackle these complex optimization problems more efficiently than classical methods. In this article, we'll explore the quantum algorithms that show the most potential for real-world optimization applications.</p>
      
      <h2>The Promise of Quantum Optimization</h2>
      
      <p>Quantum computers leverage quantum mechanical properties such as superposition and entanglement to explore multiple possible solutions simultaneously. This inherent parallelism makes them theoretically well-suited for combinatorial optimization problems with vast solution spaces.</p>
      
      <h3>Key Quantum Optimization Algorithms</h3>
      
      <p>Several quantum algorithms have emerged as particularly promising for optimization tasks:</p>
      
      <h3>1. Quantum Approximate Optimization Algorithm (QAOA)</h3>
      
      <p>QAOA is a hybrid quantum-classical algorithm introduced by Farhi, Goldstone, and Gutmann in 2014. It's designed specifically for combinatorial optimization problems and can be implemented on near-term quantum devices with relatively shallow circuit depths.</p>
      
      <p>The algorithm works by applying alternating layers of problem-specific and mixing operators to prepare a quantum state that encodes the optimal solution with high probability. A classical optimizer adjusts the parameters of these operators to improve results iteratively.</p>
      
      <p>QAOA has shown promising results for problems like MaxCut, traveling salesman, and portfolio optimization, potentially offering polynomial speedups for certain problem instances.</p>
      
      <h3>2. Quantum Annealing</h3>
      
      <p>Quantum annealing is a metaheuristic for finding the global minimum of an objective function by exploiting quantum tunneling effects. This approach is particularly suited for problems that can be formulated as Quadratic Unconstrained Binary Optimization (QUBO) problems.</p>
      
      <p>D-Wave Systems has developed quantum annealers with thousands of qubits that have been applied to various optimization challenges, including traffic flow optimization, molecular conformation problems, and supply chain optimization.</p>
      
      <h3>3. Variational Quantum Eigensolver (VQE)</h3>
      
      <p>Though primarily developed for quantum chemistry simulations, VQE can be adapted for optimization problems by encoding the objective function as a Hamiltonian whose ground state corresponds to the optimal solution.</p>
      
      <p>VQE combines quantum state preparation with classical optimization of circuit parameters, making it suitable for NISQ (Noisy Intermediate-Scale Quantum) devices available today.</p>
      
      <h2>Real-World Applications</h2>
      
      <p>Quantum optimization algorithms are beginning to show practical value in several domains:</p>
      
      <h3>Logistics and Transportation</h3>
      
      <p>Vehicle routing, fleet management, and last-mile delivery optimization can benefit from quantum approaches. Companies like Volkswagen have experimented with quantum algorithms for traffic flow optimization in urban environments.</p>
      
      <h3>Financial Services</h3>
      
      <p>Portfolio optimization, risk analysis, and trading strategy optimization are being explored by financial institutions using quantum computing. These applications need to balance multiple competing objectives and constraints, making them well-suited for quantum approaches.</p>
      
      <h3>Manufacturing</h3>
      
      <p>Production scheduling, supply chain optimization, and factory floor layout planning are complex optimization problems where quantum computing can potentially provide advantages.</p>
      
      <h2>Hybrid Quantum-Classical Approaches</h2>
      
      <p>Given the limitations of current quantum hardware, hybrid approaches that combine quantum and classical processing are particularly promising in the near term. These approaches:</p>
      
      <ul>
        <li>Leverage quantum computers for the most computationally intensive parts of the optimization process</li>
        <li>Use classical algorithms for preprocessing, postprocessing, and parameter optimization</li>
        <li>Implement decomposition techniques to break large problems into quantum-solvable subproblems</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      
      <p>As quantum hardware continues to improve in terms of qubit count, coherence times, and error rates, we expect to see increasingly impressive results for practical optimization problems. Organizations that begin experimenting with quantum optimization now will be well-positioned to leverage these advances as they emerge.</p>
      
      <p>At AccelCQ, we're helping clients identify optimization problems in their operations that are most amenable to quantum approaches and implementing hybrid quantum-classical solutions that deliver value even with today's quantum hardware limitations.</p>
    `,
    date: "April 2, 2025",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "James Chen",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "CTO & Co-Founder of AccelCQ, former Head of Cryptography at Google with expertise in secure enclaves and confidential computing."
    },
    category: "Quantum Computing",
    slug: "quantum-algorithms-optimization",
    readTime: "10 min read"
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!post) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | AccelCQ Inc Blog</title>
        <meta name="description" content={post.content.substring(0, 160).replace(/<[^>]*>/g, '')} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container-custom">
          <Link to="/blog" className="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to all articles
          </Link>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            {post.title}
          </motion.h1>
          
          <div className="flex flex-wrap items-center text-gray-300 mb-8 gap-y-2">
            <div className="flex items-center mr-6">
              <Calendar size={16} className="mr-2" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center mr-6">
              <User size={16} className="mr-2" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center mr-6">
              <Tag size={16} className="mr-2" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center">
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.div 
              className="lg:col-span-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto" 
                />
              </div>
              
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-700 font-medium">Tags:</span>
                  {['Technology', post.category, 'Research', 'Innovation'].map((tag, index) => (
                    <a 
                      key={index}
                      href={`/blog?tag=${tag.toLowerCase()}`}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Share2 size={18} className="mr-2" />
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#3b5998] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1da1f2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0077b5] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              {/* Author */}
              <div className="mt-8 pt-6 border-t border-gray-200 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{post.author.name}</h3>
                    <p className="text-gray-600 mb-3">{post.author.bio}</p>
                    <a 
                      href={`/about`} 
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Related Articles */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                
                <div className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex items-start">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-20 h-16 object-cover rounded mr-4" 
                        />
                        <div>
                          <h4 className="font-medium mb-1 line-clamp-2">
                            <Link 
                              to={`/blog/${relatedPost.slug}`} 
                              className="hover:text-primary-600 transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <span className="text-sm text-gray-500">{relatedPost.date}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No related articles found.</p>
                  )}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {Array.from(new Set(blogPosts.map(p => p.category))).map((category, index) => (
                    <li key={index}>
                      <a 
                        href={`/blog?category=${category}`} 
                        className="flex items-center justify-between text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {blogPosts.filter(p => p.category === category).length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest insights on confidential and quantum computing.
                </p>
                
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">More Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((post, index) => (
                <motion.div 
                  key={post.id}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <div className="overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-medium bg-primary-50 text-primary-600 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.content.substring(0, 120).replace(/<[^>]*>/g, '')}...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name} 
                              className="w-8 h-8 rounded-full object-cover mr-2" 
                            />
                            <span className="text-sm">{post.author.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;