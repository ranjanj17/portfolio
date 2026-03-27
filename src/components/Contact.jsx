import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Clock } from 'lucide-react'

const colorMap = {
  'primary-400': '#f97316',
  'green-400': '#4ade80',
  'accent-blue': '#3b82f6',
  'blue-400': '#60a5fa',
  'white': '#ffffff',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ranjank.cs.20@gmail.com',
    href: 'mailto:ranjank.cs.20@gmail.com',
    color: 'primary-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9135604196',
    href: 'tel:+919135604196',
    color: 'green-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, Karnataka',
    href: '#',
    color: 'accent-blue',
  },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/ranjanj17', label: 'GitHub', color: 'white' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ranjankumarnitjcse24/', label: 'LinkedIn', color: 'blue-400' },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-400 font-medium text-sm tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="section-title">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Looking for full-time opportunities. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Side - Contact Info */}
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-2 space-y-6 lg:space-y-8">
              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="card p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group hover:border-primary-400/30 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                      style={{ backgroundColor: `${colorMap[info.color]}15` }}
                    >
                      <info.icon 
                        className="w-4 h-4 sm:w-5 sm:h-5" 
                        style={{ color: colorMap[info.color] }}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-dark-500 uppercase tracking-wider">{info.label}</div>
                      <div className="text-white font-medium text-sm sm:text-base truncate">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-3 sm:mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 sm:p-4 glass rounded-xl hover:bg-white/5 transition-all duration-300 group"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon 
                        className="w-5 h-5 text-dark-400 transition-colors group-hover:text-white" 
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="relative">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping" />
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">Open to Opportunities</span>
                </div>
                <p className="text-xs sm:text-sm text-dark-400">
                  I'm currently looking for full-time Software Development Engineer roles. 
                  If you have an exciting opportunity, let's connect!
                </p>
              </div>

              {/* Coding Profiles */}
              <div className="card p-4 sm:p-5">
                <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-3 sm:mb-4">
                  Coding Profiles
                </h4>
                <div className="space-y-2">
                  <a href="https://leetcode.com/u/ranjank_nitj/" target="_blank" rel="noopener noreferrer" 
                     className="block text-dark-300 hover:text-primary-400 transition-colors text-xs sm:text-sm">
                    → LeetCode (500+, Rating: 1701, Top 15%)
                  </a>
                  <a href="https://www.geeksforgeeks.org/user/ranjank/" target="_blank" rel="noopener noreferrer"
                     className="block text-dark-300 hover:text-green-400 transition-colors text-xs sm:text-sm">
                    → GeeksforGeeks (400+ DSA & System Design)
                  </a>
                  <a href="https://www.hackerrank.com/ranjank" target="_blank" rel="noopener noreferrer"
                     className="block text-dark-300 hover:text-accent-blue transition-colors text-xs sm:text-sm">
                    → HackerRank (4⭐ in C)
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-3">
              <div className="card p-5 sm:p-6 lg:p-8">
                {/* Form Header */}
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  <span className="ml-3 sm:ml-4 text-xs text-dark-500 font-mono">contact.tsx</span>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-dark-400 text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-400 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-400 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-400 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-400 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-400 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-400 transition-colors"
                        placeholder="Job Opportunity / Collaboration"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-400 transition-colors resize-none"
                        placeholder="Tell me about the opportunity..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
