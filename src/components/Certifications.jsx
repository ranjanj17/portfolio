import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react'

const certifications = [
  {
    title: 'Introduction to Mobile Development',
    issuer: 'Meta',
    issueDate: 'Mar 2026',
    credentialUrl: 'https://coursera.org/verify/ZFXYGBVM2C7Q',
    color: 'accent-blue',
    icon: '📱',
  },
  {
    title: 'React Native',
    issuer: 'Meta',
    issueDate: 'Mar 2026',
    credentialUrl: 'https://coursera.org/verify/RQ8UHELA9E48',
    color: 'primary-400',
    icon: '⚛️',
  },
  {
    title: 'GenAI for Everyone',
    issuer: 'Coursera Instructor Network',
    issueDate: 'Jun 2025',
    credentialUrl: 'https://coursera.org/account/accomplishments/verify/0GL83VZK9GIX',
    color: 'purple-400',
    icon: '🤖',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    issueDate: 'Jun 2025',
    credentialUrl: 'https://coursera.org/account/accomplishments/verify/RSKQRBKHJHRS',
    color: 'cyan-400',
    icon: '☁️',
  },
  {
    title: 'Programming for Everybody (Python)',
    issuer: 'University of Michigan',
    issueDate: 'Jun 2024',
    credentialUrl: 'https://coursera.org/account/accomplishments/verify/EWGPLA4P47NH',
    color: 'green-400',
    icon: '🐍',
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'UC San Diego',
    issueDate: 'May 2024',
    credentialUrl: 'https://coursera.org/account/accomplishments/records/FZRQ6QNMBBJS',
    color: 'pink-400',
    icon: '🏗️',
  },
  {
    title: 'C++ For C Programmers, Part A',
    issuer: 'UC Santa Cruz',
    issueDate: 'Apr 2024',
    credentialUrl: 'https://coursera.org/account/accomplishments/records/EG8KCPBTNCWW',
    color: 'primary-400',
    icon: '⚡',
  },
  {
    title: 'C++ For C Programmers, Part B',
    issuer: 'UC Santa Cruz',
    issueDate: 'Apr 2024',
    credentialUrl: 'https://coursera.org/account/accomplishments/records/TPYY43BYN82V',
    color: 'accent-blue',
    icon: '⚡',
  },
]

const colorMap = {
  'primary-400': { main: '#f97316', bg: 'rgba(249, 115, 22, 0.1)', border: 'rgba(249, 115, 22, 0.3)' },
  'accent-blue': { main: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.3)' },
  'purple-400': { main: '#a855f7', bg: 'rgba(168, 85, 247, 0.1)', border: 'rgba(168, 85, 247, 0.3)' },
  'green-400': { main: '#4ade80', bg: 'rgba(74, 222, 128, 0.1)', border: 'rgba(74, 222, 128, 0.3)' },
  'pink-400': { main: '#f472b6', bg: 'rgba(244, 114, 182, 0.1)', border: 'rgba(244, 114, 182, 0.3)' },
  'cyan-400': { main: '#22d3ee', bg: 'rgba(34, 211, 238, 0.1)', border: 'rgba(34, 211, 238, 0.3)' },
}

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <span className="text-primary-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 block">
              Continuous Learning
            </span>
            <h2 className="section-title font-medium tracking-widest">
              Licenses & Certifications
            </h2>
            <p className="section-subtitle">
              Professional certifications validating my expertise
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {certifications.map((cert, index) => {
              const colors = colorMap[cert.color]
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  <div
                    className="glass-card p-4 sm:p-6 h-full rounded-xl border transition-all duration-300"
                    style={{
                      borderColor: colors.border,
                      background: `linear-gradient(135deg, ${colors.bg} 0%, transparent 100%)`,
                    }}
                  >
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl"
                        style={{ backgroundColor: colors.bg }}
                      >
                        {cert.icon}
                      </div>
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: colors.bg }}
                      >
                        <Award className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.main }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 text-dark-400 text-xs sm:text-sm mb-3">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: colors.main }} />
                      <span>{cert.issuer}</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-dark-500 text-xs mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Issued {cert.issueDate}</span>
                    </div>

                    {/* View Certificate Button */}
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium transition-all duration-300 group/link"
                      style={{ color: colors.main }}
                      whileHover={{ x: 5 }}
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>

                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                      style={{ backgroundColor: colors.bg }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* LinkedIn CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-10 sm:mt-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/ranjankumarnitjcse24/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dark-700 text-dark-300 hover:text-white hover:border-primary-400 transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>View All on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
