import { useState } from 'react';
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
  },
  {
    id: 3,
    title: "Secure Multi-Party Computation in Healthcare",
    content: `
      <p>Healthcare organizations possess vast amounts of sensitive patient data that could drive revolutionary medical research and improved patient outcomes. However, strict privacy regulations and ethical considerations have traditionally limited the ability to share and analyze this data across institutions.</p>
      
      <p>Secure Multi-Party Computation (SMPC) and confidential computing technologies are changing this landscape, enabling healthcare organizations to collaborate on data analysis while maintaining strict privacy protections for patient information.</p>
      
      <h2>The Challenge of Healthcare Data Sharing</h2>
      
      <p>Healthcare data contains some of the most sensitive personal information, including medical conditions, genetic information, and treatment histories. Traditional approaches to medical research have been limited by:</p>
      
      <ul>
        <li>Privacy regulations such as HIPAA in the US and GDPR in Europe</li>
        <li>Institutional policies that restrict data sharing</li>
        <li>Technical challenges in de-identifying data while preserving utility</li>
        <li>Patient consent and trust issues</li>
      </ul>
      
      <p>These limitations have resulted in medical research being conducted on smaller datasets than would be ideal, potentially slowing the pace of medical breakthroughs and limiting the statistical power of research studies.</p>
      
      <h2>How Secure Multi-Party Computation Works in Healthcare</h2>
      
      <p>SMPC enables multiple healthcare institutions to perform joint computations on their combined datasets without ever sharing the raw data. Each institution's data remains on their own systems, encrypted and protected throughout the computation process.</p>
      
      <h3>Key Technologies</h3>
      
      <p>Several complementary technologies enable secure healthcare data collaboration:</p>
      
      <h4>Trusted Execution Environments (TEEs)</h4>
      
      <p>Hardware-based secure enclaves create isolated computing environments where sensitive data can be processed. Even system administrators and cloud providers cannot access the data while it's being analyzed within the enclave.</p>
      
      <h4>Homomorphic Encryption</h4>
      
      <p>This cryptographic technique allows computations to be performed directly on encrypted data, with the results remaining encrypted until decrypted by authorized parties.</p>
      
      <h4>Federated Learning</h4>
      
      <p>Machine learning models can be trained across multiple healthcare institutions without centralizing patient data. Each institution trains on their local data, and only model updates are shared.</p>
      
      <h2>Real-World Applications</h2>
      
      <p>Several practical applications of secure multi-party computation are already showing promise in healthcare:</p>
      
      <h3>Rare Disease Research</h3>
      
      <p>Rare diseases affect small numbers of patients distributed across many healthcare institutions. SMPC enables researchers to combine patient data from multiple sources to achieve statistically significant sample sizes for rare disease studies.</p>
      
      <h3>Drug Discovery and Development</h3>
      
      <p>Pharmaceutical companies can collaborate with healthcare institutions to identify drug targets, assess treatment efficacy, and monitor adverse effects without accessing individual patient records.</p>
      
      <h3>Epidemic Surveillance</h3>
      
      <p>Public health agencies can monitor disease outbreaks and track epidemiological trends by analyzing aggregated data from multiple healthcare providers while preserving patient privacy.</p>
      
      <h3>Clinical Trial Matching</h3>
      
      <p>Patients can be matched to appropriate clinical trials based on their medical history and current condition without exposing sensitive medical information to trial sponsors.</p>
      
      <h2>Benefits and Outcomes</h2>
      
      <p>The implementation of secure multi-party computation in healthcare delivers several key benefits:</p>
      
      <ul>
        <li><strong>Enhanced Research Capabilities:</strong> Larger, more diverse datasets lead to more robust research findings</li>
        <li><strong>Improved Patient Care:</strong> Better understanding of disease patterns and treatment outcomes</li>
        <li><strong>Regulatory Compliance:</strong> Meeting privacy requirements while enabling valuable research</li>
        <li><strong>Institutional Trust:</strong> Healthcare institutions can collaborate without compromising their data security posture</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      
      <p>Successfully implementing SMPC in healthcare requires careful consideration of several factors:</p>
      
      <h3>Technical Infrastructure</h3>
      
      <p>Healthcare institutions need secure computing infrastructure that can support confidential computing workloads while maintaining high availability for critical healthcare systems.</p>
      
      <h3>Governance and Compliance</h3>
      
      <p>Clear governance frameworks must be established to define how data can be used, who can participate in computations, and how results can be shared.</p>
      
      <h3>Standardization</h3>
      
      <p>Healthcare data formats and coding systems must be standardized across participating institutions to enable meaningful joint analysis.</p>
      
      <h2>Future Directions</h2>
      
      <p>As SMPC technologies mature, we expect to see broader adoption across the healthcare ecosystem. Future developments may include:</p>
      
      <ul>
        <li>Integration with electronic health record systems</li>
        <li>Real-time collaborative analytics for patient care</li>
        <li>Global health research collaborations</li>
        <li>Patient-controlled data sharing mechanisms</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Secure multi-party computation represents a paradigm shift in healthcare data collaboration. By enabling privacy-preserving data analysis, these technologies can accelerate medical research, improve patient outcomes, and advance our understanding of health and disease while maintaining the highest standards of patient privacy protection.</p>
      
      <p>At AccelCQ, we're working with healthcare institutions to implement these technologies and unlock the value of healthcare data for the benefit of patients worldwide.</p>
    `,
    date: "March 20, 2025",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Healthcare Technology Director at AccelCQ with extensive experience in healthcare data privacy and regulatory compliance."
    },
    category: "Healthcare",
    slug: "secure-computation-healthcare",
    readTime: "9 min read"
  },
  {
    id: 4,
    title: "Post-Quantum Cryptography: Preparing for the Quantum Threat",
    content: `
      <p>The advent of powerful quantum computers poses a significant threat to the cryptographic systems that secure our digital infrastructure today. While quantum computers promise revolutionary advances in computing, they also threaten to break the public-key cryptographic algorithms that protect everything from online banking to secure communications.</p>
      
      <p>Post-quantum cryptography (PQC) represents our defensive response to this quantum threat, offering cryptographic algorithms that remain secure even against quantum attacks.</p>
      
      <h2>Understanding the Quantum Threat</h2>
      
      <p>The threat to current cryptographic systems comes from quantum algorithms that can efficiently solve mathematical problems that are intractable for classical computers:</p>
      
      <h3>Shor's Algorithm</h3>
      
      <p>Developed by mathematician Peter Shor in 1994, this quantum algorithm can efficiently factor large integers and solve discrete logarithm problems. This capability would break widely-used public-key cryptosystems including:</p>
      
      <ul>
        <li>RSA encryption</li>
        <li>Elliptic Curve Cryptography (ECC)</li>
        <li>Diffie-Hellman key exchange</li>
        <li>DSA and ECDSA digital signatures</li>
      </ul>
      
      <h3>Grover's Algorithm</h3>
      
      <p>This quantum algorithm provides a quadratic speedup for searching unsorted databases, effectively halving the security level of symmetric cryptographic algorithms like AES and hash functions like SHA-256.</p>
      
      <h2>The Timeline of the Quantum Threat</h2>
      
      <p>While the exact timeline for the arrival of cryptographically relevant quantum computers (CRQCs) remains uncertain, the cybersecurity community is working under the assumption that such systems could emerge within the next 10-20 years.</p>
      
      <p>However, the threat is immediate for data that must remain secure for extended periods. Data encrypted today with vulnerable algorithms could be stored by adversaries and decrypted once quantum computers become available—a scenario known as "harvest now, decrypt later."</p>
      
      <h2>NIST's Post-Quantum Cryptography Standardization</h2>
      
      <p>The U.S. National Institute of Standards and Technology (NIST) has been leading the global effort to standardize post-quantum cryptographic algorithms. After a multi-year evaluation process, NIST published the first set of PQC standards in August 2024:</p>
      
      <h3>Selected Algorithms</h3>
      
      <h4>Digital Signatures</h4>
      <ul>
        <li><strong>CRYSTALS-Dilithium:</strong> Based on lattice problems, offering strong security with reasonable performance</li>
        <li><strong>FALCON:</strong> Also lattice-based, providing compact signatures suitable for constrained environments</li>
        <li><strong>SPHINCS+:</strong> Hash-based signatures offering the most conservative security assumptions</li>
      </ul>
      
      <h4>Key Encapsulation</h4>
      <ul>
        <li><strong>CRYSTALS-KYBER:</strong> A lattice-based algorithm for secure key establishment</li>
      </ul>
      
      <h2>Mathematical Foundations of Post-Quantum Cryptography</h2>
      
      <p>Post-quantum algorithms are based on mathematical problems that are believed to be difficult even for quantum computers:</p>
      
      <h3>Lattice-Based Cryptography</h3>
      
      <p>These algorithms rely on the difficulty of finding short vectors in high-dimensional lattices. Problems like Learning With Errors (LWE) and Ring-LWE form the foundation for many PQC algorithms.</p>
      
      <h3>Hash-Based Cryptography</h3>
      
      <p>These systems base their security on the one-way properties of cryptographic hash functions, which remain secure against quantum attacks.</p>
      
      <h3>Code-Based Cryptography</h3>
      
      <p>Built on the difficulty of decoding random linear codes, these algorithms have a long history in cryptographic research.</p>
      
      <h3>Multivariate Cryptography</h3>
      
      <p>Based on the difficulty of solving systems of multivariate polynomial equations over finite fields.</p>
      
      <h2>Implementation Challenges</h2>
      
      <p>Transitioning to post-quantum cryptography presents several challenges:</p>
      
      <h3>Performance Considerations</h3>
      
      <p>Many PQC algorithms require larger key sizes, signatures, or ciphertexts compared to classical algorithms. This can impact performance in bandwidth-constrained or resource-limited environments.</p>
      
      <h3>Hybrid Approaches</h3>
      
      <p>During the transition period, many organizations are implementing hybrid systems that combine classical and post-quantum algorithms, providing security against both classical and quantum attacks.</p>
      
      <h3>Legacy System Integration</h3>
      
      <p>Updating existing systems and protocols to support post-quantum algorithms requires careful planning and testing to ensure compatibility and maintain security.</p>
      
      <h2>Industry Adoption and Migration Strategies</h2>
      
      <p>Organizations across various sectors are beginning their post-quantum migration:</p>
      
      <h3>Government and Defense</h3>
      
      <p>Government agencies are often the first adopters, with some beginning to require PQC in new systems and planning migration timelines for existing infrastructure.</p>
      
      <h3>Financial Services</h3>
      
      <p>Banks and financial institutions are evaluating the impact on payment systems, trading platforms, and customer data protection.</p>
      
      <h3>Technology Companies</h3>
      
      <p>Major tech companies are beginning to implement post-quantum algorithms in their products and services, often starting with hybrid approaches.</p>
      
      <h2>Best Practices for Post-Quantum Migration</h2>
      
      <p>Organizations preparing for the quantum threat should consider the following approaches:</p>
      
      <ul>
        <li><strong>Crypto-Agility:</strong> Design systems that can easily update cryptographic algorithms</li>
        <li><strong>Risk Assessment:</strong> Identify and prioritize systems based on the sensitivity and longevity of protected data</li>
        <li><strong>Hybrid Implementation:</strong> Deploy hybrid classical-quantum solutions during the transition period</li>
        <li><strong>Testing and Validation:</strong> Thoroughly test PQC implementations in development environments</li>
        <li><strong>Supply Chain Security:</strong> Ensure that vendors and partners also adopt post-quantum measures</li>
      </ul>
      
      <h2>The Role of Confidential Computing</h2>
      
      <p>Post-quantum cryptography works synergistically with confidential computing technologies. While PQC protects data in transit and at rest from quantum attacks, confidential computing can protect data and algorithms during processing, creating a comprehensive security strategy for the quantum era.</p>
      
      <h2>Looking Ahead</h2>
      
      <p>The transition to post-quantum cryptography represents one of the most significant changes in cybersecurity in decades. Organizations that begin planning and implementing their migration strategies now will be better positioned to maintain security as quantum computing capabilities advance.</p>
      
      <p>The process requires careful planning, testing, and gradual implementation to ensure security is maintained throughout the transition period.</p>
      
      <h2>Conclusion</h2>
      
      <p>Post-quantum cryptography is not just a future concern—it's a present-day imperative. Organizations must begin their quantum-safe migration now to protect against current and future threats.</p>
      
      <p>At AccelCQ, we're helping organizations assess their quantum vulnerability, develop migration strategies, and implement post-quantum cryptographic solutions that provide security in the quantum era while maintaining operational efficiency.</p>
    `,
    date: "March 12, 2025",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Dr. Michael Williams",
      avatar: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Chief Cryptographer at AccelCQ with a PhD in Mathematics and 20+ years of experience in cryptographic research and implementation."
    },
    category: "Cybersecurity",
    slug: "post-quantum-cryptography",
    readTime: "11 min read"
  },
  {
    id: 5,
    title: "Quantum Machine Learning: Current State and Future Prospects",
    content: `
      <p>The intersection of quantum computing and machine learning represents one of the most exciting frontiers in computational science. Quantum Machine Learning (QML) promises to revolutionize how we approach complex learning tasks by leveraging quantum mechanical properties to process information in fundamentally new ways.</p>
      
      <p>While still in its early stages, QML is showing promising results across various domains and could provide significant advantages for certain types of machine learning problems.</p>
      
      <h2>The Promise of Quantum Machine Learning</h2>
      
      <p>Classical machine learning has achieved remarkable success, but it faces fundamental limitations when dealing with exponentially large datasets or complex optimization landscapes. Quantum computing offers several potential advantages:</p>
      
      <h3>Exponential Speedups</h3>
      
      <p>Quantum algorithms can potentially provide exponential speedups for certain machine learning tasks, particularly those involving linear algebra operations, optimization, and pattern recognition in high-dimensional spaces.</p>
      
      <h3>Natural Feature Spaces</h3>
      
      <p>Quantum systems naturally operate in exponentially large Hilbert spaces, making them potentially well-suited for machine learning tasks that require high-dimensional feature representations.</p>
      
      <h3>Quantum Parallelism</h3>
      
      <p>Quantum superposition allows quantum computers to explore multiple solution paths simultaneously, potentially enabling more efficient search through machine learning model parameter spaces.</p>
      
      <h2>Current Quantum Machine Learning Approaches</h2>
      
      <p>Several distinct approaches to quantum machine learning have emerged, each with different advantages and applications:</p>
      
      <h3>Variational Quantum Algorithms</h3>
      
      <p>These hybrid quantum-classical approaches use parameterized quantum circuits that can be optimized for specific machine learning tasks:</p>
      
      <h4>Variational Quantum Classifier (VQC)</h4>
      
      <p>VQCs use quantum circuits to learn classification boundaries in quantum feature spaces. The quantum circuit parameters are optimized using classical optimization techniques to minimize classification error.</p>
      
      <h4>Quantum Neural Networks (QNNs)</h4>
      
      <p>These architectures combine quantum circuits with classical neural network concepts, using quantum gates as learnable parameters and quantum measurements as activation functions.</p>
      
      <h3>Quantum Kernel Methods</h3>
      
      <p>These approaches use quantum computers to evaluate kernel functions that would be computationally expensive on classical computers. By mapping data into quantum feature spaces, these methods can potentially capture complex correlations that are difficult for classical algorithms to detect.</p>
      
      <h3>Quantum Generative Models</h3>
      
      <p>Quantum computers can be used to learn and generate quantum states that represent classical data distributions. These approaches include:</p>
      
      <ul>
        <li>Quantum Generative Adversarial Networks (QGANs)</li>
        <li>Quantum Boltzmann Machines</li>
        <li>Quantum autoencoders</li>
      </ul>
      
      <h2>Quantum Advantage in Specific Domains</h2>
      
      <p>Certain machine learning applications may be particularly well-suited for quantum enhancement:</p>
      
      <h3>Chemistry and Materials Science</h3>
      
      <p>Quantum machine learning is naturally suited for problems involving quantum systems. Applications include:</p>
      
      <ul>
        <li>Predicting molecular properties and behavior</li>
        <li>Drug discovery and molecular design</li>
        <li>Catalyst development for chemical reactions</li>
        <li>Materials property prediction</li>
      </ul>
      
      <h3>Optimization Problems</h3>
      
      <p>Many machine learning tasks involve complex optimization challenges where quantum algorithms may provide advantages:</p>
      
      <ul>
        <li>Portfolio optimization in finance</li>
        <li>Route optimization in logistics</li>
        <li>Resource allocation in cloud computing</li>
        <li>Training deep neural networks with many local minima</li>
      </ul>
      
      <h3>Cryptography and Security</h3>
      
      <p>Quantum machine learning can enhance security applications:</p>
      
      <ul>
        <li>Quantum-enhanced anomaly detection</li>
        <li>Privacy-preserving machine learning using quantum protocols</li>
        <li>Quantum random number generation for ML applications</li>
      </ul>
      
      <h2>Current Limitations and Challenges</h2>
      
      <p>Despite its promise, quantum machine learning faces several significant challenges:</p>
      
      <h3>Hardware Limitations</h3>
      
      <p>Current quantum computers are noisy and have limited coherence times, making it difficult to run complex quantum machine learning algorithms reliably. The number of qubits and circuit depth are also limited.</p>
      
      <h3>Data Encoding Challenges</h3>
      
      <p>Classical data must be encoded into quantum states, which can be a non-trivial process that may require significant quantum resources and may not always provide advantages over classical preprocessing.</p>
      
      <h3>Barren Plateaus</h3>
      
      <p>Variational quantum algorithms can suffer from barren plateau phenomena, where gradients become exponentially small, making optimization difficult or impossible.</p>
      
      <h3>Limited Theoretical Understanding</h3>
      
      <p>The theoretical foundations of when and how quantum machine learning provides advantages over classical methods are still being developed.</p>
      
      <h2>Near-Term Applications and NISQ Devices</h2>
      
      <p>On Noisy Intermediate-Scale Quantum (NISQ) devices available today, several applications show promise:</p>
      
      <h3>Quantum Feature Maps</h3>
      
      <p>Using quantum circuits to create high-dimensional feature representations of classical data, potentially revealing patterns that are difficult to detect classically.</p>
      
      <h3>Hybrid Algorithms</h3>
      
      <p>Combining quantum and classical processing to leverage the strengths of both approaches while mitigating the limitations of current quantum hardware.</p>
      
      <h3>Small-Scale Demonstrations</h3>
      
      <p>Proof-of-concept implementations that demonstrate quantum advantage for specific, carefully constructed problems, providing insights for future developments.</p>
      
      <h2>Major Players and Frameworks</h2>
      
      <p>Several organizations and platforms are driving quantum machine learning research:</p>
      
      <h3>Technology Companies</h3>
      
      <ul>
        <li><strong>IBM:</strong> Qiskit Machine Learning framework</li>
        <li><strong>Google:</strong> TensorFlow Quantum</li>
        <li><strong>Microsoft:</strong> Azure Quantum with Q# integration</li>
        <li><strong>Amazon:</strong> Braket quantum machine learning services</li>
      </ul>
      
      <h3>Research Institutions</h3>
      
      <p>Universities and research labs worldwide are conducting fundamental research into quantum machine learning algorithms and applications.</p>
      
      <h3>Startups</h3>
      
      <p>Specialized companies are developing quantum machine learning software tools and applications for specific industries.</p>
      
      <h2>Future Prospects and Timeline</h2>
      
      <p>The future of quantum machine learning will likely unfold in several phases:</p>
      
      <h3>Near-term (2-5 years)</h3>
      
      <ul>
        <li>Improved hybrid quantum-classical algorithms</li>
        <li>Better understanding of quantum advantage regimes</li>
        <li>Applications in quantum chemistry and optimization</li>
        <li>Enhanced quantum hardware capabilities</li>
      </ul>
      
      <h3>Medium-term (5-15 years)</h3>
      
      <ul>
        <li>Fault-tolerant quantum computers enabling more complex QML algorithms</li>
        <li>Practical quantum advantage for commercial applications</li>
        <li>Integration with classical AI/ML workflows</li>
        <li>Industry-specific quantum ML solutions</li>
      </ul>
      
      <h3>Long-term (15+ years)</h3>
      
      <ul>
        <li>Universal quantum machine learning platforms</li>
        <li>Quantum AI systems with capabilities beyond classical limits</li>
        <li>New quantum machine learning paradigms we haven't yet imagined</li>
      </ul>
      
      <h2>Getting Started with Quantum Machine Learning</h2>
      
      <p>Organizations interested in exploring quantum machine learning should consider:</p>
      
      <ul>
        <li>Identifying use cases where quantum approaches might provide advantages</li>
        <li>Building quantum computing expertise within the organization</li>
        <li>Experimenting with available quantum machine learning frameworks</li>
        <li>Collaborating with quantum computing companies and research institutions</li>
        <li>Staying informed about theoretical and practical developments</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Quantum machine learning represents a convergence of two of the most transformative technologies of our time. While significant challenges remain, the potential for quantum computers to enhance machine learning capabilities is substantial.</p>
      
      <p>As quantum hardware continues to improve and our theoretical understanding deepens, we can expect to see increasingly practical applications of quantum machine learning across various industries.</p>
      
      <p>At AccelCQ, we're helping organizations explore the potential of quantum machine learning for their specific applications, developing hybrid quantum-classical solutions that can provide value even with today's quantum hardware limitations while preparing for the quantum advantages of tomorrow.</p>
    `,
    date: "February 28, 2025",
    image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "James Chen",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "CTO & Co-Founder of AccelCQ, former Head of Cryptography at Google with expertise in secure enclaves and confidential computing."
    },
    category: "Quantum Computing",
    slug: "quantum-machine-learning",
    readTime: "12 min read"
  },
  {
    id: 6,
    title: "Confidential Computing in Financial Services",
    content: `
      <p>The financial services industry handles some of the world's most sensitive data, from personal financial information to proprietary trading algorithms. As financial institutions increasingly adopt cloud computing and collaborate with external partners, the need for advanced data protection technologies has never been greater.</p>
      
      <p>Confidential computing offers a revolutionary approach to protecting sensitive financial data not just at rest and in transit, but also while it's being processed—enabling new levels of security and collaboration in the financial sector.</p>
      
      <h2>The Financial Data Protection Challenge</h2>
      
      <p>Financial institutions face unique challenges when it comes to data protection:</p>
      
      <h3>Regulatory Compliance</h3>
      
      <p>Financial services are subject to extensive regulatory requirements including:</p>
      
      <ul>
        <li>PCI DSS for payment card data</li>
        <li>GDPR and CCPA for personal data protection</li>
        <li>SOX for financial reporting accuracy</li>
        <li>Basel III for risk management</li>
        <li>Regional banking regulations and data residency requirements</li>
      </ul>
      
      <h3>Multi-Party Collaborations</h3>
      
      <p>Financial institutions frequently need to collaborate with:</p>
      
      <ul>
        <li>Other banks for consortium lending and risk assessment</li>
        <li>Regulatory bodies for reporting and compliance</li>
        <li>FinTech partners for innovative services</li>
        <li>Credit agencies and data providers</li>
        <li>Insurance companies for comprehensive financial products</li>
      </ul>
      
      <h3>Advanced Threat Landscape</h3>
      
      <p>Financial institutions are prime targets for sophisticated cyberattacks, including nation-state actors, organized crime syndicates, and insider threats seeking to access valuable financial data and intellectual property.</p>
      
      <h2>How Confidential Computing Transforms Financial Services</h2>
      
      <p>Confidential computing enables financial institutions to process sensitive data in secure enclaves that are protected even from privileged users and cloud providers, opening up new possibilities for secure data sharing and cloud adoption.</p>
      
      <h3>Key Benefits</h3>
      
      <ul>
        <li><strong>Data in Use Protection:</strong> Protect sensitive data during processing, not just storage and transmission</li>
        <li><strong>Zero Trust Security:</strong> Minimize trust requirements even within your own infrastructure</li>
        <li><strong>Secure Multi-Party Computation:</strong> Enable collaboration without exposing sensitive data</li>
        <li><strong>Cloud Confidence:</strong> Adopt cloud services while maintaining data sovereignty</li>
        <li><strong>Regulatory Compliance:</strong> Meet strict data protection requirements with verifiable security guarantees</li>
      </ul>
      
      <h2>Key Use Cases in Financial Services</h2>
      
      <p>Confidential computing is being applied across various areas of financial services:</p>
      
      <h3>1. Secure Analytics and AI</h3>
      
      <p>Financial institutions can leverage confidential computing for:</p>
      
      <ul>
        <li><strong>Fraud Detection:</strong> Train ML models on sensitive transaction data without exposing customer information</li>
        <li><strong>Credit Scoring:</strong> Develop more accurate credit models using confidential data from multiple sources</li>
        <li><strong>Algorithmic Trading:</strong> Protect proprietary trading algorithms while running them in cloud environments</li>
        <li><strong>Risk Analysis:</strong> Perform portfolio risk assessment using confidential market and position data</li>
      </ul>
      
      <h3>2. Regulatory Reporting and Compliance</h3>
      
      <p>Confidential computing enables secure compliance processes:</p>
      
      <ul>
        <li><strong>Automated Reporting:</strong> Generate regulatory reports without exposing underlying sensitive data</li>
        <li><strong>Stress Testing:</strong> Conduct regulatory stress tests using confidential market scenarios</li>
        <li><strong>Audit Trail Creation:</strong> Maintain immutable audit logs within secure enclaves</li>
        <li><strong>Data Residency:</strong> Ensure data never leaves approved jurisdictions during processing</li>
      </ul>
      
      <h3>3. Multi-Party Financial Applications</h3>
      
      <p>Enable secure collaboration between financial institutions:</p>
      
      <ul>
        <li><strong>Consortium Lending:</strong> Multiple banks can assess loan applications using combined credit data</li>
        <li><strong>Anti-Money Laundering (AML):</strong> Share suspicious activity patterns without revealing customer identities</li>
        <li><strong>Market Data Analysis:</strong> Combine proprietary trading data for market research while protecting competitive advantages</li>
        <li><strong>Insurance Underwriting:</strong> Use data from multiple sources for more accurate risk assessment</li>
      </ul>
      
      <h3>4. Payment Processing and Digital Currencies</h3>
      
      <p>Secure payment systems using confidential computing:</p>
      
      <ul>
        <li><strong>Card Payment Processing:</strong> Protect payment card data during transaction authorization</li>
        <li><strong>Digital Currency Wallets:</strong> Secure storage and processing of cryptocurrency private keys</li>
        <li><strong>Cross-Border Payments:</strong> Enable secure international transfers with regulatory compliance</li>
        <li><strong>Central Bank Digital Currencies (CBDCs):</strong> Privacy-preserving digital currency implementations</li>
      </ul>
      
      <h2>Implementation Approaches</h2>
      
      <p>Financial institutions can implement confidential computing through several approaches:</p>
      
      <h3>Cloud-Based Solutions</h3>
      
      <p>Major cloud providers offer confidential computing services:</p>
      
      <ul>
        <li><strong>Microsoft Azure:</strong> Confidential VMs and Azure Confidential Ledger</li>
        <li><strong>AWS:</strong> Nitro Enclaves for EC2 instances</li>
        <li><strong>Google Cloud:</strong> Confidential VMs and Confidential GKE</li>
        <li><strong>IBM Cloud:</strong> Hyper Protect Services for financial workloads</li>
      </ul>
      
      <h3>On-Premises Deployment</h3>
      
      <p>For institutions requiring complete control:</p>
      
      <ul>
        <li>Intel SGX-enabled servers for secure enclaves</li>
        <li>AMD EPYC processors with memory encryption</li>
        <li>ARM TrustZone implementations for edge processing</li>
        <li>Custom hardware security modules (HSMs)</li>
      </ul>
      
      <h3>Hybrid Approaches</h3>
      
      <p>Combining on-premises and cloud capabilities:</p>
      
      <ul>
        <li>Sensitive data processing on-premises with results shared via enclaves</li>
        <li>Multi-cloud deployments for redundancy and regulatory compliance</li>
        <li>Edge computing with confidential processing for real-time applications</li>
      </ul>
      
      <h2>Regulatory and Compliance Considerations</h2>
      
      <p>Implementing confidential computing in financial services requires careful attention to regulatory requirements:</p>
      
      <h3>Data Sovereignty</h3>
      
      <p>Confidential computing can help ensure that sensitive financial data never leaves approved jurisdictions, even when processed in global cloud infrastructures.</p>
      
      <h3>Auditability</h3>
      
      <p>Secure enclaves can provide cryptographic proof of code integrity and data handling, enabling regulators to verify compliance without accessing sensitive data.</p>
      
      <h3>Key Management</h3>
      
      <p>Robust key management systems are essential for confidential computing implementations, often requiring integration with existing HSMs and key management infrastructure.</p>
      
      <h2>Real-World Implementations</h2>
      
      <p>Several financial institutions are already deploying confidential computing:</p>
      
      <h3>Case Study: Multi-Bank Fraud Detection</h3>
      
      <p>A consortium of major banks implemented a confidential computing solution to share fraud patterns and suspicious activity indicators without exposing customer data. The system processes millions of transactions daily, identifying fraud patterns that would be impossible to detect with individual bank data alone.</p>
      
      <h3>Case Study: Regulatory Stress Testing</h3>
      
      <p>A large investment bank deployed confidential computing to conduct regulatory stress tests using highly sensitive market data and proprietary models. The solution ensures that even cloud providers and system administrators cannot access the stress test scenarios or results.</p>
      
      <h2>Challenges and Considerations</h2>
      
      <p>While promising, confidential computing implementation in financial services faces several challenges:</p>
      
      <h3>Performance Overhead</h3>
      
      <p>Encryption and secure enclave operations can introduce performance overhead that must be carefully managed for latency-sensitive financial applications.</p>
      
      <h3>Integration Complexity</h3>
      
      <p>Integrating confidential computing with existing financial systems and workflows requires careful planning and often significant architectural changes.</p>
      
      <h3>Skills and Expertise</h3>
      
      <p>Financial institutions need to develop new skills and expertise in confidential computing technologies, or partner with specialized providers.</p>
      
      <h2>Future Outlook</h2>
      
      <p>The future of confidential computing in financial services looks promising:</p>
      
      <h3>Emerging Standards</h3>
      
      <p>Industry standards for confidential computing in financial services are evolving, providing clearer guidance for implementation and interoperability.</p>
      
      <h3>Regulatory Support</h3>
      
      <p>Regulators are beginning to recognize and support confidential computing as a legitimate approach to data protection and privacy.</p>
      
      <h3>Technology Maturation</h3>
      
      <p>As confidential computing technologies mature, performance overhead decreases and ease of implementation improves.</p>
      
      <h2>Getting Started</h2>
      
      <p>Financial institutions considering confidential computing should:</p>
      
      <ol>
        <li><strong>Assess Use Cases:</strong> Identify specific applications where confidential computing can provide value</li>
        <li><strong>Evaluate Regulations:</strong> Understand how confidential computing fits within regulatory requirements</li>
        <li><strong>Start Small:</strong> Begin with pilot projects to gain experience and demonstrate value</li>
        <li><strong>Build Expertise:</strong> Develop internal capabilities or partner with specialized providers</li>
        <li><strong>Plan Integration:</strong> Design confidential computing solutions that integrate with existing systems</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>Confidential computing represents a transformational opportunity for financial services to enhance data protection, enable new forms of collaboration, and maintain competitive advantages while meeting stringent regulatory requirements.</p>
      
      <p>As the technology matures and regulatory frameworks evolve, confidential computing will likely become a standard component of financial services infrastructure, enabling institutions to unlock the value of their data while maintaining the highest levels of security and privacy protection.</p>
      
      <p>At AccelCQ, we specialize in helping financial institutions navigate the implementation of confidential computing solutions, from initial assessment through production deployment, ensuring that these powerful technologies deliver maximum value while meeting the unique requirements of the financial services sector.</p>
    `,
    date: "February 15, 2025",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Dr. Elena Rodriguez",
      avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "CEO & Co-Founder of AccelCQ with a PhD in Quantum Physics from MIT and 15+ years of experience in secure computing technologies."
    },
    category: "Financial Services",
    slug: "confidential-computing-finance",
    readTime: "10 min read"
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  // Newsletter subscription state
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscriptionError('Please enter a valid email address.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionError('Please enter a valid email address.');
      return;
    }
    
    setIsLoading(true);
    setSubscriptionError('');
    
    try {
      const response = await fetch('https://hook.us2.make.com/hsscivzugsvrcbghpklvreyc661plkeu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          source: 'BlogPost Newsletter Subscription',
          timestamp: new Date().toISOString(),
          page: 'blogpost',
          article: post?.title || 'Unknown'
        }),
      });
      
      if (response.ok) {
        setIsSubscribed(true);
        setSubscriptionError('');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubscriptionError('Sorry, there was an error subscribing. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
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
                
                {!isSubscribed ? (
                  <>
                    {subscriptionError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md mb-3 text-sm">
                        {subscriptionError}
                      </div>
                    )}
                    
                    <form onSubmit={handleSubscribe}>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setSubscriptionError('');
                        }}
                        disabled={isLoading}
                        required
                      />
                      <button 
                        type="submit" 
                        className="w-full bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                    <p className="font-medium">Thank you for subscribing!</p>
                    <p className="text-sm">You'll receive our latest updates at {email}.</p>
                    <button
                      onClick={() => {
                        setIsSubscribed(false);
                        setEmail('');
                      }}
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors mt-2 text-sm"
                    >
                      Subscribe another email
                    </button>
                  </div>
                )}
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