import React, { useState, useEffect } from 'react';
import { Send, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  prefilledSubject?: string;
  prefilledMessage?: string;
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { prefilledSubject = '', prefilledMessage = '' } = props;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: prefilledSubject,
    message: prefilledMessage,
  });

  // Update form data when prefilled values change
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      subject: prefilledSubject,
      message: prefilledMessage,
    }));
  }, [prefilledSubject, prefilledMessage]);
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | 'loading' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill out all required fields.',
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }
    
    // Set loading state
    setFormStatus({
      type: 'loading',
      message: 'Sending your message...',
    });
    
    try {
      // Send data to Make.com webhook
      const response = await fetch('https://hook.us2.make.com/rct6yqs3rdcvc6cnfjfxt2lq89884evy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'AccelCQ Website Contact Form'
        }),
      });
      
      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
        });
        
        // Clear form data on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 8 seconds
        setTimeout(() => {
          setFormStatus({ type: null, message: '' });
        }, 8000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at info@accelcq.com.',
      });
      
      // Reset error message after 8 seconds
      setTimeout(() => {
        setFormStatus({ type: null, message: '' });
      }, 8000);
    }
  };

  const inputClasses = (fieldName: string, hasError: boolean = false) => `
    w-full px-4 py-4 text-gray-900 bg-gray-50 border-2 rounded-xl
    transition-all duration-300 ease-in-out
    focus:outline-none focus:bg-white
    ${hasError 
      ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
      : focusedField === fieldName || formData[fieldName as keyof typeof formData]
        ? 'border-primary-500 focus:border-primary-600 focus:ring-4 focus:ring-primary-100'
        : 'border-gray-200 hover:border-gray-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'
    }
  `;

  const labelClasses = (fieldName: string, hasValue: boolean) => `
    absolute left-4 transition-all duration-300 ease-in-out pointer-events-none
    ${focusedField === fieldName || hasValue
      ? '-top-2 text-xs bg-white px-2 text-primary-600 font-medium'
      : 'top-4 text-gray-500'
    }
  `;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
          <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>

        <AnimatePresence>
      {formStatus.type && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`p-6 mb-8 rounded-2xl border-2 ${
                formStatus.type === 'success' 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                  : formStatus.type === 'error'
                  ? 'bg-red-50 border-red-200 text-red-800'
                  : 'bg-blue-50 border-blue-200 text-blue-800'
          }`}
        >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {formStatus.type === 'success' && <CheckCircle2 size={24} className="text-emerald-600" />}
                    {formStatus.type === 'error' && <AlertTriangle size={24} className="text-red-600" />}
                    {formStatus.type === 'loading' && (
                      <Loader2 
                        size={24} 
                        className="text-blue-600" 
                        style={{ 
                          animation: 'spin 1s linear infinite',
                          transformOrigin: 'center'
                        }} 
                      />
                    )}
                  </div>
                </div>
                <div>
                  <p className="font-medium">{formStatus.message}</p>
                </div>
        </div>
            </motion.div>
      )}
        </AnimatePresence>
      
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('name')}
            required
          />
              <label 
                htmlFor="name" 
                className={labelClasses('name', !!formData.name)}
              >
                Full Name <span className="text-red-500">*</span>
          </label>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('email')}
            required
          />
              <label 
                htmlFor="email" 
                className={labelClasses('email', !!formData.email)}
              >
                Email Address <span className="text-red-500">*</span>
              </label>
            </motion.div>
      </div>
      
          {/* Phone and Subject Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('phone')}
              />
              <label 
                htmlFor="phone" 
                className={labelClasses('phone', !!formData.phone)}
              >
                Phone Number
              </label>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses('subject')} appearance-none cursor-pointer pr-12`}
          >
                <option value="" disabled></option>
            <option value="Confidential Computing">Confidential Computing</option>
            <option value="Quantum Computing">Quantum Computing</option>
            <option value="TOGAF Enterprise Architecture">TOGAF Enterprise Architecture</option>
                <option value="Partnership">Partnership Opportunity</option>
            <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
          </select>
              <label 
                htmlFor="subject" 
                className={labelClasses('subject', !!formData.subject)}
              >
                Subject
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none z-10">
                <svg 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'subject' ? 'text-primary-500' : 'text-gray-400'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
        </div>
            </motion.div>
      </div>
      
          {/* Message Field */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
        <textarea
          id="message"
          name="message"
              rows={6}
          value={formData.message}
          onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={`${inputClasses('message')} resize-none`}
          required
        ></textarea>
            <label 
              htmlFor="message" 
              className={labelClasses('message', !!formData.message)}
            >
              Your Message <span className="text-red-500">*</span>
            </label>
          </motion.div>
      
          {/* Submit Button */}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
        <button
          type="submit"
              disabled={formStatus.type === 'loading'}
              className={`
                group relative w-full md:w-auto min-w-[200px] px-8 py-4 
                text-white font-semibold rounded-xl
                transition-all duration-300 transform hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-primary-100
                ${formStatus.type === 'loading' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl'
                }
              `}
            >
              <div className="flex items-center justify-center">
                {formStatus.type === 'loading' ? (
                  <>
                    <Loader2 size={20} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
          Send Message
                  </>
                )}
              </div>
              
              {/* Animated background on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
            
            <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
              We typically respond within 24 hours. For urgent matters, please call us directly.
            </p>
          </motion.div>
        </form>
      </motion.div>
      </div>
  );
};

export default ContactForm;